import React, { useState } from 'react';
import { FeedbackForm } from '../components';
import useCollapse from 'react-collapsed';
import { MdDisabledVisible } from 'react-icons/md';
import { SiRefresh } from 'react-icons/si';

const CollapsibleFeedback1 = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <div>
                <div id="feedback1" className="">
                    <h2 className="text-bold text-xl">Tony Stark</h2>
                    <p className="text-bold text-md">Subj: Web Security Training Evaluation</p>
                    <div className="collapsible">
                        <div className="text-right font-bold text-sm" {...getToggleProps()}>
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </div>
                        <div {...getCollapseProps()}>
                            <div className="content">
                                <br />
                                Hello, great job getting this done! Please see attached for my comments.
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            {/* <div className="collapsible">
                <div className="header float-right font-bold text-md" {...getToggleProps()}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        Now you can see the hidden content. <br /><br />
                        Click again to hide...
                    </div>
                </div>
            </div > */}
        </div >
    );

};

const CollapsibleFeedback2 = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <div id="feedback2" className="">
                <h2 className="text-bold text-xl">Captain America</h2>
                <p className="text-bold text-md">Subj: ACTION NEEDED!</p>
                <div className="collapsible">
                    <div className="text-right font-bold text-sm" {...getToggleProps()}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </div>
                    <div {...getCollapseProps()}>
                        <div className="content">
                            <br />
                            Hello! We need you to fill out these highlighted parts ASAP. Thanks!
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

const CollapsibleFeedback3 = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <div id="feedback2" className="">
                <h2 className="text-bold text-xl">Dr. Strange</h2>
                <p className="text-bold text-md">Subj: Awareness Training Feedback</p>
                <div className="collapsible">
                    <div className="text-right font-bold text-sm" {...getToggleProps()}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </div>
                    <div {...getCollapseProps()}>
                        <div className="content">
                            <br />
                            Good job, i guess.
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

const FeedbackInbox = () => {
    return (
        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-5 bg-white\'>
            <h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>
            <div id="allFeedbackContainer">
                <div className="border-2 border-violet-100 rounded-md py-1 px-2 bg-grey-100 shadow-md">
                    <input type="checkbox"></input>
                    <CollapsibleFeedback1 />
                </div>
                <br></br>
                <div className="border-2 border-violet-100 rounded-md py-1 px-2 bg-grey-100 shadow-md">
                    <input type="checkbox"></input>
                    <CollapsibleFeedback2 />
                </div>
                <br />
                <div className="border-2 border-violet-100 rounded-md py-1 px-2 bg-grey-100 shadow-md">
                    <input type="checkbox"></input><CollapsibleFeedback3 />
                </div>
            </div>
        </div>
    )
};



export default FeedbackInbox;