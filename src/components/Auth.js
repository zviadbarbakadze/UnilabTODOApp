import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        imagePreview,
        setImagePreview,
        todo,
        setTodo,
        newTask,
        setNewTask,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
