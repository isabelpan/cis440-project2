import React, { useState } from 'react';

const TaskList = ({ taskList, handleToggle, handleFilter }) => {

  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    let updatedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTasks);

  } 

  return (
    <div>
        {taskList.map(task => {
            return (
                <div>Tasks</div>
            )
        })}
        <button type='button' onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  )
}

export default TaskList