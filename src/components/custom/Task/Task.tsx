import type { FC, ReactNode } from "react";
import { CircleArrowDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TaskProps {
  name: string;
}

export const Task: FC<TaskProps> = ({ name }): ReactNode => {
  return (
    <div className="flex items-center justify-between bg-gray-100 py-4 px-4 rounded-lg">
      <div className="flex items-center">
        <Checkbox className="w-6 h-6 border-2" />
        <p className="ml-2 mr-2">{name}</p>
      </div>
      <Button
        variant="destructive"
        className="bg-[#F25F4C] rounded-[100%] h-8 w-8"
      >
        <X />
      </Button>
    </div>
  );
};
