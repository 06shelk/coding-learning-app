import React from 'react'
import ProfileImg from "../images/Ellipse 4.png"
const Profile = () => {
  return (
    <div className="Profile">
        <h1>프로필</h1>
        <div className='prof'>
            <div className='proImg'>
                <img src={ProfileImg} alt="profile"></img>
            </div>
            <div>
                <h3>김미림님</h3>
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