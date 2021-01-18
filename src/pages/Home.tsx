import { SmileOutlined } from "@ant-design/icons";
import { Card, Result } from "antd";
import React, { useCallback, useState } from "react";
import { TodoItem } from "../models/TodoItem";
import AddTaskInput from "../molecules/AddTaskInput";
import TaskCard from "../molecules/TaskCard";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addTask = useCallback(
    (taskLabel: string) => {
      setTodoList((prevList) => {
        return [
          ...prevList,
          {
            id: prevList.length === 0 ? 0 : prevList.length + 1,
            createdTime: new Date(),
            isCompleted: false,
            label: taskLabel,
          },
        ];
      });
    },
    [setTodoList]
  );

  const removeTask = useCallback(
    (id: number): void => {
      console.log("delete");

      setTodoList((prevList) => {
        return prevList.filter((item, i) => item.id !== id);
      });
    },
    [setTodoList]
  );

  const completeTask = useCallback(
    (id: number): void => {
      setTodoList((prevList) => {
        const index = prevList.findIndex((item) => item.id === id);
        const newSts = [...prevList];
        newSts[index].isCompleted = true;
        newSts[index].completedTime = new Date();
        return newSts;
      });
    },
    [setTodoList]
  );

  return (
    <div className=' h-full w-3/5'>
      <AddTaskInput handleAddTask={addTask}></AddTaskInput>
      <Card className='rounded-lg'>
        {todoList.length === 0 ? (
          <Result icon={<SmileOutlined />} title='Whooo!, No Tasks Left' />
        ) : (
          todoList?.map((item, i) => (
            <TaskCard
              key={i}
              handleRemove={removeTask}
              handleComplete={completeTask}
              todoItem={item}
            ></TaskCard>
          ))
        )}
      </Card>
    </div>
  );
};

export default HomePage;
