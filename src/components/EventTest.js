import React, { Component } from 'react';

class EventTest extends Component {
  state = {
    username: '',
    message: '',
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleChage = this.handleChage.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   handleChage(e) {
  //     //console.log(e.target.value);
  //     //const val=e.target.value;
  //     //this.setState(e.target.value);
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }
  handleChage = (e) => {
    this.setState({
      //message: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  //   handleClick() {
  //     alert(this.state.message);
  //     this.setState({
  //       message: '',
  //     });
  //   }
  handleClick = () => {
    alert(this.state.message + '&' + this.state.username);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    // if (e.key === 'Enter') {
    //   this.handleClick();
    // }
    e.key === 'Enter' && this.handleClick();
  };

  render() {
    return (
      <div>
        <h5>이벤트 실습 by class (feat Hooks)</h5>
        <input
          type="text"
          name="message"
          placeholder="내용을 입력하세요."
          value={this.state.message}
          onChange={this.handleChage}
        ></input>
        <input
          type="text"
          name="username"
          placeholder="write your name.."
          value={this.state.username}
          onChange={this.handleChage}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventTest;
