import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDeleteTodo(index)} onEdit={() => onEditTodo(index)}/>
      ))}
    </List>
  );
};

export default TodoList;
