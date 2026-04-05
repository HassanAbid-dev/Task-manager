import { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userAuthenticated = async () => {
      try {
        const res = await axiosInstance.get("/auth/user/me");
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    userAuthenticated();
  }, []);
  const register = async (name, email, password) => {
    const res = await axiosInstance.post("/auth/user/register", {
      name,
      email,
      password,
    });
    setUser(res.data.user); // we can set user here because after registration, the server sends a cookie with the token, and when we make the next request to getMe, it will return the user data. Alternatively, we could call userAuthenticated() here to fetch the user data immediately after registration.
  };
  const login = async (email, password) => {
    await axiosInstance.post("/auth/user/login", {
      email,
      password,
    });
    const res = await axiosInstance.get("/auth/user/me");
    setUser(res.data.user);
  };
  const logout = async () => {
    await axiosInstance.post("/auth/user/logout");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
