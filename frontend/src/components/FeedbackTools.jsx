import React from 'react';
import { SiZoom, SiSlack, SiGmail } from 'react-icons/si';

const FeedbackTools = () => {
    return (
        < div id='toolsContainer' className='w-full flex-left border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-5 bg-white items-center' >
            <h1 className='font-bold text-center text-violet-500 text-2xl'>Other Tools</h1>
            <hr />
            <a href="https://zoom.us" target="_blank">
                <button className="p-1.5 w-80 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiZoom size={30} />Zoom</button>
            </a>
            <a href="http://slack.com" target="_blank">
                <button className="p-2 w-80 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiSlack size={20} />Slack </button>
            </a>
            <a href="http://gmail.com" target="_blank">
                <button className="p-2 w-80 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiGmail size={20} />Gmail</button>
            </a>
        </div >
    )
}

export default FeedbackTools;