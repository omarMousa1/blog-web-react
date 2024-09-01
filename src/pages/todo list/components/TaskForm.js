import React, { useState } from "react";
import cancelIcon from "../../../assets/images/icons/X.svg";

export const TaskForm = ({ currentTask, addOrUpdateTask, closeForm }) => {
  const [title, setTitle] = useState(currentTask.title || "");
  const [date, setDate] = useState(currentTask.date || "");
  const [description, setDescription] = useState(currentTask.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTask({ title, date, description, id: currentTask.id });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 p-4 rounded shadow mb-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {currentTask.id ? "Edit Task" : "New Task"}
        </h2>
        <button onClick={closeForm} type="button" className="text-white">
          <img src={cancelIcon} alt="Cancel" className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block font-bold mb-1">Title</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-600 text-white"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-600 text-white"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-600 text-white"
          />
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          {currentTask.id ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};
