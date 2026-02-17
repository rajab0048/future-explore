import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    // Load registered users from localStorage
    const saved = localStorage.getItem('registeredUsers');
    return saved ? JSON.parse(saved) : [];
  });

  const login = (email, password) => {
    // Get current registered users from localStorage
    const currentUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if user exists in registered users
    const existingUser = currentUsers.find(u => u.email === email);
    
    if (!existingUser) {
      throw new Error('No account found with this email. Please sign up first.');
    }
    
    if (existingUser.password !== password) {
      throw new Error('Incorrect password. Please try again.');
    }
    
    // User found and password matches
    const userData = {
      email: existingUser.email,
      name: existingUser.name,
    };
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  const signup = (userData) => {
    // Get current registered users from localStorage
    const currentUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if user already exists
    const existingUser = currentUsers.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('An account with this email already exists. Please login instead.');
    }
    
    // Add new user to registered users
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password, // In real app, this should be hashed
    };
    
    const updatedUsers = [...currentUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    
    // Auto login after signup
    const loginData = {
      email: newUser.email,
      name: newUser.name,
    };
    setIsAuthenticated(true);
    setUser(loginData);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(loginData));
    return true;
  };

  // Check if user was previously authenticated (for page refresh)
  React.useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup, registeredUsers }}>
      {children}
    </AuthContext.Provider>
  );
};
