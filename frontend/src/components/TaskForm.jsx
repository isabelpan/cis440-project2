import axios from 'axios';
import React, { useState } from 'react';
import Tasks from './Tasks';

const TaskForm = ( ) => {
    const inputField = 'border-2 rounded-md px-3 py-2 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-gray-700 max-h-24 bg-gray-100 focus:bg-white ease-out duration-300 shadow-md';
    const inputContainer = 'flex flex-col gap-1';
    const taskHeader = 'text-3xl text-violet-700 font-bold';
    
    // const [userInput, setUserInput] = useState('');

    // const [taskTitle, setTaskTitle] = useState('');
    // const [taskDescription, setTaskDescription] = useState('');
    // const [priority, setPriority] = useState('');
    // const [deadlineDate, setDeadlineDate] = useState('');

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [taskEditing, setTaskEditing] = useState(null);
    const [editingText, setEditingText] = useState("");



    // const taskValues = {
    //     taskTitle: "",
    //     taskDescription: "",
    //     deadlineDate: "",
    //     priority: "",
    //     isComplete: false,
    //   };

    // const handleChange = (e) => {
    //     setUserInput(e.currentTarget.value);
    // }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // addTask(userInput);
        // setUserInput('');

        const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
        console.log(userInfo)

        const newTask = {
          taskTitle: e.target.taskTitle.value,
          taskDescription: e.target.taskDescription.value,
          deadlineDate: e.target.deadlineDate.value,
          priority: e.target.taskPriority.value,
          isComplete: 0,
          dashboardKey: userInfo.dashboardKey
        };

        console.log(newTask)
        axios
            .post('http://localhost:9000/tasks/add-task', newTask)
            .then(response => {
                console.log(response.data)
            }).catch(error => console.log(error.message))


        
    }


    const toggleComplete = (id) => {
      let updatedTasks = [...tasks].map((task) => {
        if(task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      setTasks(updatedTasks);
    }

    const editTask = (id) => {
      const updatedTasks = [...tasks].map((task) => {
        if(task.id === id){
          
        }
        return task;
      });
      setTasks(updatedTasks);
      
    }

    
    // const [newTask, setNewTask] = useState(taskValues);

  return (
    <div>
        <div id='newTasksFormContainer' className='border-3 border-violet-400 rounded-lg py-8 px-8 shadow-xl flex flex-col gap-5 bg-white\'>
            <div className={taskHeader}>
              <h1>Create A New Task</h1>
            </div>

            <form className='flex flex-col w-full gap-11 mt-2 text-gray-500' onSubmit={handleSubmit}>

              <div className={inputContainer}>
                <label htmlFor='taskTitle' className='text-lg'>Task Title</label>
                <input type='text'
                        name='taskTitle' 
                        id='taskTitle'
                        className={inputField} 
                        
                  />
              </div>
              
              <div className={inputContainer}>
                <label htmlFor='taskDescription'className='text-lg'>Task Description</label>
                <textarea type='text' 
                name='taskDescription' 
                id='taskDescription' 
                className={inputField} 
                
                />
              </div>

              <div className={inputContainer}>
                <label htmlFor='deadlineDate' className='text-lg'>Select A Deadline</label>
                <input type='date' 
                name='deadlineDate' 
                id='deadlineDate' 
                className='border-2 rounded-md py-2 px-3 active:text-violet-500 uppercase focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none bg-gray-100 ease-out duration-300 focus:bg-white shadow-md' 
                 
                />
              </div>

              <div className={inputContainer}>
                <label htmlFor='taskPriority' className='text-lg'>Select The Priority</label>
                <select name='taskPriority'
                id='taskPriority' 
                className='border-2 rounded-md py-2 px-3 active:text-violet-500 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none bg-gray-100 ease-out duration-300 focus:bg-white shadow-md' 
                 >
                  <option value="Low" >Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className='mt-3'>
                <button type='submit' className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-5'>Create Task</button>
              </div>

            </form>
          </div>


    </div>
  )
}

export default TaskForm