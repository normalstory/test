import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RRD1 from './RRDhelloworld';
import RRD2 from './RRDhiru';

class Byrouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: '5 solid gray' }}>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/photo">사진</Link>
            </li>
            <li>
              <Link to="/rooms">방 소개</Link>
            </li>
            <li>
              <Link to="/component-js">add1</Link>
            </li>
            <li>
              <Link to="/component-jsx">add2</Link>
            </li>
            <li>
              <Link to="/component">exact 제외하면</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/photo" component={Photo} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/component-js" component={cjs} />
          <Route exact path="/component-jsx" component={cjsx} />
          <Route path="/component" component={cjs} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = (match) => {
  return <h2>이곳은 리액트-라우터-돔 라이브러리 활용페이지 입니다.</h2>;
};
const Photo = (match) => {
  return <h2>이곳은 사진첩 감상 페이지입니다.</h2>;
};
const Rooms = (match) => {
  return <h2>이곳은 방 소개 페이지 입니다.</h2>;
};
const cjs = (match) => {
  return <RRD1 />;
};
const cjsx = (match) => {
  return <RRD2 />;
};

export default Byrouter;
