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

                <div className='w-10/12 float-right'>
                    <div id='leftContainer' className='pt-2 w-3/5 h-full float-left rounded-lg ml-2 flex flex-col gap-2'>
                        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg p-8 py-8 shadow-xl flex flex-col gap-5 bg-white'>
                            <FeedbackInbox />
                        </div>
                    </div>

                    <div id='rightContainer' className='pt-2 h-full float-right rounded-lg mr-2 flex flex-col gap-2 '>
                        <div id='toolsContainer' className='place-content-center border-3 border-violet-400 rounded-lg p-8 py-8 shadow-xl flex flex-col gap-5 bg-white'>
                            <FeedbackTools />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default FeedbackPage;