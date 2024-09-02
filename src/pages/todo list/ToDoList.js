import React, { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ConfirmCancelDialog } from "./components/ConfirmCancelDialog";

export const ToDoList = () => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [currentTask, setCurrentTask] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (currentTask.id) {
      setTasks(tasks.map((t) => (t.id === currentTask.id ? task : t)));
    } else {
      setTasks([
        {
          ...task,
          id: `${task.title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
        },
        ...tasks,
      ]);
    }
    resetForm();
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setFormVisible(true);
  };

  const resetForm = () => {
    setCurrentTask({});
    setFormVisible(false);
  };

  const closeFormWithDialog = () => {
    setDialogVisible(true);
  };

  const discardChanges = () => {
    resetForm();
    setDialogVisible(false);
  };

  return (
    <section className="p-4 mt-6">
      <main className="todo mt-24 p-4 max-w-3xl mx-auto bg-gray-800 text-white rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div>
          <button
            onClick={() => setFormVisible(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add New Task
          </button>
          {isFormVisible && (
            <TaskForm
              currentTask={currentTask}
              addOrUpdateTask={addOrUpdateTask}
              closeForm={closeFormWithDialog}
            />
          )}
          <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          {isDialogVisible && (
            <ConfirmCancelDialog
              onCancel={() => setDialogVisible(false)}
              onDiscard={discardChanges}
            />
          )}
        </div>
      </main>
    </section>
  );
};
