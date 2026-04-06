import React, { useEffect } from "react";
import CreateTask from "../components/CreateTask";
import axiosInstance from "../api/axiosInstance";
import { useState } from "react";
import Task from "../components/Task";
const Dashboard = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/tasks/getTasks");
        console.log("Tasks fetched:", response.data);
        setTasks(response.data); // Assuming the response data is an array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);
  const onToggle = async (taskId, completed) => {
    try {
      await axiosInstance.put(`/tasks/updateTask/${taskId}`, {
        completed: !completed,
      });
      setTasks((prev) =>
        prev.map((t) =>
          t._id === taskId ? { ...t, completed: !completed } : t,
        ),
      );
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: "Error updating task" });
    }
  };

  // when delete clicked → task._id travels here
  const deleteTask = async (id) => {
    await axiosInstance.delete(`/tasks/deleteTask/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };
  return (
    <div className="min-h-screen bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
            My Tasks
          </h1>
          <p className="text-gray-400">Manage and track all your tasks</p>
        </div>

        <button
          onClick={() => setShowCreateTask(true)}
          className="mb-6 px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-indigo-500/50"
        >
          + Create Task
        </button>

        {showCreateTask && (
          <CreateTask
            setShowCreateTask={setShowCreateTask}
            setTasks={setTasks}
          />
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading tasks...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg font-medium">No tasks yet</p>
            <p className="text-gray-500 mt-2">
              Create your first task to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <Task
                key={task._id}
                task={task}
                onToggle={() => onToggle(task._id, task.completed)}
                onDelete={() => deleteTask(task._id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
