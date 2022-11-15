import React, { useState } from 'react';
import { FeedbackForm } from '../components';
import useCollapse from 'react-collapsed';
import { MdDisabledVisible } from 'react-icons/md';
import { SiRefresh } from 'react-icons/si';

const FeedbackTab = ({feedback}) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    console.log('feedback')
    console.log(feedback)
    return (
        
                <div className="border-2 border-violet-100 rounded-md py-1 px-2 bg-grey-100 shadow-md my-2">
                    <div id="feedback1" className="">
                        <h2 className="text-bold text-xl">Feedback on {feedback.task}</h2>
                        <p className="text-bold text-md">Subj: {feedback.subject}</p>
                        <div className="collapsible">
                            <div className="text-right font-bold text-sm" {...getToggleProps()}>
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

    const demoFeedback = [{task:'call mom', feedback: 'great job calling your mom. couldnt have done better myself', seen: 0, subject: 'subject line' }, {task:'call mom', feedback: 'great job calling your mom. couldnt have done better myself', seen: 0, subject: 'subject line' }]

    return (
        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-5 bg-white\'>
            <h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>
            <div id="allFeedbackContainer">
                {demoFeedback.map((f) => (<FeedbackTab feedback={f}/>))}


            </div>
        </div>
    )
};



export default FeedbackInbox;