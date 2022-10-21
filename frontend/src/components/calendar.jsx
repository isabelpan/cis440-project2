import { GoogleLogin } from 'react-google-login';

function Calendar() {

    const responseGoogle = (response) => {
        console.log(response)
    }

    const responseError = (error) => {
        console.log(error)
    }

    return (
        <div className = "calendar">
            <div>
                <GoogleLogin clientId = '357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com'
                buttonText = 'Sign in to authorize the calendar' 
                onSuccess = {responseGoogle}
                onFailure = {responseError}
                cookiePolicy ={'single-host-origin'}
                responseType = 'code'
                accessType = 'offline'
                scope = 'openid email profile https://www.googleapis.com/auth/calendar'
                />
            </div>

        </div>
    )
}

export default Calendar;
