import React from 'react'
import styles from '../css/Home.module.css';

const Search = () => {
  return (
    <div id='Search'>
      <div className={styles.Search__inner}>
          <input type="text"/>
      </div>
    </div>
  )
}

export default Search