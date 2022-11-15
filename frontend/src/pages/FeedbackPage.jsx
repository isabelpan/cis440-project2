import React, { useState } from 'react';
import { Navbar, Sidebar, FeedbackRequest, FeedbackInbox, FeedbackTools } from '../components';
import FeedbackTasks from '../components/FeedbackTasks';
// import { usePopper } from 'react-popper';

const FeedbackPage = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    
        return (
            <div>
                <div>
                    <div>
                        <Navbar />
                    </div>
    
                    <div className='w-2/12 fixed sidebar bg-white'>
                        <Sidebar />
                    </div>
    
    
                    <div className='w-10/12 float-right h-full py-3 pl-10'>
                        <div id='leftContainer' className='w-3/5 h-full float-left flex flex-col gap-16'>
                            <FeedbackInbox />
    
                        </div>
    
                        <div id='rightContainer' className='w-1/3 h-full float-right rounded-lg mr-10 flex flex-col gap-10'>
                            <FeedbackTasks />
    
                        </div>
                    </div>
                    <div className='w-10/12 float-right h-full py-3 pl-10 '>
                        <div className='w-1/3 h-full float-right rounded-lg mr-10 flex flex-col gap-10'>

                        <FeedbackTools/>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
    

export default FeedbackPage;