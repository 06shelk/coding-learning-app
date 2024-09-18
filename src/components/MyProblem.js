import React from 'react'

const MyProblem = () => {
  return (
    <div className='MyProblem'>
      <h1>내가 푼  문제</h1>
      <p>11월 7일 목요일</p>
      <div className='proTable'>
        <div className='line'><div>가장 많이 받은 선물</div><div>javascript</div></div>
        <div className='line'><div>가장 많이 받은 선물</div><div>javascript</div></div>
        <div className='line'><div>가장 많이 받은 선물</div><div>javascript</div></div>
        <div className='line'><div>가장 많이 받은 선물</div><div>javascript</div></div>
      </div>
      <button className='nextBtn'>다른 문제 풀기</button>
    </div>
  )
}

export default MyProblem