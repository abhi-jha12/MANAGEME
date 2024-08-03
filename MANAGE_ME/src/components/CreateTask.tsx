import React, { useState } from "react";
import { createTask } from "../backend";
import DateTimePicker from "./DateTimePicker";
import { FlagImage, SendImage, TagImage, TimerImage } from "../assets";

const AddTask: React.FC = () => {
  const [userId] = useState<number>(1); // Default user ID for testing
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [priority, setPriority] = useState<number>(1);
  const [tags, setTags] = useState<string[]>([]);
  const [showDateTimePicker, setShowDateTimePicker] = useState<boolean>(false);
  const [showPriorityModal, setShowPriorityModal] = useState<boolean>(false);
  const [showTagsModal, setShowTagsModal] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const taskTime = new Date(time);
      await createTask({
        user_id: userId,
        name: taskName,
        description,
        time: taskTime,
        priority,
        tags,
      });
      alert("Task added successfully!");
      resetForm();
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Failed to add task. Please try again.");
    }
  };

  const handleDateChange = (date: Date) => {
    setTime(date.toISOString());
    setShowDateTimePicker(false);
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(Number(event.target.value));
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setTags(selectedOptions);
  };

  const resetForm = () => {
    setTaskName("");
    setDescription("");
    setTime("");
    setPriority(1);
    setTags([]);
  };

  return (
    <div className="bg-card_background text-white p-4 w-80 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">
            Task Name:
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
        {time && (
          <p className="mt-2">Time: {new Date(time).toLocaleString()}</p>
        )}
        {tags.length > 0 && (
          <p className="mt-2">Tags: {tags.join(", ")}</p>
        )}
        <p className="mt-2">Priority: {priority}</p>
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex flex-row items-center justify-center gap-2">
            <button type="button" onClick={() => setShowDateTimePicker(true)} className="focus:outline-none">
              <img src={TimerImage} alt="Timer" />
            </button>
            <button type="button" onClick={() => setShowTagsModal(true)} className="focus:outline-none">
              <img src={TagImage} alt="Tag" />
            </button>
            <button type="button" onClick={() => setShowPriorityModal(true)} className="focus:outline-none">
              <img src={FlagImage} alt="Flag" />
            </button>
          </div>
          <button type="submit" className="focus:outline-none">
            <img src={SendImage} alt="Send" />
          </button>
        </div>
      </form>

      {showDateTimePicker && (
        <DateTimePicker
          show={showDateTimePicker}
          setShow={setShowDateTimePicker}
          onChange={handleDateChange}
        />
      )}

      {showPriorityModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-card_background p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold mb-2">Set Priority</h2>
            <select
              className="rounded-md p-2 bg-card_background border border-shadow_purple mb-2 w-full"
              value={priority}
              onChange={handlePriorityChange}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
            <button onClick={() => setShowPriorityModal(false)} className="bg-purple-500 text-white rounded-md p-2 mt-2">
              Close
            </button>
          </div>
        </div>
      )}

      {showTagsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-card_background p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold mb-2">Select Tags</h2>
            <select
              multiple
              className="rounded-md p-2 bg-card_background border border-shadow_purple mb-2 w-full"
              value={tags}
              onChange={handleTagsChange}
            >
              <option value="design">Design</option>
              <option value="grocery">Grocery</option>
              <option value="health">Health</option>
              <option value="home">Home</option>
              <option value="movie">Movie</option>
              <option value="music">Music</option>
              <option value="social">Social</option>
              <option value="sport">Sport</option>
              <option value="university">University</option>
              <option value="work">Work</option>
            </select>
            <button onClick={() => setShowTagsModal(false)} className="bg-purple-500 text-white rounded-md p-2 mt-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
