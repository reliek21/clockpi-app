import type { ReactNode } from "react";
import { InputTask } from "@/components/custom/Task/InputTask";

const TaskSection = (): ReactNode => {
  return (
    <section className="w-full">
      <div className="relative">
        <InputTask
          onNewTask={function (task: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* <!-- <Button className="absolute right-0 top-0"> */}
        {/* <CircleArrowDown size={32} /> */}
        {/* </Button> --> */}
      </div>
    </section>
  );
};
