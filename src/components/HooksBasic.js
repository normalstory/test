import React, { useState } from 'react';

const HooksBasic = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕!');
  const onClickLeaver = () => setMessage('잘가~');

  const [color, setColor] = useState('black');

  const object = { a: 1, b: 2, c: 3 };
  const nextObj = { ...object, d: 4 };
  console.log('nextObj', nextObj);
  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({ id: 4 });
  console.log('arr1:', nextArray);
  let n2 = nextArray.filter((item) => item.id !== 2);
  console.log('arr2:', n2);
  let n3 = nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));
  console.log('arr3:', n3);

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
