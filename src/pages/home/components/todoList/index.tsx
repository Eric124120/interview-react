import React, { useState, useEffect } from 'react';
import { Checkbox, Button, Radio } from 'antd';
import type { GetProp, CheckboxProps } from 'antd';
import { ITodoInterface } from '../../todoList';
import './index.css';

interface IProps {
  todoList: ITodoInterface[];
  onTodoListChange: (list: ITodoInterface[]) => void;
}

function TodoList(props: IProps) {
  const [showActive, setShowActive] = useState(false);
  const [activeCount, setActiveCount] = useState(0);
  const [visibleTodoList, setVisibleTodoList] = useState<ITodoInterface[]>([]);


  const onCheckboxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
    const list = [...props.todoList];
    list.forEach(item => {
      if (checkedValues.includes(item.id)) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    })
    props.onTodoListChange(list);
  };

  const onClearCompleted = () => {
    const list = [...props.todoList];
    list.forEach(item => {
      item.completed = false;
    })
    props.onTodoListChange(list);
  }

  const onActiveChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setShowActive(e.target.checked);
  };

  const onRemove = (id: string) => {
    console.log('-->', id);
    const list = [...props.todoList].filter(i => i.id !== id);
    props.onTodoListChange(list);
  }

  useEffect(() => {
    setVisibleTodoList(showActive ? props.todoList.filter(i => !i.completed) : props.todoList);
  }, [showActive, props.todoList])

  useEffect(() => {
    setActiveCount(props.todoList.filter(i => !i.completed).length)
  }, [props.todoList])
  return (
    <div>
      {visibleTodoList.length ? (
        <Checkbox.Group
          value={visibleTodoList.filter(i => i.completed).map(i => i.id)}
          onChange={onCheckboxChange}
        >
          <ul className="todo-list-ul">
            {visibleTodoList.map((todo) => (
              <li key={todo.id}>
                <Checkbox value={todo.id}>
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </Checkbox>
                <Button type="link" onClick={onRemove.bind(null, todo.id)}>remove</Button>
              </li>
            ))}
          </ul>
        </Checkbox.Group>
      ) : (
        <div className='empty-container'>
          暂无数据
        </div>
      )}
      
      <div className='todo-list-footer'>
        <span>{activeCount} items left</span>
        <Checkbox onChange={onActiveChange}>All Active Completed</Checkbox>
        <Button type="link" onClick={onClearCompleted}>Clear Completed</Button>
      </div>
    </div>
  );
}

export default TodoList;
