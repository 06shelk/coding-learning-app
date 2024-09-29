import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../css/Login.module.css';
import { useAuth } from '../contexts/AuthContext'; // AuthContext 가져오기
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const { login } = useAuth(); // login 함수 가져오기
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { userid, password });
            const user = { username: response.data.username, token: response.data.token };
            login(user); // 로그인 상태 업데이트
            // 로그인 후 리다이렉트
            console.log(user);
            navigate('/'); 
        } catch (error) {
            console.error('로그인 실패:', error);
            setErrorMessage('로그인 실패. 다시 시도해 주세요.');
        }
    };

    return (
        <div id={styles.LoginForm}>
            <form className={styles.LoginForm__inner} onSubmit={handleSubmit}>
                <div className={styles.form__con}>
                    <p>아이디</p>
                    <input id='userid' type='text' placeholder='아이디를 입력해주세요' value={userid} onChange={(e) => setUserid(e.target.value)} />
                </div>
                <div className={styles.form__con}>
                    <p>비밀번호</p>
                    <input id='pwd' type='password' placeholder='비밀번호를 입력해 주세요' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                <input className={styles.loginBtn} type='submit' value='로그인' />
                <p className={styles.pwFind}>비밀번호 찾기</p>
            </form>
        </div>
    );
}

const Login = () => {
    return (
        <>
            <Header />
            <LoginForm />
        </>
    );
}

export default Login;
