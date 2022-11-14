import React from 'react';
import { SiZoom, SiSlack, SiGmail } from 'react-icons/si';

const FeedbackTools = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-md text-violet-500'>Other Tools</h1>
            <hr />
            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white "><SiZoom size={30} />Zoom</button>
            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiSlack size={20} />Slack </button>
            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiGmail size={20} />Gmail</button>
        </div>
    )
}

export default FeedbackTools;