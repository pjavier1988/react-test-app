import React from 'react';
import TodoForm from '../components/TodoForm';

const AddTodo = ({ onAddTodo }) => {
  return (
    <div>
      <h2>Add a new task</h2>
      <TodoForm onAddTodo={onAddTodo} />
    </div>
  );
};

export default AddTodo;