import { useEffect, useState, type ReactNode } from "react";

import { Task } from "@/components/custom/Task/Task";
import { InputTask } from "@/components/custom/Task/InputTask";

import { type TaskProps } from "@/lib/storage-utils";
import { LocalStorageService } from "@/lib/localstorage";

const localStorageKey: string = "tasks";

export const TaskSection = (): ReactNode => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const localStorageService: LocalStorageService = new LocalStorageService();

  useEffect(() => {
    const storedTasks: TaskProps[] =
      localStorageService.getItem<TaskProps>(localStorageKey);
    setTasks(storedTasks);
  }, []);

  const onAddTask = (newTask: string): void => {
    // TODO: Implemente a message here
    if (tasks.some((task: TaskProps) => task.title === newTask)) return;

    const newTaskObj: TaskProps = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    const updatedTasks: TaskProps[] = [...tasks, newTaskObj];
    setTasks(updatedTasks);

    localStorageService.setItem<TaskProps>(localStorageKey, updatedTasks);
  };

  return (
    <section className="w-full mt-5">
      <div className="relative">
        <InputTask onNewTask={onAddTask} />

        <div className="mt-10">
          {tasks.map(({ id, title, completed }: TaskProps) => (
            <div className="mt-2">
              <Task key={id} id={id} title={title} completed={completed} />
            </div>
          ))}
        </div>

        {/* <!-- <Button className="absolute right-0 top-0"> */}
        {/* <CircleArrowDown size={32} /> */}
        {/* </Button> --> */}
      </div>
    </section>
  );
};
