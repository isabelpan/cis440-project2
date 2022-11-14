import React from 'react';

const FeedbackForm = () => {

    return (
        <div>
            <div>{props.name}</div>
            <div>Subject: {props.subject}</div>
            <div>Body: {props.body}</div>
        </div>
    )
}

export default FeedbackForm;