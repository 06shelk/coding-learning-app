import React from 'react'
import Header from '../components/Header'
import styles from '../css/Login.module.css'


function LoginForm() {
    return (
      <div id={styles.LoginForm}>
        <form className={styles.LoginForm__inner}>
          <div className={styles.form__con}>
            <p>이메일</p>
            <input id='userid' type='text' placeholder='이메일을 입력해주세요' />
          </div>
          <div className={styles.form__con}>
            <p>비밀번호</p>
            <input
              id='pwd'
              type='password'
              maxLength='5'
              placeholder='비밀번호를 입력해 주세요'
            />
          </div>
  
          <input className={styles.loginBtn} type='submit' value='로그인' />
          <p className={styles.pwFind}>비밀번호 찾기</p>
        </form>
        <div className={styles.notMember}>아직 회원이 아니신가요? <span> 회원가입</span></div>
      </div>
    );
  }

const Login = () => {
  return (
    <>
    <Header/>
    <LoginForm/>
</>
  )
}

export default Login