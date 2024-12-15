import React, { useState, type FC, type ReactNode } from "react";
import { Input } from "@/components/ui/input";

interface InputTaskProps {
  onNewTask: (task: string) => void;
}

export const InputTask: FC<InputTaskProps> = ({ onNewTask }): ReactNode => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const trimmedValue: string = inputValue.trim();
    // TODO: Add here a pop up with a message
    if (trimmedValue.length <= 1) return;

    onNewTask(trimmedValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
