import { LocalStorageService } from "./localstorage";

export interface TaskProps {
  id: number;
  title: string;
  completed?: boolean;
}

const localStorageService: LocalStorageService = new LocalStorageService();

export function deleteTaskById(key: string, taskId: number): void {
  const tasks: TaskProps[] = localStorageService.getItem<TaskProps>(key);
  const updateTasks: TaskProps[] = tasks.filter(
    (task: TaskProps) => task.id !== taskId,
  );
  localStorageService.setItem(key, updateTasks);
}

export function addTask(key: string, task: TaskProps): void {
  const tasks: TaskProps[] = localStorageService.getItem<TaskProps>(key);
  // TODO: Implement a message to the user if the task already exists;
  if (tasks.some((t: TaskProps) => t.title === task.title)) return;
  localStorageService.setItem(key, [...tasks, tasks]);
}
