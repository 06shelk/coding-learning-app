import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/Header';
import styles from '../css/SignUp.module.css';
import axios from 'axios';

function SignUpForm() {
  const [userid, setUserid] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/signup', {
        userid,
        username,
        password,
      });
      alert("회원 가입이 되었습니다.");
      console.log('회원가입 성공:', response.data);
      navigate('/Login'); // 메인 화면 경로
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 실패. 다시 시도해 주세요.');
    }
  };

  return (
    <div id={styles.signUpForm}>
      <form className={styles.signUpForm__inner} onSubmit={handleSubmit}>
        <div className={styles.form__con}>
          <p>아이디</p>
          <input
            id='userid'
            type='text'
            placeholder='아이디를 입력해주세요'
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
        </div>
        <div className={styles.form__con}>
          <p>이름</p>
          <input
            id='username'
            type='text'
            placeholder='이름을 입력해주세요'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.form__con}>
          <p>비밀번호</p>
          <input
            id='pwd'
            type='password'
            maxLength='255'
            placeholder='비밀번호를 입력해 주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.form__con}>
          <p>비밀번호 확인</p>
          <input
            id='pwdConfirm'
            type='password'
            maxLength='255'
            placeholder='비밀번호를 확인해 주세요'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <input className={styles.signBtn} type='submit' value='회원가입' />
      </form>
    </div>
  );
}

const SignUp = () => {
  return (
    <>
      <Header />
      <SignUpForm />
    </>
  );
};

export default SignUp;