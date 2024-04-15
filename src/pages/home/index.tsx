import React from 'react';
import TodoListGroup from './components/todoListGroup';
import './index.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <TodoListGroup />
      </div>
    </div>
  );
}

export default Home;
