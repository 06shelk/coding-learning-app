// src/components/ProblemDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // URL에서 파라미터를 가져오기 위해 사용
import "../css/ProblemDetail.css"

const ProblemDetail = () => {
 
  return (
    <div className='ProblemDetail'>
      <div className='ProblemDetail__inner'>
        <div>
          <h1>문제설명</h1>
          <p>문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.</p>
        </div>
        <div>
          <h1>문제설명</h1>
          <p>문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.</p>
        </div>
      </div>
      <div className='ProblemDetail_btns'>
        <div>정답 보기</div>
        <div>다른 사람 풀이 보기</div>
      </div>
    </div>
  );
};

export default ProblemDetail;
