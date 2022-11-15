import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Progress, ButtonGroup, Button } from 'rsuite';



const GoalsSummary = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    
    const [percent, setPercent] = useState(0);
    const [goalList, setGoalList] = useState([])
    const [completedGoals, setCompletedGoals] = useState([])
    const [incompleteGoals, setIncompleteGoals] = useState([])
    
    const status = percent === 100 ? "success" : null;
    const color = percent === 100 ? "#03D613" : "#771be7";

    useEffect(() => {
        if(sessionStorage.length >= 1){
          axios.post('http://localhost:9000/goals/get-goals', userInfo).then(response => {
            console.log(response.data);
            sessionStorage.setItem("user_goals", JSON.stringify(response.data));
    
            const userGoals = JSON.parse(sessionStorage.getItem("user_goals"));

            console.log('userGoals')
            console.log(userGoals)
            setGoalList(userGoals)
    
            setCompletedGoals(userGoals.filter((g) => g['completed'] === '1'));
            setIncompleteGoals(userGoals.filter((g) => g['completed'] === '0'));
          }).catch((error) => console.log(error.message));
        }
      }, []);

      const calculatePrecent = () => {

        console.log(completedGoals)
        console.log(incompleteGoals)


        const total = completedGoals.length + incompleteGoals.length
        console.log('total')
        console.log(total)

        return Math.floor((completedGoals.length / total * 100))

      }


    return(
        <div>
            <Progress.Circle percent={calculatePrecent()} strokeColor={color} status={status} strokeWidth={10} trailColor={'#b5b5b549'} trailWidth={10} showInfo={true} className='w-1/3 flex flex-col gap-2 text-violet-800'/>
        </div>
    )

}

export default GoalsSummary