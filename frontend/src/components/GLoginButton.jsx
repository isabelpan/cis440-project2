import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { gapi } from "gapi-script";
import { Link, useNavigate } from 'react-router-dom';




function GLoginButton({toggleModle}) {
    const navigate = useNavigate();

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: '',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
    

      

    const responseGoogle = (response) => {
        console.log(response)
        const { code } = response
        console.log('creating tokens')
        axios
            .post('http://localhost:9000/googleAPI/login', { code })
            .then(response => {
                console.log('responce data')
                console.log(response.data)
                
                sessionStorage.setItem("user_info", JSON.stringify(response.data))

                if(response.data['hasAccount'] === 0){
                    console.log('pulling up modle')
                    toggleModle()
                }else{
                    navigate('/')
                }
                
            })
            .catch(error => console.log(error.message))
    }

    const responseError = (error) => {
        console.log('error below')
        console.log(error)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(event, description, location, startDateTime)
        axios
            .post('/api/create-event', { event, description, location, startDateTime })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error.message))
    }

    const [event, setEvent] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [startDateTime, setStartDateTime] = useState('');

    return(
        <div >
            <GoogleLogin
                clientId='357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com'
                onSuccess={responseGoogle}
                onFailure={responseError}
                responseType='code'
                accessType='offline'
                scope='openid email profile https://www.googleapis.com/auth/calendar'
                className='w-full flex justify-center'
            />
        </div>
    )
}
export default GLoginButton