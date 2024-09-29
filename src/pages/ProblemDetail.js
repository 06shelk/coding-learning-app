import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import "../css/ProblemDetail.css";

const ProblemDetail = () => {
  const { problemId } = useParams(); // URL에서 problemId 가져오기
  const [problem, setProblem] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false); // 정답 보기 상태 추가

  useEffect(() => {
    const fetchProblemDetail = async () => {
      try {
        // 전체 문제 데이터를 가져옴
        const response = await axios.get('http://localhost:4000/api/daily-problems'); 
        const problemsData = response.data;

        // 원하는 문제 데이터를 찾음 (예: JavaScript와 easy 난이도)
        const allProblems = problemsData.javascript.easy;

        // problemId에 해당하는 문제를 찾음
        const foundProblem = allProblems.find((problem) => problem.id === parseInt(problemId, 10));

        setProblem(foundProblem); // 해당 문제를 state에 저장
      } catch (error) {
        console.error('문제 세부 정보를 가져오는 데 오류가 발생했습니다:', error);
      }
    };
    fetchProblemDetail();
  }, [problemId]);

  if (!problem) {
    return <div>로딩 중...</div>;
  }

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer); // 버튼 클릭 시 정답 보기 상태 토글
  };

  return (
    <>
      <Header/>
      <div className='ProblemDetail'>
        <div className='ProblemDetail__inner'>
          {showAnswer ? ( // 정답 보기 상태에 따라 다르게 렌더링
            <div>
              <h1>정답</h1>
              <p>{problem.code}</p> {/* 문제의 코드 (정답) 표시 */}
            </div>
          ) : (
            <div>
              <h1>문제 설명</h1>
              <p>문제 설명: {problem.question}</p>
            </div>
          )}
        </div>
        <div className='ProblemDetail_btns'>
          <div onClick={handleShowAnswer}>
            {showAnswer ? '문제 설명 보기' : '정답 보기'} {/* 버튼 텍스트 토글 */}
          </div>
          <div>다른 사람 풀이 보기</div>
        </div>
      </div>
    </>
  );
};

export default ProblemDetail;
