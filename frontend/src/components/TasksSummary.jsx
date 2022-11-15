import React, { useState, useEffect} from 'react'
import { Calendar, Navbar, Sidebar } from '../components';
import { FaShareSquare } from 'react-icons/fa';
import DashboardKeyModal from '../components/DashboardKeyModal';
import axios from 'axios';


const TasksSummary = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    var userTasks

    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [highPriorityTasks, setHighPriorityTasks] = useState([]);
    var incompleteTasks

    var date = new Date();
    const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = date.toLocaleDateString("en-US", dateOptions)

    useEffect(() => {
        if(sessionStorage.length >= 1){
        axios
        .post('http://localhost:9000/tasks/get-tasks', userInfo)
        .then(response => {
            console.log('axiosing on me')
            sessionStorage.setItem("user_tasks", JSON.stringify(response.data))
            userTasks = JSON.parse(sessionStorage.getItem('user_tasks'))
            incompleteTasks = userTasks.filter((t) => t['completed'] == 0)

            setHighPriorityTasks(incompleteTasks.filter((t) => t['priority'] === 'High'))
            setUpcomingTasks(upcomingTasksFilter(incompleteTasks))
            
        }).catch(error => console.log(error.message))
    }}, [])



    const upcomingTasksFilter = (tasks) =>{
        console.log('filtering this weeks tasks')
        var thisWeeksTasks = []
    
        for(var i = 0; i < tasks.length; i++){
          console.log(new Date(tasks[i].deadline) - new Date(today))
          if(new Date(tasks[i].deadline) - new Date(today) <= 604800000 && new Date(tasks[i].deadline) - new Date(today) > 0){
          console.log(`${tasks[i].task} is coming up this week`)
          thisWeeksTasks.push(tasks[i])
        }
        }
        console.log('this weeks tasks...')
        console.log(thisWeeksTasks)
        return thisWeeksTasks
      }

    return(
        <div className='p-2 flex flex-col gap-2'>
            <div >
                <p className='font-bold text-3xl text-violet-600 text-center'>Tasks summary</p>
            </div>
            <div className='flex flex-row gap-6 w-full text-center justify-between text-violet-400 text-xl px-10'>
                <div className='pr-1'>
                    <p>This Week's Tasks</p>
                    {upcomingTasks.map((t) => (<p className='text-left ml-2'>●{t.task}</p>))}
                </div>
                <div className='pl-1'>
                <p>High Priority Tasks</p>
                    {highPriorityTasks.map((t) => (<p className='text-left ml-2'>●{t.task}</p>))}
                </div>
            </div>
        </div>
    )

}

export default TasksSummary