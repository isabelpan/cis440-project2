import React, { useState } from 'react';
import { FeedbackForm } from '../components';

const FeedbackInbox = () => {
    // const [users, setUsers] = useState([
    //     {
    //         name: 'Tony Stark',
    //         subject: 'Complete the Security Training!',
    //         body: 'Hi, please complete this training ASAP',
    //     },
    //     {
    //         name: 'Batman',
    //         subject: 'Feedback on Latest Training Module',
    //         body: 'Hello, you did a poor job on the your recent training module. Try again',
    //     },
    // ]);

    // const handlechange = (index) => {
    //     const newUsers = [...users];
    //     newUsers[index].name = 'New Name';
    //     newUsers[index].rollNo = 'New RollNo';
    //     setUsers(newUsers);
    // };

    return (
        <div>
            {/* <h1 className='font-bold text-left text-3xl text-violet-600'>Inbox</h1>
            <div
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
                            <FeedbackForm key={index} name={Users.name}
                                rollNo={Users.rollNo} />
                        </div>
                    );
                })}
            </div> */}
        </div>
    );

};

export default FeedbackInbox;