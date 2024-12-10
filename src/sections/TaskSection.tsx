import { useState, type ReactNode } from "react";
import { InputTask } from "@/components/custom/Task/InputTask";
import { Task } from "@/components/custom/Task/Task";

export const TaskSection = (): ReactNode => {
  const [tasks, setTasks] = useState<string[]>(["Example"]);

  const onAddTask = (newTask: string): void => {
    // TODO: Implement a message to the user if the task already exists;
    if (tasks.includes(newTask)) return;
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="w-full">
      <div className="relative">
        <InputTask onNewTask={onAddTask} />

        {tasks.map((task: string) => (
          <Task key={task} name={task} />
        ))}
        {/* <!-- <Button className="absolute right-0 top-0"> */}
        {/* <CircleArrowDown size={32} /> */}
        {/* </Button> --> */}
      </div>
    </section>
  );
};
