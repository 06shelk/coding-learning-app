import React, { createContext, useContext, useState, useEffect } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Local Storage에서 로그인 정보 가져오기
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
            setUsername(user.username);
        }
    }, []);

    const login = (user) => {
        setIsLoggedIn(true);
        setUsername(user.username);
        localStorage.setItem('user', JSON.stringify(user)); // Local Storage에 저장
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('user'); // Local Storage에서 제거
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth 훅
export const useAuth = () => {
    return useContext(AuthContext);
};
