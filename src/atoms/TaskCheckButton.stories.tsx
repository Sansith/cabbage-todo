import { Meta } from "@storybook/react/types-6-0";
import TaskCheckButton from "./TaskCheckButton";

export default {
  title: "Example/TaskCheckButton",
  component: TaskCheckButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
