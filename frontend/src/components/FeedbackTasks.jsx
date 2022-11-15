import React, {useState, useEffect} from 'react';
import { SiZoom, SiSlack, SiGmail } from 'react-icons/si';
import axios from 'axios';
import { BsChevronCompactLeft } from 'react-icons/bs';
import FeedbackForm from './FeedbackForm';


const FeedbackTasks = () => {

    const [completedTasks, setCompletedTasks] = useState([])
    const [buttonPopup, setButtonPopup] = useState(false);
    const [currentTask, setCurrentTask] = useState('')
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
    
          
            setCompletedTasks(userTasks.filter((t) => t['completed'] == 1))
        }).catch(error => console.log(error.message))
    
        
        }
    
      }, [])

 


// EDIT FEEDBACK DB, SEND TASKNAME AND DASHBOARD KEY




const checkMentor = () => {
    if(userInfo.isMentor === '0'){
        return(<p>Here are the tasks that your mentore can give you feedback on</p>)
    }else{
        return(<p>Your Mentee has completed tasks! click one to give them feedback</p>)
    }
}





    return (
        < div id='tasksContainer' className='w-full flex-left border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-5 bg-white' >
            <div>
                {checkMentor()}
            </div>
            <div>
                {completedTasks.map((t) => (<button onClick={() => { setButtonPopup(true); setCurrentTask(t.task)}} className=' block w-full mt-2 border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-300 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0 '>Mentee Task: {t.task}</button>))}
                <FeedbackForm trigger={buttonPopup} setTrigger={setButtonPopup} task={currentTask}/>
            </div>
        </div >
    
    )
}

export default FeedbackTasks;