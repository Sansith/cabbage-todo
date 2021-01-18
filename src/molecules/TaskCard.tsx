import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Tag, Tooltip } from "antd";
import React from "react";
import TaskCheckButton from "../atoms/TaskCheckButton";
import { TodoItem } from "../models/TodoItem";
import moment from "moment";
export interface TaskCardProps {
  todoItem: TodoItem;
  handleRemove: (id: number) => void;
  handleComplete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  todoItem,
  handleRemove,
  handleComplete,
}) => {
  const onComplete = () => {
    handleComplete(todoItem.id);
  };

  const getDateString = (date: Date | undefined) => {
    return moment(date).format("YYYY/mm/DD, h:mm");
  };
  return (
    <div>
      <Card className='w-full flex flex-start shadow-sm  rounded-lg hover:shadow-lg m-3'>
        <TaskCheckButton
          onPress={onComplete}
          isCompleted={todoItem.isCompleted}
          label={todoItem.label}
        ></TaskCheckButton>
        <Tag color='purple'>
          {todoItem.isCompleted
            ? `completed :${getDateString(todoItem.completedTime)}`
            : `created   :${getDateString(todoItem.createdTime)}`}
        </Tag>
        <div className='absolute bottom-0 right-0 p-2'>
          <Tooltip title='Remove'>
            <Button
              onClick={() => handleRemove(todoItem.id)}
              type='text'
              shape='circle'
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default TaskCard;
