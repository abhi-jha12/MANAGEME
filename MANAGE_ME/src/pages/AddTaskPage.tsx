import React, { useEffect } from "react";
import CreateTask from "../components/CreateTask";

const AddTaskPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-10 bg-black w-screen h-screen">
      <h1 className="text-white text-4xl font-bold my-2 pt-8">TASKS</h1>
      <CreateTask />
    </div>
  );
};

export default AddTaskPage;
