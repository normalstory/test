//불변성 예제 - immer 예
import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer'; //immer

const By_immer = () => {
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
      setForm(
        produce(form, (draft) => {
          //immer
          draft[name] = value;
        }),
      );
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

      //array에 새로운 항목 추가
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        }),
      );

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
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            //immer는 push나 splice를 사용할 수 있다.
            //필수는 아니다. 특히 이 remove의 경우엔 filter의 코드가 더 간결하다.
            draft.array.findIndex((info) => info.id === id),
            1,
          );
        }),
      );
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

export default By_immer;
