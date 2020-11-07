import React, { Component } from 'react';

class Byhistory extends Component {
  state = {
    pageName: '',
  };
  componentDidMount() {
    window.onpopstate = (event) => {
      //console.log(`locatoin: ${document.location}, state:${event.state}`);
      this.onChangPage(event.state);
    };
  }
  onChangPage = (pageName) => {
    this.setState({ pageName });
  };
  onClick1 = () => {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    this.onChangPage(pageName);
  };
  onClick2 = () => {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    this.onChangPage(pageName);
  };

  render() {
    const { pageName } = this.state;
    return (
      <div>
        <button onClick={this.onClick1}>page1</button>
        <button onClick={this.onClick2}>page2</button>

        {!pageName && <Home />}
        {pageName === 'page1' && <Page1 />}
        {pageName === 'page2' && <Page2 />}
      </div>
    );
  }
}

const Home = () => {
  return <h1>이곳은 브라우저 히스토리 활용페이지 입니다 </h1>;
};
const Page1 = () => {
  return <h1>여기는 page1 입니다. </h1>;
};
const Page2 = () => {
  return <h1>여기는 page2 입니다. </h1>;
};

export default Byhistory;
