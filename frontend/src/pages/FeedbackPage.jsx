import React, { useState } from 'react';
import { Navbar, Sidebar, FeedbackRequest, FeedbackInbox, FeedbackTools } from '../components';
// import { usePopper } from 'react-popper';

const FeedbackPage = () => {


    return (
        <div>
            <div>
                <div>
                    <Navbar />
                </div>

                <div className='w-2/12 fixed sidebar bg-white'>
                    <Sidebar />
                </div>

                <div>
                    <FeedbackRequest />
                </div>

                <div className='w-10/12 float-right h-full py-14 pl-10'>
                    <div id='leftContainer' className='w-3/5 h-full float-left flex flex-col gap-16'>
                        <FeedbackInbox />

                    </div>

                    <div id='rightContainer' className='w-1/3 h-full float-right rounded-lg mr-10 flex flex-col gap-10'>
                        <FeedbackTools />

                    </div>
                </div>
            </div >
        </div >
    )
}

export default FeedbackPage;