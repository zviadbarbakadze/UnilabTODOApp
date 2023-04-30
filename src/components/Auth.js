import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  return (
    <AuthContext.Provider
      value={{ user, setUser, imagePreview, setImagePreview }}
    >
      {children}
    </AuthContext.Provider>
  );
};
