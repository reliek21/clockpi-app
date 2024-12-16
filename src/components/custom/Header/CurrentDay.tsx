import type { ReactNode } from "react";
import { format } from "date-fns";

export const CurrentDay = (): ReactNode => {
  const currentDate: Date = new Date();
  const getDay: string = format(currentDate, "EEEE");
  const getCompleteDay: string = format(currentDate, "MMMM d, yyyy");

  return (
    <div>
      <h1 className="text-[36px] font-bold">{getDay}</h1>
      <p className="text-base">{getCompleteDay}</p>
    </div>
  );
};
