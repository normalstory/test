import React, { Component } from 'react';

class EventTest extends Component {
  state = {
    message: '',
  };
  constructor(props) {
    super(props);
    this.handleChage = this.handleChage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChage(e) {
    //console.log(e.target.value);
    //const val=e.target.value;
    //this.setState(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }
  render() {
    return (
      <div>
        <h5>이벤트 실습</h5>
        <input
          type="text"
          name="message"
          placeholder="내용을 입력하세요."
          value={this.state.message}
          onChange={this.handleChage}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventTest;
