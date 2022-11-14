import React, { useState } from 'react';
import { FeedbackForm } from '../components';
import useCollapse from 'react-collapsed';
import { MdDisabledVisible } from 'react-icons/md';
import { SiRefresh } from 'react-icons/si';

const Collapsible = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <form input type='radio'>
                <table className='table-auto'>
                    <thead>
                        <th input type='checkbox' className="hover:'"></th>
                    </thead>
                    <tr>
                        <td input type="checkbox"></td>
                        <td>
                            <div id="feedback1" className="border-4">
                                <h2>Tony Stark</h2>
                                <p>Subj: Web Security Training Evaluation</p>
                                <div className="collapsible">
                                    <div className="header float-right font-bold text-md" {...getToggleProps()}>
                                        {isExpanded ? 'Collapse' : 'Expand'}
                                    </div>
                                    <div {...getCollapseProps()}>
                                        <div className="content">
                                            Now you can see the hidden content. <br /><br />
                                            Click again to hide...
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </td>
                    </tr>

                </table>


            </form>
            <div className="collapsible">
                <div className="header float-right font-bold text-md" {...getToggleProps()}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        Now you can see the hidden content. <br /><br />
                        Click again to hide...
                    </div>
                </div>
            </div >
        </div >
    );

};

const FeedbackInbox = () => {
    return (
        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg px-8 py-8 shadow-xl flex flex-col gap-5 bg-white\'>
            <h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>
            <div id="allFeedbackContainer">
                <div>
                    <input type="checkbox">Subj: Web Security Training</input>
                    <Collapsible />
                </div>
            </div>
        </div>
    )
}



export default FeedbackInbox;