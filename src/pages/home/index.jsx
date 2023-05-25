import React, { useState } from 'react';
import styles from './index.module.css';
import pngUrl from '../../assets/1.png';

export const Home = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}12312312</h1>
      <div className={styles.bg}></div>
      <button
        className={styles.button}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        点击
      </button>
      <h1>你干嘛~~~~11~~~~~~~~~</h1>
      <div className={styles.red}></div>
      <img src={pngUrl} alt='' />
    </div>
  );
};
