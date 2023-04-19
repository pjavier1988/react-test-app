import React, { useState } from 'react';
import { Container, Typography, Grid, Tabs, Tab } from '@mui/material';
import AddTodo from './pages/AddTodo';
import ListTodos from './pages/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleUpdateTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(newTodos);
  };

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Todo List App
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Add Task" />
        <Tab label="List Tasks" />
      </Tabs>
      {activeTab === 0 && <AddTodo onAddTodo={handleAddTodo} />}
      {activeTab === 1 && (
        <ListTodos
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      )}
    </Container>
  );
}

export default App;
