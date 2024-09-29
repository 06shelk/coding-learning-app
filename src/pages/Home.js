import React from 'react'
import '../css/global.css';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Problems from '../components/Problems.js';
import Footer from '../components/Footer.js';
import styles from '../css/Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header/>
      <Banner />
      <Problems />
      <Footer/>
    </div>
  )
}

export default Home








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [problems, setProblems] = useState([]);

//   useEffect(() => {
//     // 백엔드에서 문제 가져오기
//     axios.post('/api/daily_problems', { user_id: 1 })
//       .then(response => {
//         setProblems(response.data.problems);
//       })
//       .catch(error => {
//         console.error("Error fetching problems", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>오늘의 코딩 문제</h1>
//       <ul>
//         {problems.map((problem, index) => (
//           <li key={index}>{problem}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;