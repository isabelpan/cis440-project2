import React from 'react';

const TaskList = ({ taskList, handleToggle, handleFilter }) => {

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