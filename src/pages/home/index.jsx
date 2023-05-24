import React, { useState } from 'react';
import styles from './index.css';
import pngUrl from '../../assets/1.png';

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}</h1>
      <div className={styles.bg}></div>
      <h1>你干嘛~~~~~~~~~~~~~</h1>
      <img src={pngUrl} alt='' />
      <button
        className={styles.button}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}
