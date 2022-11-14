import React, { useState, useEffect } from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { Navbar, Sidebar, TaskForm, TaskList, Tasks } from '../components';
import axios from 'axios';
import { format } from 'date-fns'


const TasksPage = () => {

  // [{id: 0, task: 'finish this project', description: 'complete all of our stories', complete: 0, date: '12-02-1999', priority: 1}, {id: 1, task: 'get an A', description:'self explanitory', complete: 0, date: '12-02-1999', priority: 1}]

  //need a use effect to render inital data
  const [taskList, setTaskList] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [incompleteTasks, setIncompleteTasks] = useState([])
  const [isTaskSelected, setIsTaskSelected] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  const [sortBy, setSortBy] = useState('Deadline')

  const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
  var userTasks

  useEffect(() => {
    if(sessionStorage.length >= 1){
    axios
    .post('http://localhost:9000/tasks/get-tasks', userInfo)
    .then(response => {
        console.log('axiosing on me')
        console.log(response.data)
        sessionStorage.setItem("user_tasks", JSON.stringify(response.data))
        userTasks = JSON.parse(sessionStorage.getItem('user_tasks'))

        setTaskList(userTasks)
      
        setCompletedTasks(userTasks.filter((t) => t['completed'] == 1))
        setIncompleteTasks(userTasks.filter((t) => t['completed'] == 0))
    }).catch(error => console.log(error.message))

    
    }

  }, [])



  const checkView = (task={}) => {
    if(isTaskSelected){
      return(<TaskSelectedView/>)
    }else{
      return(<TaskListView/>)
    }

  }

  const TaskSelectedView = (t) =>{
    var date = new Date(currentTask.deadline)
    console.log(date)
    var formattedDate = format(date, 'MM/dd/yyyy')

    return(
      <div>
        <div className={taskHeader}>
              <h1>{currentTask.task}</h1>
        </div>
        <div>
          <p className='mt-7 text-xl text-violet-500 font-bold'>description</p>
          <p>{currentTask.description}</p>
        </div>
        <div>
          <p className='mt-7 text-xl text-violet-500 font-bold'>Deadline</p>
          <p>{formattedDate}</p>
        </div>
        <div>
          <p className='mt-7 text-xl text-violet-500 font-bold'>Priority</p>
          <p>{currentTask.priority}</p>
        </div>
      <div className='flex flex-row gap-6 w-full text-center pt-10'>
        <button className='block mb-2 border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-300 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0' onClick={() => {setIsTaskSelected(false)}}>Cancle</button>
        <button className='block mb-2 border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-300 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0' onClick={() => {completeTask(); setIsTaskSelected(false)}}>Complete Task</button>
      </div> 
      </div>
    )
  }


  const TaskListView = (t) =>{
    return(

      <div>
        <div className={taskHeader}>
                <h1>Current Tasks</h1>
                <button onClick={() => toggleSort()}>sort by: {sortBy}</button>
        </div>
      <div>
        {incompleteTasks.map((task) => (
          <button className=' block w-full mt-2 border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-300 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0 ' onClick={() => {setCurrentTask(task); setIsTaskSelected(true)}}><p>{task['task']}</p></button>
        ))} 
      </div> 
      </div>

    )
  }


  const taskHeader = 'text-3xl text-violet-700 font-bold';


  const completeTask = () => {
      setIncompleteTasks(incompleteTasks.filter((dt) => dt['taskId'] !== currentTask.taskId))
      setCompletedTasks([...completedTasks, currentTask])
    }
  const undoComplete = () => {
    setIncompleteTasks([...incompleteTasks, currentTask])
    setCompletedTasks(completedTasks.filter((dt) => dt['taskId'] !== currentTask.taskId))

  }

  const toggleSort = () => {
    var tasks = incompleteTasks
    console.log(tasks)
    console.log('toggleing sort')
    if(sortBy === "Deadline"){
      setSortBy('Priority')
      prioritySort(tasks)

    }else{
      setSortBy('Deadline')
      deadlineSort(tasks)

    }
  }

  const prioritySort = (tasks) => {
    console.log('priority sorting')
    var high = tasks.filter((t) => t.priority === 'High')
    var medium = tasks.filter((t) => t.priority === 'Medium')
    var low = tasks.filter((t) => t.priority === 'Low')

    var sortedList = high.concat(medium, low)

    console.log(sortedList)
    setIncompleteTasks(sortedList)
  }

  const deadlineSort = (tasks) => {
    console.log('deadline sorting')
    var tasks = incompleteTasks
    tasks.sort((a, b) => {
      return new Date(a.deadline) - new Date(b.deadline)
    })
    setIncompleteTasks(tasks)

  }

  

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-2/12 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      
      </div>

      <div className='w-10/12 float-right h-full py-14 pl-10'>

        <div id='leftContainer' className='flex flex-col gap-16 w-2/5 float-left h-full' >
          <TaskForm/>
        </div>

        <div id='rightContainer' className=' w-1/2 h-full float-right rounded-lg mr-10 flex flex-col gap-10 '>

          <div id='currentTasksContainer' className='w-full flex flex-col gap-5 border-3 border-violet-400 rounded-lg py-8 px-8 shadow-xl bg-white'>
              {checkView()}
              <div>
                {/* <TaskList taskList={taskList} handleToggle={handleToggle} handleFilter={handleFilter} /> */}
              </div>
          </div>

          <div id='completedTasksContainer' className='w-full flex flex-col gap-5 border-3 border-violet-400 rounded-lg py-8 px-8 shadow-xl bg-white'>
            <div className={taskHeader}>
              <h1>Completed Tasks</h1>
            </div>
            
            <div id='completedTasksListContainer' className='flex flex-col gap-5 line-through text-violet-300 hover'>
              
              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0'>
                <h1>Create resume</h1>
              </div>

              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md'>
                <h1>Create linkedin profile</h1>
              </div>
              
              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md'>
                <h1>Register for web seminar</h1>
              </div>
            </div>

            
            <div>
                <button type='button' className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-2'>Clear Completed Tasks</button>
              </div>
            
          </div>
        
          
        </div>
      </div>     
    </div>
  )
}

export default TasksPage