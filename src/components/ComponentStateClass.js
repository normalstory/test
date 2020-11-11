import React, { Component } from 'react';

class componentStateClass extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNum: 0,
  //   };
  // }
  state = {
    number: 0,
    fixedNum: 0,
  };
  render() {
    //const number = 0;
    const { number, fixedNum } = this.state;
    return (
      <div>
        <h3>{this.props.children}</h3>
        <h5>countNum : {number} </h5>
        <h5>No countNum : {fixedNum}</h5>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              //콜백함수
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
            //this.setState({ number: number + 1 });

            //this.setState({ number: this.state.number + 1 });

            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          count +1
        </button>
      </div>
    );
  }
}

export default componentStateClass;
