import React from 'react'
import Header from '../components/Header'
import TodayProblem from '../components/TodayProblem'
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
          <TodayProblem/>
          <TodayProblem/>
          <TodayProblem/>
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