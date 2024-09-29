import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 리다이렉트를 위한 useNavigate 임포트
import '../css/MyPage.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Calendar from '../components/Calendar';
import MyProblem from '../components/MyProblem';
import { useAuth } from '../contexts/AuthContext'; // 로그인 상태 확인을 위한 useAuth 임포트



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
  const { isLoggedIn } = useAuth(); // 로그인 상태 가져오기
  const navigate = useNavigate(); // 리다이렉트를 위한 navigate 함수
  const [hasAlerted, setHasAlerted] = useState(false); // 알림 상태 추가

  useEffect(() => {
    // 로그인 상태가 false인 경우
    if (!isLoggedIn && !hasAlerted) {
      alert("로그인 시 이용할 수 있습니다.");
      setHasAlerted(true); // 알림 상태 업데이트
      navigate('/Login'); // 로그인하지 않았다면 로그인 페이지로 리다이렉트
    }
  }, [isLoggedIn, navigate, hasAlerted]); 

  return (
    <>
      <Header />
      <MyPageCon />
    </>
  );
}

export default MyPage