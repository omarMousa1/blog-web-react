import React from "react";

export const ConfirmCancelDialog = ({ onCancel, onDiscard }) => {
  return (
    <dialog
      open
      className="bg-gray-700 p-6 rounded shadow text-white absolute top-1/4"
    >
      <p className="mb-4">Discard unsaved changes?</p>
      <div className="flex space-x-4">
        <button
          onClick={onCancel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onDiscard}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Discard
        </button>
      </div>
    </dialog>
  );
};
