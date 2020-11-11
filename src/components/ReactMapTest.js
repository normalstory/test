import React, { useState } from 'react';

const ReactMapTest = () => {
  const [names, setNames] = useState([
    { id: 1, text: '홍길동' },
    { id: 2, text: '홍길서' },
    { id: 3, text: '홍길남' },
    { id: 4, text: '홍길북' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      //concat = push와 달리 배열자체를 바꾸지않고 새로운 배열을 만들어준다
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <h5>React Map Test ***</h5>
      <p>불변성을 유지하면서 추가(concat), 삭제(filter)하기 ***</p>
      <input type="text" onChange={onChange}></input>
      <button onClick={onClick}>add</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default ReactMapTest;
