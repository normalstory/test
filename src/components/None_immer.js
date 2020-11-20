import React, { useRef, useCallback, useState } from 'react';

const None_immer = () => {
  //state set
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input set
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form],
  );

  //form set
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData({
        ...data,
        array: data.array.concat(info),
      });

      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  //remove set
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="name is .." value={form.name} onChange={onChange}></input>
        <input
          name="username"
          placeholder="username is .."
          value={form.username}
          onChange={onChange}
        ></input>
        <button type="Submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default None_immer;
