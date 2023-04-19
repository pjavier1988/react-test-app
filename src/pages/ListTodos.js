import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const ListTodos = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  const [editTodoIndex, setEditTodoIndex] = useState(-1);
  const [editTodo, setEditTodo] = useState(null);

  const handleEdit = (index) => {
    setEditTodoIndex(index);
    setEditTodo(todos[index]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    onUpdateTodo(editTodoIndex, updatedTodo);
    setEditTodoIndex(-1);
    setEditTodo(null);
  };

  return (
    <div>
      <h2>Your tasks</h2>
      {editTodoIndex !== -1 ? (
        <TodoForm initialValues={editTodo} onAddTodo={handleUpdateTodo} />
      ) : (
        <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onEditTodo={handleEdit} />
      )}
    </div>
  );
};

export default ListTodos;
