import React, { useState } from 'react';

const FeedbackInbox = (props) => {

    return (
        <div>
            <div>{props.name}</div>
            <div>Subject: {props.subject}</div>
            <div>Body: {props.body}</div>
        </div>
    );

};

export default FeedbackInbox;