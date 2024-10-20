import React from 'react';
import TodoList from '../components/Todolist';
import '../App.css';


const ListPage = () => {
  return (
    <div className="App">
      <h1>List Page</h1>
      <TodoList />
    </div>
  );
};

export default ListPage;
