import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MycomponentClass extends Component {
  render() {
    const { name, favonum, children } = this.props;
    return (
      <div>
        <h3>{children}</h3>내 이름은 '{name}'입니다.
        <br />
        저는 숫자 {favonum}를 가장 좋아합니다.
      </div>
    );
  }
}

MycomponentClass.defaultProps = {
  name: '홍길서',
};

MycomponentClass.propTypes = {
  name: PropTypes.string,
  favonum: PropTypes.number.isRequired,
};

export default MycomponentClass;
