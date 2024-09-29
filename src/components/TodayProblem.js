import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodayProblem = ({ problem }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleProblemClick = () => {
    navigate(`/api/problem/${problem.id}`); // 해당 문제의 세부 페이지로 이동
  };

  return (
    <div className='todayPro'>
      <div key={problem.id}>
        <h3>{problem.questionName}</h3>
        <p>{problem.question}</p>
        <button onClick={handleProblemClick}>문제 풀러 가기</button> {/* 클릭 시 이동 */}
      </div>
    </div>
  );
}

export default TodayProblem;
