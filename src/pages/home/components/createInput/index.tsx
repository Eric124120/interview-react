import React, { useState } from 'react';
import { Input } from 'antd';
import { ITodoInterface, createTodo } from '../../todoList';


interface IProps {
  onAdd: (data: ITodoInterface) => void;
}

function CreateInput(props: IProps) {

  const [inputVal, serInputVal] = useState("");

  const onPressEnter = () => {
    props.onAdd(createTodo(inputVal));
    serInputVal('');

  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e.target.value === 'string') {
      serInputVal(e.target.value)
    }
  }
  return (
    <Input
      size="large"
      placeholder="create todo list(Enter Create)"
      value={inputVal}
      onPressEnter={onPressEnter}
      onChange={onInputChange}
    />
  );
}

export default CreateInput;
