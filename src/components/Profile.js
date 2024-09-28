import React, {useEffect, useState, setIsLoggedIn} from 'react'
import ProfileImg from "../images/Ellipse 4.png"

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
    const [username, setUsername] = useState(''); // 사용자 이름 상태

    useEffect(() => {
        // 여기서 로그인 상태를 확인하는 로직을 추가할 수 있습니다.
        // 예를 들어, 로컬 스토리지에서 토큰을 확인할 수 있습니다.
        const token = localStorage.getItem('token'); // 토큰이 저장되어 있다고 가정
        if (token) {
            setIsLoggedIn(true);
            setUsername(localStorage.getItem('username')); // 사용자 이름을 로컬 스토리지에서 가져옴
        }
    }, []);
    
  return (
    <div className="Profile">
        <h1>프로필</h1>
        <div className='prof'>
            <div className='proImg'>
                <img src={ProfileImg} alt="profile"></img>
            </div>
            <div>
                <h3>{username}님</h3>
                <p>kim1234@e-mirim.hs.kr</p>
            </div>
        </div>
        <div className='review'>
            <h4>학습 한 줄 평</h4>
            <p>간즤나는 한줄평을 적어봐요~</p>
        </div>
        <div className='lang'>
            <h4>사용 언어</h4>
            <ul>
                <li>Java</li>
                <li>C</li>
                <li>Python</li>
            </ul>
        </div>
    </div>
  )
}

export default Profile