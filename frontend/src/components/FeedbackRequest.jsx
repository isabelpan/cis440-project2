import React from 'react';
import { usePopper } from 'react-popper';

const FeedbackRequest = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
    });

    return (
        <div className='w-10/12 float-right h-full py-14 pl-10'>
            <button className="absolute bottom-4 right-4 p-5 rounded-l-lg rounded-t-lg bg-violet-700 hover:bg-violet-600 shadow-md hover:shadow-lg text-white" type="button">
                Request Feedback
            </button>
            <div ref={setPopperElement} style={styles.popper}{...attributes.popper} className="bg-white p-2 rounded-md shadow-lg">
                <form>
                    <div className="absolute flex flex-col space-y-2">
                        <textarea className='p-2 h-24 w-64 border border-gray-400 rounded-md' id="feedback" type='textarea' placeholder='Add a message! (optional)'></textarea>
                        <button className="p-2 ml-auto rounded-lg bg-blue-700 hover:bg-blue-600 shadow-md hover:shadow-lg text-white" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FeedbackRequest;
