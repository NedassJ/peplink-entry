import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [position, setPosition] = useState('back');

  const addTodo = () => {
    const updatedTodos = [...todos];
    if (position === 'front') {
      updatedTodos.unshift(newTodo);
    } else {
      updatedTodos.push(newTodo); 
    }
    setTodos(updatedTodos);
    setNewTodo({ title: '', description: '', priority: '' });
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  const saveTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = newTodo;
    setTodos(updatedTodos);
    setNewTodo({ title: '', description: '', priority: '' });
    setEditIndex(null);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const moveTodo = (index, direction) => {
    const updatedTodos = [...todos];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (swapIndex >= 0 && swapIndex < updatedTodos.length) {
      [updatedTodos[index], updatedTodos[swapIndex]] = [updatedTodos[swapIndex], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Priority"
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
        />
        <select onChange={(e) => setPosition(e.target.value)} value={position}>
          <option value="back">Add to Back</option>
          <option value="front">Add to Front</option>
        </select>
        {editIndex !== null ? (
          <button onClick={saveTodo}>Save</button>
        ) : (
          <button onClick={addTodo}>Add</button>
        )}
      </div>

      <ul className="todo-list-items">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div>
              <strong>{todo.title}</strong>
              <p>{todo.description}</p>
              <span>Priority: {todo.priority}</span>
            </div>
            <div className="actions">
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => moveTodo(index, 'up')}>↑</button>
              <button onClick={() => moveTodo(index, 'down')}>↓</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button className="back-button">Back to Main Page</button>
      </Link>
    </div>
  );
};

export default TodoList;
