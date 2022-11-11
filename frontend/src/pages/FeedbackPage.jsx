import React, { useState } from 'react';
import { Navbar, Sidebar, FeedbackRequest } from '../components';
import { usePopper } from 'react-popper';


const FeedbackPage = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
    });

    const [showWidget, setShowWidget] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const onClick = () => setShowMessage(true);

    const Message = () => {
        <div id="message">
            Feedback request sent! We'll let you know when your mentor responds.
        </div>
    }


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

                <div>
                    <button onClick={() => setShowWidget(!showWidget)}
                        ref={setReferenceElement}
                        className="absolute bottom-4 right-4 p-2 rounded-l-lg rounded-t-lg bg-violet-600 hover:bg-violet-700 shadow-md hover:shadow-lg text-white"
                        type="button">
                        Request Feedback
                    </button>

                </div>
                {showWidget && (
                    <div className='bg-white p-2 rounded-md shadow-lg' ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                        <form className='float-right'>
                            <div className="flex flex-col space-y-2">
                                <textarea className='p-2 h-24 w-64 border border-gray-400 rounded-md' id="feedback" type='textarea' placeholder='Add a message! (optional)'></textarea>
                                <button className="p-2 ml-auto rounded-lg bg-violet-600 hover:bg-violet-700 shadow-md hover:shadow-lg text-white" onClick={onClick} type="submit">
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