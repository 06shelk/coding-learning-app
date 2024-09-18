import React from 'react'
import left from "../images/ic_left.svg";
import right from "../images/ic_right.svg";
import styles from '../css/Home.module.css';

const Problems = () => {
  return (
    <div className={styles.Problems}>
     <select name="languages" className="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
     </select>
      <table>
        <tr>
          <th scope="col">순번</th>
          <th scope="col">제목</th>
          <th scope="col">언어</th>
        </tr>
        <tr>
          <td>1</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>2</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>3</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>4</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>5</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>6</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>7</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>8</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>9</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>10</td>
          <td>가장 많이 받은 선물</td>
          <td>javascript</td>
        </tr>
      </table>
      <div className={styles.pages}>
          <div><img src={left}/></div>
          <div>1</div>
          <div><img src={right}/></div>
      </div>
    </div>
  )
}

export default Problems