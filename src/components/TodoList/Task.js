import React, { useState } from 'react';

function Task({ task }) {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleSave = () => {
    // Implement the logic to save the edited task.
    setEditing(false);
  }

  const handleDelete = () => {
    // Implement the logic to delete the task.
  }

  return (
    <div>
      {editing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
