import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <ListItem>
      <ListItemText primary={todo.name} secondary={todo.description} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
