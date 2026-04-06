import React from "react";

const Task = ({ task, onToggle, onDelete }) => {
  // task   = the task object { _id, title, completed }
  // onToggle = function from Dashboard to mark complete
  // onDelete = function from Dashboard to delete
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between hover:shadow-md transition">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, task.completed)}
          className="w-5 h-5 accent-indigo-600 cursor-pointer"
        />
        {/* title — strikethrough if completed */}
        <span
          className={`ml-3 text-gray-800 font-medium flex-1 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
      {/* delete button — calls onDelete when clicked */}
      <button
        onClick={() => onDelete(task._id)}
        className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
