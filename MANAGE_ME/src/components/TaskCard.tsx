import React from "react";
import Tag from "./Tag";
import PriorityFlag from "./PriorityFlag";

interface TaskCardProps {
  task_name: string;
  time: string;
  priority: number;
  tags: Array<string>;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task_name,
  time,
  priority,
  tags,
}) => {
  const taskDate = new Date(time);
  const currentDate = new Date();

  const isToday = taskDate.toDateString() === currentDate.toDateString();
  const isTomorrow =
    taskDate.toDateString() ===
    new Date(currentDate.setDate(currentDate.getDate() + 1)).toDateString();

  const dateLabel = isToday
    ? "Today"
    : isTomorrow
    ? "Tomorrow"
    : taskDate.toDateString();

  const hours = taskDate.toLocaleTimeString([], { hour: '2-digit', hour12: true });

  return (
    <div className="flex flex-col bg-card_background w-80 h-18 p-2 gap-2 text-white rounded-md">
      <h1>{task_name}</h1>
      <div className="flex flex-row justify-between">
        <p className={`flex flex-row items-center ${!isToday&& "text-xs"} tracking-wide`}>
          {dateLabel} {hours}
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="mb-4">
          <PriorityFlag priority={priority}  />
          </div>
          
          <Tag tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
