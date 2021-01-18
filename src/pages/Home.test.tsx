import { render, screen } from "@testing-library/react";
import TaskCard from "../molecules/TaskCard";
test("task card test", () => {
  render(
    <TaskCard
      handleComplete={() => null}
      todoItem={{
        createdTime: new Date(),
        id: 1,
        isCompleted: false,
        label: "Hello World",
      }}
      handleRemove={() => null}
    ></TaskCard>
  );

  expect(screen.getByText("Hello World")).toBeDefined();
});
