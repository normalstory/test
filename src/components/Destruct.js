import React from 'react';
import { Route, Link } from 'react-router-dom';

const Destruct = ({ match }) => {
  return (
    <div>
      <h2>비구조화에 대한 내용입니다</h2>
      <Link to={`${match.url}/array`}>배열 비구조화</Link>
      <br />
      <Link to={`${match.url}/object`}>객체 비구조화</Link>
      <br />

      <Route path={`${match.url}/:destructId`} component={Dest} />
      <Route exact path={match.url} render={() => <p>상세페이지 선택</p>} />
    </div>
  );
};

export default Destruct;

function Dest({ match }) {
  if (match.params.destructId === 'array') {
    const arr1 = [1, 2];
    const [a1, b1] = arr1;
    const arr2 = [1];
    const [a2 = 10, b2 = 20] = arr2;
    const arr3 = [1, 2, 3];
    const [first, ...rest1] = arr3;
    const [a3, b3, c3, ...rest2] = arr3;
    return (
      <div>
        <h5>-배열 비구조화-</h5> '왼쪽부터 순서대로 들어간다'
        <p>
          a1= {a1}, b1= {b1} | a2= {a2}, b2= {b2}
        </p>
        <p>
          first={first}, rest1={rest1} | a3={a3}, b3={b3}, c3={c3}, rest2={rest2}
        </p>
      </div>
    );
  }
  if (match.params.destructId === 'object') {
    const obj1 = { age: 21, name: 'mike', name2: 'mikle' };
    const { age, name } = obj1;
    const { age: theAge, name2 } = obj1;
    const obj2 = { age3: undefined, name3: null, grade3: 'A' };
    const { age3 = 0, name3 = 'noName', grade3 = 'F' } = obj2;
    const getDefaultAge = () => {
      console.log('helloAge');
      return 0;
    };
    const obj4 = { age4: 21, grade4: 'A' };
    const { age4 = getDefaultAge(), default_age = getDefaultAge(), grade4 } = obj4;

    const obj5 = { age5: 21, name5: 'mike', grade5: 'A' };
    const { age5, ...rest5 } = obj5;
    console.log(rest5);

    const rest5Obj = () => {
      const obj5 = { age5: 21, name5: 'mike', grade5: 'A' };
      for (const [key, value] of Object.entries(obj5)) {
        <p>
          `${key}: ${value}`
        </p>;
      }
    };
    return (
      <div>
        <h5>-객체 비구조화-</h5> '속성명 기준으로 들어간다'
        <p>
          age1={age}, name1={name} | age2='할당x(참조에러)', theAge(별칭)={theAge}, name2={name2}
        </p>
        <p>
          age3={age3}, name3={name3}, grade3={grade3}
        </p>
        <p>
          age4={age4}, default_age={default_age}(들어오는 값이 없을때 함수가 실행된다), grade4=
          {grade4}
        </p>
        <p>
          age5={age5}, {console.log(rest5)}, rest5={rest5Obj}
        </p>
      </div>
    );
  }
}
