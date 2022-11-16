import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Progress, ButtonGroup, Button } from 'rsuite';



const FeedbackSummary = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    const [unreadFeedback, setUnreadFeedback] = useState([])
    var userFeedback
    

    useEffect(() => {
        if(sessionStorage.length >= 1){
        axios
        .post('http://localhost:9000/feedback/get-feedback', userInfo)
        .then(response => {
            console.log('fetching feedback')
            console.log(response.data)
            sessionStorage.setItem("user_feedback", JSON.stringify(response.data))
            userFeedback = JSON.parse(sessionStorage.getItem('user_feedback'))

            setUnreadFeedback(userFeedback.filter((f) => f['seen'] == '0'))
        }).catch(error => console.log(error.message))
    
        
        }
    
      }, [])



    return(
        <div>
            <p>You have <span className='font-bold text-violet-700'>{unreadFeedback.length}</span> unread feedback</p>
        </div>
    )

}

export default FeedbackSummary