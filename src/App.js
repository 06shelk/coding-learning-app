import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import MyPage from './pages/MyPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login"  element={<Login />}  />
        <Route path="/SignUp"  element={<SignUp />}  />
        <Route path="/MyPage"  element={<MyPage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;