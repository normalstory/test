import React, { useState } from 'react';

const HooksBasic = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕!');
  const onClickLeaver = () => setMessage('잘가~');

  const [color, setColor] = useState('black');

  return (
    <div>
      <h1>useState</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeaver}>퇴장</button>
      <h5 style={{ color }}>{message}</h5>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        blue
      </button>
    </div>
  );
};

export default HooksBasic;
