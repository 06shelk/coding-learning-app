import React, { useEffect, useState } from 'react'; 
import Header from '../components/Header';
import TodayProblem from '../components/TodayProblem';
import axios from 'axios';
import "../css/Today.css";

function TodayCon() {
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript'); // 기본 언어 설정

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/daily-problems');
        const problemsData = response.data[selectedLanguage].easy; // 선택된 언어의 'easy' 난이도 문제 데이터 가져오기

        // 랜덤으로 3개의 문제 선택
        const shuffledProblems = problemsData.sort(() => 0.5 - Math.random());
        const selected = shuffledProblems.slice(0, 3);
        setSelectedProblems(selected);
      } catch (error) {
        console.error('문제를 가져오는 데 오류가 발생했습니다:', error);
      }
    };

    // 하루에 한 번만 문제를 가져오도록 로컬 스토리지에 날짜 확인
    const today = new Date().toDateString();
    const lastFetchDate = localStorage.getItem('lastFetchDate');

    if (lastFetchDate !== today) {
      fetchProblems(); // 새로운 문제를 가져옴
      localStorage.setItem('lastFetchDate', today); // 오늘 날짜 저장
    } else {
      // 로컬 스토리지에서 이전에 가져온 문제를 불러오기
      const storedProblems = JSON.parse(localStorage.getItem('selectedProblems'));
      if (storedProblems) {
        setSelectedProblems(storedProblems); // 저장된 문제로 상태 업데이트
      } else {
        fetchProblems(); // 처음이라면 문제를 가져옴
      }
    }
  }, [selectedLanguage]); // selectedLanguage가 변경될 때마다 문제를 새로 가져옴

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value); // 선택된 언어 상태 업데이트
  };

  return (
    <div className='TodayCon'>
      <div className='TodayCon__inner'>
        <div className='langChoice'>
          <h1>오늘의 문제</h1>
          <select name="languages" className="lang" onChange={handleLanguageChange} value={selectedLanguage}>
            <option value="javascript">JavaScript</option> 
            <option value="python">Python</option> 
            <option value="java">Java</option> 
          </select>
        </div>
        <div className='todayPros'>
          {selectedProblems.map(problem => (
            <TodayProblem key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Today = () => {
  return (
    <>
      <Header />
      <TodayCon />
    </>
  );
}

export default Today;
