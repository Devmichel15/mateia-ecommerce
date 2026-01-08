import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const storedAuth = localStorage.getItem("mateia_auth");
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      if (authData.isAuthenticated) {
        setIsAuthenticated(true);
        setUser(authData.user);
      }
    }

    const storedUsers = localStorage.getItem("mateia_users");
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    }
  }, []);

  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Campos obrigatórios: Email e Palavra-passe",
      };
    }

    const userFound = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      return {
        success: false,
        message: "Credenciais inválidas ou conta não encontrada",
      };
    }

    const authData = {
      isAuthenticated: true,
      user: { name: userFound.name, email: userFound.email },
    };

    localStorage.setItem("mateia_auth", JSON.stringify(authData));
    setUser(authData.user);
    setIsAuthenticated(true);
    return { success: true };
  };

  const signUp = (name, email, password) => {
    if (!name || !email || !password) {
      return {
        success: false,
        message: "Todos os campos são obrigatórios",
      };
    }

    if (registeredUsers.some((u) => u.email === email)) {
      return {
        success: false,
        message: "Este email já está registado",
      };
    }

    const newUser = { name, email, password };
    const updatedUsers = [...registeredUsers, newUser];

    setRegisteredUsers(updatedUsers);
    localStorage.setItem("mateia_users", JSON.stringify(updatedUsers));

    // Auto-login after signup
    return login(email, password);
  };

  const logout = () => {
    localStorage.removeItem("mateia_auth");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, signUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
