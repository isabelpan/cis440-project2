import React, { useState } from 'react';
import { Navbar, Sidebar, FeedbackRequest, FeedbackInbox } from '../components';
import { usePopper } from 'react-popper';
import { SiZoom, SiSlack, SiGmail } from 'react-icons/si';


const FeedbackPage = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
    });

    const [showWidget, setShowWidget] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    // const onClick = () => setShowMessage(true);

    const Message = () => {
        window.alert("Feedback request sent! We'll let you know when your mentor responds.");

    }

    const [users, setUsers] = useState([
        {
            name: 'Tony Stark',
            subject: 'Complete the Security Training!',
            body: 'Hi, please complete this training ASAP',
        },
        {
            name: 'Batman',
            subject: 'Feedback on Latest Training Module',
            body: 'Hello, you did a poor job on the your recent training module. Try again',
        },
    ]);

    const handlechange = (index) => {
        const newUsers = [...users];
        newUsers[index].name = 'New Name';
        newUsers[index].rollNo = 'New RollNo';
        setUsers(newUsers);
    };

    return (
        <div>
            <div>
                <div>
                    <Navbar />
                </div>

                <div className='w-2/12 fixed sidebar bg-white'>
                    <Sidebar />
                </div>
                {/* 
                <div>
                    <FeedbackRequest />
                </div> */}

                <div className='w-10/12 float-right'>
                    <div id='leftContainer' className='pt-2 w-3/5 h-full float-left rounded-lg ml-2 flex flex-col gap-2'>
                        <div id='feedbackInboxContainer' className='border-3 border-violet-400 rounded-lg p-8 py-8 shadow-xl flex flex-col gap-5 bg-white'>
                            <h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>
                            {/* <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    height: '100vh',
                                    margin: '40px',
                                }}>

                                {users.map((Users, index) => {
                                    return (
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                width: '200px',
                                                margin: '20px',
                                                backgroundColor: 'lightblue',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => {
                                                handlechange(index);
                                            }}
                                            key={index}>
                                            <FeedbackInbox key={index} name={Users.name}
                                                rollNo={Users.rollNo} />
                                        </div>
                                    );
                                })}
                            </div> */}

                        </div>
                    </div>

                    <div id='rightContainer' className='pt-2 h-full float-right rounded-lg mr-2 flex flex-col gap-2 '>
                        <div id='toolsContainer' className='place-content-center border-3 border-violet-400 rounded-lg p-8 py-8 shadow-xl flex flex-col gap-5 bg-white'>
                            <h1 className='font-bold text-center text-md text-violet-500'>Other Tools</h1>
                            <hr />
                            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiZoom />Zoom</button>
                            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiSlack />Slack </button>
                            <button className="p-2 w-96 ml-auto rounded-lg bg-violet-500 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"><SiGmail />Gmail</button>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={() => setShowWidget(!showWidget)}
                        ref={setReferenceElement}
                        className="absolute bottom-4 right-4 p-2 rounded-l-lg rounded-t-lg bg-violet-600 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"
                        type="button">
                        Request Feedback
                    </button>

                </div>
                {showWidget && (
                    <div className='bg-white p-2 rounded-md shadow-lg border-2' ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                        <form className='float-right'>
                            <div className="flex flex-col space-y-2">
                                <textarea className='p-2 h-24 w-64 border border-gray-400 rounded-md' id="feedback" type='textarea' placeholder='Add a message! (optional)'></textarea>
                                <button className="p-2 ml-auto rounded-lg bg-violet-600 hover:bg-violet-700 shadow-md hover:shadow-lg text-white" onClick={Message} type="submit">
                                    Submit  {showMessage ? <Message /> : null}
                                </button>
                            </div>
                        </form>
                    </div>
                )
                }
            </div >
        </div >
    )
}

export default FeedbackPage;