import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  // Simulate user authentication on page load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedUser) {
      setUser(storedUser);
      setTasks(storedTasks || []);
    }
  }, []);

  const login = (username, password) => {
    // Simulated user authentication logic
    if (username === 'user' && password === 'password') {
      const authenticatedUser = { username };
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      setError(null);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const register = (username, password) => {
    // Simulated user registration logic
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setError(null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  return (
    <AuthContext.Provider value={{ user, tasks, login, register, logout, addTask, error }}>
      {children}
    </AuthContext.Provider>
  );
}
