/*
 * @Author: 黄承文 chengwen@ssc-hn.com
 * @Date: 2024-04-15 18:18:23
 * @LastEditors: 黄承文 chengwen@ssc-hn.com
 * @LastEditTime: 2024-04-15 20:22:51
 * @FilePath: /interview-react/src/pages/home/components/todoListGroup/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import CreateInput from '../createInput';
import TodoList from '../todoList';
import { initialTodoList, createTodo, ITodoInterface } from '../../todoList';
import './index.css';



function TodoListGroup() {

  const [todoList, setTodoList] = useState<ITodoInterface[]>(initialTodoList);

  const handleAddTodo = (data: ITodoInterface) => {
    setTodoList([...todoList, data]);
  }
  const onTodoListChange = (list: ITodoInterface[]) => {
    setTodoList([...list]);
  }
  return (
    <div className="todo-list-group">
      <CreateInput onAdd={handleAddTodo}/>
      <TodoList todoList={todoList} onTodoListChange={onTodoListChange} />
    </div>
  );
}

export default TodoListGroup;
