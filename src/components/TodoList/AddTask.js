import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function AddTask() {
  const { addTask } = useContext(AuthContext);
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      // Implement the logic to add a new task.
      addTask(taskName);
      setTaskName('');
    }
  }

  return (
    <div>
      <h3>Add a New Task</h3>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
