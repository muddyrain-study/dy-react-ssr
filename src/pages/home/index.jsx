import React, { useState } from 'react';

export default () => {
  const [n, setN] = useState(1);
  return (
    <div>
      <h1>首页 页面 {n}</h1>
      <button
        onClick={() => {
          console.log('hello');
          setN(n + 1);
        }}
      >
        点击
      </button>
    </div>
  );
};
