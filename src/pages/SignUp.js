import React from 'react'
import Header from '../components/Header'
import styles from '../css/SignUp.module.css';

function SignUpForm() {
    return (
      <div id={styles.signUpForm}>
        <form className={styles.signUpForm__inner}>
          <div className={styles.form__con}>
            <p>이메일</p>
            <input id='userid' type='text' placeholder='이메일을 입력해주세요' />
          </div>
          <div className={styles.form__con}>
            <p>비밀번호</p>
            <input id='pwd' type='password' maxLength='5' placeholder='비밀번호를 입력해 주세요' />
          </div>
          <div className={styles.form__con}>
            <p>비밀번호 확인</p>
            <input id='pwdConfirm' type='password' maxLength='5' placeholder='비밀번호를 입력해 주세요' />
          </div>
          <div className={styles.form__con}>
            <p>이름</p>
            <input id='name' type='text' maxLength='5' placeholder='이름을 입력해 주세요' />
          </div>
          <input className={styles.signBtn} type='submit' value='회원가입' />
        </form>
      </div>
    );
  }
const SignUp = () => {
  return (
    <>
    <Header/>
    <SignUpForm/>
</>
  )
}

export default SignUp