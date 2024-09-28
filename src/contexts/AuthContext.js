import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
    localStorage.setItem('token', user.token); // 토큰 저장
    localStorage.setItem('username', user.username); // 사용자 이름 저장
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('token'); // 토큰 제거
    localStorage.removeItem('username'); // 사용자 이름 제거
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
