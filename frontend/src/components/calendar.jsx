import axios from 'axios';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import router from '../../../server/routes/api.route';

function Calendar() {

    const responseGoogle = (response) => {
        console.log(response)
        const { code } = response
        axios
            .post('/api/create-tokens', { code })
            .then(response => {
                console.log(response.data)
                setSignedIn(true)
            })
            .catch(error => console.log(error.message))
 
    }

    const responseError = (error) => {
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
    const [signedIn, setSignedIn] = useState(false);

    return (
        <div>
            <div className="calendar">
                <h1>Calendar</h1>
            </div>
            {
                !signedIn ? (<div><GoogleLogin clientId='357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com'
                    buttonText='Sign in to authorize the calendar'
                    onSuccess={responseGoogle}
                    onFailure={responseError}
                    cookiePolicy={'single-host-origin'}
                    responseType='code'
                    accessType='offline'
                    scope='openid email profile https://www.googleapis.com/auth/calendar'
                /></div>) : (<div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="event">Event</label><br />
                        <input type="text" id="event" value={event} onChange={e => setEvent(e.target.value)} />
                        <br />

                        <label htmlFor="description">Description</label><br />
                        <input type="text" id="description" value={event} onChange={e => setDescription(e.target.value)} />
                        <br />

                        <label htmlFor="location">Location</label><br />
                        <input type="text" id="location" value={event} onChange={e => setLocation(e.target.value)} />
                        <br />

                        <label htmlFor="startDateTime">Start Date/Time</label><br />
                        <input type="text" id="startDateTime" value={event} onChange={e => setStartDateTime(e.target.value)} />
                        <br />

                        <button type='submit'>Create Event</button>
                    </form>
                </div>)
            }

        </div>
    )
}


export default Calendar;