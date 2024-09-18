import React from 'react'
import Header from '../components/Header'
import '../css/SignUp.css'


function SignUpForm () {
    return (
        <>
            <div id='signUpForm'>
                <form className='signUpForm__inner'>
                    <div className='form__con'>
                        <p>이메일</p>
                        <input id='userid' type='text' placeholder='이메일을 입력해주세요'/>
                    </div>
                    <div className='form__con'>
                        <p>비밀번호</p>
                        <input id='pwd' type='password' maxlength='5' placeholder='비밀번호를 입력해 주세요'/>
                    </div>
                    <div className='form__con'>
                        <p>비밀번호 확인</p>
                        <input id='pwd' type='password' maxlength='5' placeholder='비밀번호를 입력해 주세요'/>
                    </div>
                    <div className='form__con'>
                        <p>이름</p>
                        <input id='pwd' type='text' maxlength='5' placeholder='이릉을 입력해 주세요'/>
                    </div>
                    <input className ="signBtn" type='submit' value='회원가입'/>
                </form>
            </div>
        </>
    )
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