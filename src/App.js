import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Byhistory from './components/Byhistory';
import Byrouter from './components/Byrouter';
import ByBook from './components/ByBook';
import Spread from './components/Spread';
import Destruct from './components/Destruct';
import Mycomponent from './components/Mycomponent';
import MycomponentClass from './components/MycomponentClass';
import ComponentStateClass from './components/ComponentStateClass';
import HooksBasic from './components/HooksBasic';
import EventTest from './components/EventTest';
import EventByFunc from './components/EventByFunc';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ backroundColor: 'gray', padding: 20, border: '5 solid gray' }}>
          <Link to="/">홈</Link>
          <ol>
            <li>
              <h3>SPA 기초</h3>
              <Link to="/by-router">라우터 활용</Link>
              <br />
              <Link to="/by-browser">브라우저 활용</Link>
              <br />
              <Link to="/at-books">책내용</Link>
              <br />
              <Link to="/sub-at-books">책내용(썹메뉴)</Link>
              <br />
            </li>
            <li>
              <h3>ES6+</h3>
              <Link to="/spread-operator">전개 연산자</Link>
              <br />
              <Link to="/destructring">비구조화</Link>
              <br />
            </li>
            <li>
              <Mycomponent name={'react'} favoriteNum={1}>
                component function
              </Mycomponent>
            </li>
            <li>
              <MycomponentClass name={'React'} favonum={9}>
                component class
              </MycomponentClass>
            </li>
            <li>
              <ComponentStateClass>State in the component of Class</ComponentStateClass>
            </li>
            <li>
              <HooksBasic></HooksBasic>
            </li>
            <li>
              <EventTest />
            </li>
            <li>
              <EventByFunc />
            </li>
          </ol>

          <Route exact path="/" component={Home} />
          <Route exact path="/by-router" component={ByRRD} />
          <Route exact path="/by-browser" component={bybrowser} />
          <Route path="/at-books" component={bybook1} />
          <Route path="/at-books" component={bybook2} />
          <Route path="/sub-at-books" component={ByBook} />
          <Route path="/spread-operator" component={Spread} />
          <Route path="/destructring" component={Destruct} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = (match) => {
  return <h2>이곳은 홈페이지 입니다.</h2>;
};
const ByRRD = (match) => {
  return <Byrouter />;
};
const bybrowser = (match) => {
  return <Byhistory />;
};
const bybook1 = ({ match }) => {
  return <h5>exact뺀 경우, 책내용입니다.</h5>;
};
const bybook2 = ({ match }) => {
  return <h5>exact뺀 경우, 책내용입니다.</h5>;
};

export default App;
