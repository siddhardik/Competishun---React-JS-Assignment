import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Task from './Task';

function TaskList() {
  const { user, tasks } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
