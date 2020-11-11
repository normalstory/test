import React from 'react';
import PropTypes from 'prop-types';

const Mycomponent = ({ name, favoriteNum, children }) => {
  //(2) const { name, children } = props;
  return (
    <div>
      {/* (1) <h3>{props.children}</h3> */}
      <h3>{children}</h3>
      note
      <ul>
        <li> 'props.children'과 '컴포넌트.defaultProps'는 예약어</li>
        <li>
          ProtoTypes는 import한 후, '컴포넌트.propTypes'로 호출해서 'PropTypes.규칙' 으로 설정
        </li>
      </ul>
      {/* (1) 안녕하세요 제 이름은 {props.name}입니다. */}
      안녕하세요 제 이름은 {name}입니다.
      <br />
      저는 숫자 {favoriteNum}를 가장 좋아합니다.
    </div>
  );
};

Mycomponent.defaultProps = {
  name: '홍길동',
};
Mycomponent.propTypes = {
  name: PropTypes.string,
  favoriteNum: PropTypes.number.isRequired,
};

export default Mycomponent;
