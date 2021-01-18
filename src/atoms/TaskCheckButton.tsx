import React from "react";
import { CheckCircleTwoTone, CheckOutlined } from "@ant-design/icons";
export interface TaskCheckButtonProps {
  label: string;
  isCompleted: boolean;
  onPress: () => void;
}

const TaskCheckButton: React.FC<TaskCheckButtonProps> = ({
  isCompleted,
  label,
  onPress,
}) => {
  return (
    <div onClick={() => onPress()} className='flex flex-row cursor-pointer'>
      <div className='px-3'>
        {!isCompleted ? (
          <CheckOutlined className='animate-bounce' />
        ) : (
          <CheckCircleTwoTone />
        )}
      </div>
      <div className={isCompleted ? "p-1 line-through text-gray-300" : "p-1"}>
        {!!label && label}
      </div>
    </div>
  );
};

export default TaskCheckButton;
