import React, { useEffect, useState } from "react";
import { getTasksForUser } from "../backend";
import TaskCard from "../components/TaskCard";

interface Task {
  task_id: number;
  name: string;
  time: string;
  priority: number;
  tags: string[];
  description?: string;
}

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(5);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = 1; // Default user ID for testing
        const fetchedTasks = await getTasksForUser(userId);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks. Please try again later.");
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tasks.length) {
    return <div>Loading...</div>;
  }

  // Determine the tasks to be displayed on the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Determine the total number of pages
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex flex-col flex-grow p-10">
        <h1 className="text-white text-4xl font-bold mb-6">TASKS</h1>
        <div className="flex flex-col gap-6">
          {currentTasks.map((task) => (
            <TaskCard
              key={task.task_id}
              task_name={task.name}
              time={task.time}
              priority={task.priority}
              tags={task.tags}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-shadow_purple text-white rounded-md"
        >
          Previous
        </button>
        <span className="text-white mt-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-shadow_purple text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
