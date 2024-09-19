import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodayProblem = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // API에서 문제 데이터 가져오기
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/daily-problems');
        setProblems(response.data);
      } catch (error) {
        console.error('문제를 가져오는 데 오류가 발생했습니다:', error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div className='todayPro'>
      {problems.length > 0 ? (
        problems.map((problem) => (
          <div key={problem.id}>
            <h3>{problem.questionName}</h3>
            <p>{problem.question}</p>
            <button>문제 풀러 가기</button>
          </div>
        ))
      ) : (
        <p>문제를 불러오는 중입니다...</p>
      )}
    </div>
  );
}

export default TodayProblem;
