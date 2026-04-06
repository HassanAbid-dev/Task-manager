import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-indigo-500/20 backdrop-blur-md shadow-lg shadow-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
              ✓
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hidden sm:inline-block">
              TaskMaster
            </span>
          </Link>

          {/* Desktop Menu with Auth */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"></span>
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"></span>
              </Link>
            )}

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-indigo-400 border border-indigo-500/50 rounded-lg hover:bg-indigo-500/10 hover:border-indigo-500 transition-all duration-200 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 font-medium"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.email?.[0]?.toUpperCase()}
                  </div>
                  <span className="text-gray-300 text-sm">
                    {user.email?.split("@")[0]}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-500/30 hover:border-red-500 transition-all duration-200 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-indigo-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-indigo-500/20 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-500/10 rounded-lg transition-colors font-medium"
            >
              Home
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-500/10 rounded-lg transition-colors font-medium"
              >
                Dashboard
              </Link>
            )}
            <div className="pt-2 border-t border-indigo-500/20 space-y-2">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 text-indigo-400 border border-indigo-500/50 rounded-lg hover:bg-indigo-500/10 text-center font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg text-center font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-500/30 font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
