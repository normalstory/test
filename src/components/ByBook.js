import React from 'react';
import { Route, Link } from 'react-router-dom';

const ByBook = ({ match }) => {
  return (
    <div>
      <h2>여기는 책의 내용입니다</h2>
      <Link to={`${match.url}/blueBook`}>파란책</Link>
      <br />
      <Link to={`${match.url}/redBook`}>빨간책</Link>
      <br />

      <Route path={`${match.url}/:bookId`} component={Book} />
      <Route exact path={match.url} render={() => <h3>책을 선택해주세요</h3>} />
    </div>
  );
};

export default ByBook;

function Book({ match }) {
  return <h2>{match.params.bookId}를 선택하셨습니다</h2>;
}
