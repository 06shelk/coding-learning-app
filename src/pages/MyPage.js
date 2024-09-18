import React from 'react'
import '../css/MyPage.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Calendar from '../components/Calendar'
import MyProblem from '../components/MyProblem'


function MyPageCon() {
    return (
        <div className='MyPageCon'>
          <div>
            <Profile/>
          </div>
          <div>
            <Calendar/>
          </div>
          <div>
            <MyProblem/>
          </div>
        </div>
    )
}


const MyPage = () => {
  return (
    <>
    <Header/>
    <MyPageCon/>
    </>
  )
}

export default MyPage