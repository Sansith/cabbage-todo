import { Input } from "antd";
import React, { KeyboardEvent, useState } from "react";
export interface AddTaskInputProps {
  handleAddTask: (label: string) => void;
}

const AddTaskInput: React.FC<AddTaskInputProps> = ({ handleAddTask }) => {
  const [value, setValue] = useState("");
  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value !== "") {
      handleAddTask(value);
      setValue("");
    }
  };
  return (
    <div className='m-5'>
      <Input
        className='rounded-lg'
        value={value}
        placeholder='Add new Task'
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => handleAdd(e)}
      />
    </div>
  );
};

export default AddTaskInput;
