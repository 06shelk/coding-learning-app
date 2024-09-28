// src/components/SignUpForm.js
import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../css/SignUp.module.css';
import axios from 'axios';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signup', {
        email,
        password,
        name,
      });
      console.log('회원가입 성공:', response.data);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <div id={styles.signUpForm}>
      <form className={styles.signUpForm__inner} onSubmit={handleSubmit}>
        <div className={styles.form__con}>
          <p>이메일</p>
          <input
            id='userid'
            type='text'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.form__con}>
          <p>비밀번호</p>
          <input
            id='pwd'
            type='password'
            maxLength='5'
            placeholder='비밀번호를 입력해 주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.form__con}>
          <p>비밀번호 확인</p>
          <input
            id='pwdConfirm'
            type='password'
            maxLength='5'
            placeholder='비밀번호를 입력해 주세요'
          />
        </div>
        <div className={styles.form__con}>
          <p>이름</p>
          <input
            id='name'
            type='text'
            maxLength='5'
            placeholder='이름을 입력해 주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
