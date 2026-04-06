import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
const CreateTask = ({ setShowCreateTask, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/tasks/createTask", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      setError(null);
      setShowCreateTask(false);
      setTasks((prev) => [...prev, response.data]);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating task:", error);
      setError("Failed to create task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
          required
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 resize-none"
          rows="3"
        />

        {error && (
          <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
