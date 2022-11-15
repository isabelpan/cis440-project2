import React, { useState, useEffect } from 'react';
import { FeedbackForm } from '../components';
import useCollapse from 'react-collapsed';
import { MdDisabledVisible } from 'react-icons/md';
import { SiRefresh } from 'react-icons/si';
import axios from 'axios';

const FeedbackTab = ({feedback}) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    console.log('feedback')
    console.log(feedback)
    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))




    if(isExpanded && userInfo.isMentor === '0'){
        console.log('expanded')
        axios
        .post('http://localhost:9000/feedback/mark-seen', feedback)
        .then(response => {
            console.log('marking as read')
            console.log(response)
            
        }).catch(error => console.log(error.message))
    
        







    }




    return (
        
                <div className="border-2 border-gray-200 rounded-md py-1 px-2 bg-grey-100 shadow-md my-2 text-gray-700">
                    <div id="feedback1" className=" flex flex-col px-2 py-2">
                        <h2 className="text-bold text-xl font-bold ">Feedback on: {feedback.feedbackTask}</h2>
                        <p className="text-bold text-md">Subj: {feedback.subjectLine}</p>
                        <div className="collapsible">
                            <div className="text-right font-bold text-sm text-gray-500" {...getToggleProps()}>
                                {isExpanded ? 'Collapse' : 'Expand'}
                            </div>
                            <div {...getCollapseProps()}>
                                <div className="content">
                                    <br />
                                    {feedback.feedback}
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            

       
    );

};

const FeedbackInbox = () => {

    // const demoFeedback = [{task:'call mom', feedback: 'great job calling your mom. couldnt have done better myself', seen: 0, subject: 'subject line' }, {task:'call mom', feedback: 'great job calling your mom. couldnt have done better myself', seen: 0, subject: 'subject line' }]



    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    const [unreadFeedback, setUnreadFeedback] = useState([])
    const [feedbackList, setFeedbackList] = useState([])
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

            setFeedbackList(userFeedback)

            setUnreadFeedback(userFeedback.filter((f) => f['seen'] == '0'))
        }).catch(error => console.log(error.message))
    
        
        }
    
      }, [])

      const checkMentor = () => {
        if(userInfo.isMentor === '0'){
            return(<h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>)
        }else{
            return(<h1 className='font-bold text-left text-3xl text-violet-600'>Sent</h1>)
        }
    }

      
    return (
        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-2 bg-white'>
            {checkMentor()}
            <div id="allFeedbackContainer" className='flex flex-col gap-2'>
                {unreadFeedback.map((f) => (<FeedbackTab feedback={f}/>))}


            </div>
        </div>
    )
};



export default FeedbackInbox;