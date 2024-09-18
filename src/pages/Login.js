import React from 'react'
import Header from '../components/Header'
import '../css/Login.css'


function LoginForm () {
    return (
        <>
            <div id='LoginForm'>
                <form className='LoginForm__inner'>
                    <div className='form__con'>
                        <p>이메일</p>
                        <input id='userid' type='text' placeholder='이메일을 입력해주세요'/>
                    </div>
                    <div className='form__con'>
                        <p>비밀번호</p>
                        <input id='pwd' type='password' maxlength='5' placeholder='비밀번호를 입력해 주세요'/>
                    </div>
                  
                    <input className ="signBtn" type='submit' value='로그인'/>
                    <p className='pwFind'>비밀번호 찾기</p>
                </form>
            </div>
        </>
    )
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