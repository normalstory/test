import React, { useState } from 'react';

const EventByFunc = () => {
  //const [username, message] = this.state;
  //const [username, message] = useState('');

  //   const [username, setUsername] = useState('');
  //   const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    //배열
    username: '',
    message: '',
  });
  // const [username, message] = form;
  const { username, message } = form; //객체

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const onChange = (e) => {
    //setForm(e.target.form)
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ' & ' + message);
    // setUsername('');
    // setMessage('');
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => e.key === 'Enter' && onClick();

  return (
    <div>
      <h5>이벤트 실습 by function (feat Hooks) ***</h5>
      <input
        type="text"
        name="username"
        placeholder="your name.."
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="to message.."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>Send</button>
    </div>
  );
};

export default EventByFunc;
