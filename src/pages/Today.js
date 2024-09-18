import React from 'react'
import Header from '../components/Header'
import "../css/Today.css"

function TodayCon() {
  return (
    <div className='TodayCon'>
      <div className='TodayCon__inner'>
        <div className='langChoice'>
          <h1>오늘의 문제</h1>
          <select name="languages">
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className='todayPros'>
          <div className='todayPro todayPro1'>
            <h2>문자열 출력하기</h2>
            <p>문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.</p>
            <button>문제 풀러 가기</button>
          </div>
          <div className='todayPro todayPro2'>
            <h2>문자열 출력하기</h2>
            <p>문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.</p>
            <button>문제 풀러 가기</button>
          </div>
          <div className='todayPro todayPro3'>
            <h2>문자열 출력하기</h2>
            <p>문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.</p>
            <button>문제 풀러 가기</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const Today = () => {
  return (
    <>
        <Header/>
        <TodayCon/>
    </>
  )
}

export default Today