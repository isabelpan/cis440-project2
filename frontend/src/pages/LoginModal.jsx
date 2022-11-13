import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Modal = ()  => {
    const navigate = useNavigate();

    const [isMentore, setIsMentore] = useState(0)
    const [code, setCode] = useState('')

    const user_info = JSON.parse(sessionStorage.getItem('user_info'))

    function mentoreHandeler(e){
        setIsMentore(e.target.value)
    }

    function codeHandeler(e){
        setCode(e.target.value)
    }


    async function handleSubmit(){
        console.log('submitting modal')
        const results = {'dashboardKey': code, 'isMentor': isMentore, 'userInfo': user_info}

        axios
            .post('http://localhost:9000/googleAPI/create-account', results)
            .then(response => {
                console.log(response.data)
                sessionStorage.setItem("user_info", JSON.stringify(response.data))
            }).catch(error => console.log(error.message))

        navigate('/')
        
    }








    return(
        <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <p className="text-3xl font-semibold">Welcome!</p>
                    </div>
                    <div className="text-1xl font-semibold pb-10">
                        <p>We just need a few more pieces of information to set up your account.</p>
                    </div>
                    <form >
                    <label className='text-1xl font-semibold'>Are you a <span className="text-violet-600">Mentor or Mentee?</span></label> 

                    <div className='flex flex-row gap-6 w-full text-center pb-10'>
                        <div className='flex w-1/2'>
                            <input type='radio' value='1' id='mentor' name='chooseRole' className='peer/mentor' onChange={(e) => mentoreHandeler(e)}/>
                            <label htmlFor='mentor' className='hover:cursor-pointer border-2 py-1 w-full rounded-md shadow-md hover:scale-110 ease-out duration-300 peer-checked/mentor:text-violet-600 hover:text-violet-600 peer-checked/mentor:border-violet-600  peer-checked/mentor:font-bold'>Mentor</label>
                        </div>
                        
                        <div className='flex w-1/2'>
                            <input type='radio' value='0' id='mentee' name='chooseRole' className='peer/mentee' onChange={(e) => mentoreHandeler(e)}/>
                            <label htmlFor='mentee' className=' hover:cursor-pointer border-2 py-1 w-full rounded-md shadow-md hover:scale-110 ease-out duration-300 peer-checked/mentee:text-violet-600 hover:text-violet-600 peer-checked/mentee:border-violet-600 peer-checked/mentee:font-bold'>Mentee</label>
                        </div>
                    </div>
                    <div>
                        <p className="text-1xl font-semibold">Has someone shared a code with you? if so enter it here</p>
                        <input type="text" className="border-2" onChange={(e) => codeHandeler(e)}></input>
                    </div>
                    <button type='button' className='mx-auto border-1 border-gray-300 rounded-md h-10 mt-4 hover:bg-gray-300 hover:border-gray-300 shadow-md hover:scale-105 ease-out duration-300 hover:shadow-lg text-violet-600 active:bg-violet-500 active:border-violet-500 active:shadow-gray-400 active:text-violet-900' onClick={() => handleSubmit()}>Register</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal