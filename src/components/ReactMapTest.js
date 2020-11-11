import React, { useState } from 'react';

const ReactMapTest = () => {
  const [names, setMenus] = useState([
    { id: 1, text: '홍길동' },
    { id: 2, text: '홍길서' },
    { id: 3, text: '홍길남' },
    { id: 4, text: '홍길북' },
  ]);
  const [inputText, setInput] = useState('');
  const [nextId, setNextId] = useState(5);
  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <h5>React Map Test</h5>
      <ul>{namesList}</ul>
    </div>
  );
};

export default ReactMapTest;
