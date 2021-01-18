export interface TodoItem {
  id: number;
  label: string;
  createdTime: Date;
  completedTime?: Date;
  isCompleted: boolean;
}
