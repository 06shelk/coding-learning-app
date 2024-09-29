import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import Today from './pages/Today'; 
import MyPage from './pages/MyPage'; 
import ProblemDetail from './pages/ProblemDetail'; 


function App() {
  return (
    <BrowserRouter>
     
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Today" element={<Today />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/api/problem/:problemId" element={<ProblemDetail />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
