import { SmileOutlined } from "@ant-design/icons";
import { Card, Result } from "antd";
import React, { useState } from "react";
import { TodoItem } from "../models/TodoItem";
import AddTaskInput from "../molecules/AddTaskInput";
import TaskCard from "../molecules/TaskCard";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addTask = (taskLabel: string) => {
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
  };

  const removeTask = (id: number): void => {
    setTodoList((prevList) => {
      return prevList.filter((item, i) => item.id !== id);
    });
  };

  const completeTask = (id: number): void => {
    console.log("on complte");

    setTodoList((prevList) => {
      console.log(todoList);

      const index = prevList.findIndex((item) => item.id === id);
      console.log(prevList[index]);
      const newSts = [...prevList];
      newSts[index].isCompleted = true;
      newSts[index].completedTime = new Date();
      return newSts;
    });
  };

  return (
    <div className='bg-gray-200 h-full w-3/5'>
      <AddTaskInput handleAddTask={addTask}></AddTaskInput>
      <Card className='rounded-lg'>
        {todoList.length === 0 ? (
          <Result icon={<SmileOutlined />} title='Great!, No Tasks Left!' />
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
