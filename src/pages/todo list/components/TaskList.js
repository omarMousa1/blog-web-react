import React from "react";

export const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className="space-y-4">
      {tasks.map(({ id, title, date, description }) => (
        <div key={id} className="bg-gray-700 p-4 rounded shadow">
          <p className="font-bold text-lg">
            <strong>Title: </strong>
            {title}
          </p>
          <p>
            <strong>Date: </strong>
            {date}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => editTask({ id, title, date, description })}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
