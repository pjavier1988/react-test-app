import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ initialValues, onAddTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (initialValues) {
      setTaskName(initialValues.name);
      setTaskDescription(initialValues.description);
    }
  }, [initialValues]);

  const handleAddTodo = () => {
    if (taskName.trim()) {
      onAddTodo({
        name: taskName,
        description: taskDescription,
      });
      if (!initialValues) {
        setTaskName('');
        setTaskDescription('');
      }
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
    >
      <TextField
        fullWidth
        label="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button fullWidth variant="contained" color="primary" type="submit">
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
