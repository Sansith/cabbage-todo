import { Meta } from "@storybook/react/types-6-0";
import TaskCheckButton from "./TaskCheckButton";

export default {
  title: "TaskCheckButton",
  component: TaskCheckButton,
} as Meta;
export const NotChecked = () => (
  <TaskCheckButton
    isCompleted={false}
    label='Task'
    onPress={() => null}
  ></TaskCheckButton>
);

export const Checked = () => (
  <TaskCheckButton
    isCompleted={true}
    label='Task'
    onPress={() => null}
  ></TaskCheckButton>
);
