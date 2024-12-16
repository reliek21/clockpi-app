import { useEffect, useRef, useState, type ReactNode } from "react";
import { Moon } from "lucide-react";

import { Progress } from "@components/ui/progress";
import { CurrentDay } from "@components/custom/Header/CurrentDay";

import type { TaskProps } from "@/lib/storage-utils";
import { LocalStorageService } from "@/lib/localstorage";

export const HeaderSection = (): ReactNode => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const localStorageKey: string = "tasks";
  const localStorageService: LocalStorageService = new LocalStorageService();

  useEffect(() => {
    const storedTasks: TaskProps[] =
      localStorageService.getItem<TaskProps>(localStorageKey);
    setTasks(storedTasks);
  }, []);

  let totalTasks: number = tasks.length;
  let totalCompletedTasks: number = tasks.filter(
    (task: TaskProps) => task.completed,
  ).length;

  const progressValue: number =
    totalTasks > 0 ? (totalCompletedTasks / totalTasks) * 100 : 0;

  return (
    <section className="flex flex-col justify-between w-full items-center">
      <div className="flex w-full items-center justify-between">
        <CurrentDay />
        <Moon size="32" color="#FF9900" />
      </div>

      <div className="flex items-center gap-5 w-full mt-2">
        <Progress value={progressValue} />
        <p className="text-base font-bold">{progressValue.toFixed(0)}%</p>
      </div>
    </section>
  );
};
