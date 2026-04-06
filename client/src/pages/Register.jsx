import { useState } from "react";
import AuthContext from "../context/AuthContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(name, email, password);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="bg-linear-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold mb-2 text-center">
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Create Account
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm">
          Join us and organize your tasks
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-red-400 bg-red-950/30 p-3 rounded text-sm border border-red-500/30">
              {error}
            </p>
          )}
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-slate-800/50 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          ></input>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-slate-800/50 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          ></input>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full px-4 py-2 bg-slate-800/50 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          ></input>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
