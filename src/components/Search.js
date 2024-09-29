// import React, { useState, useEffect } from 'react'
// import styles from '../css/Home.module.css';

// const Search = ({ onSearch, value }) => {
//   const [query, setQuery] = useState(value || '');

//   const handleChange = (event) => {
//       setQuery(event.target.value);
//   };

//   useEffect(() => {
//       const handler = setTimeout(() => {
//           onSearch(query);
//       }, 1000);

//       return () => {
//           clearTimeout(handler);
//       };
//   }, [query, onSearch]);

//    useEffect(() => {
//       setQuery(value);
//   }, [value]);

//   return (
//     <div id='Search'>
//       <div className={styles.Search__inner}>
//           <input 
//             type="text"
//             placeholder="검색어를 입력하세요" 
//             value={query}
//             onChange={handleChange}
//           />
//       </div>
//     </div>
//   )
// }

// export default Search