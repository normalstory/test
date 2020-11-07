import React from 'react';

const Spread = ({ match }) => {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];
  arr2.push(4);

  const obj1 = { age: 23, name: 'mike' };
  const obj2 = { ...obj1 };
  obj2.age = 80;
  const size = Object.keys(arr2).length;
  const list = arr2.map((list, index) => (size !== index + 1 ? list + ',' : list));
  return (
    <div>
      전개연산자
      <br />
      arr2 :{list}
      <br />
      obj2.name: {obj2.name}
      <br />
    </div>
  );
};

export default Spread;
