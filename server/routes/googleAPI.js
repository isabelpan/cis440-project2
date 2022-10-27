const router = require('express').Router();
const { google } = require('googleapis');
const request = require('request')
const {getUser, createDashboard, createUser} = require('../database')

const GOOGLE_CLIENT_ID = "357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
var userInfo = {}

// still need to input
const REFRESH_TOKEN = " "

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    // Might need to change this to localhost:9000
    // our backend is running on port 9000 and frontend is on 3000
    'http://localhost:3000'
)
router.get('/', async (req, res, next) => {
    res.send({ message: 'Ok api is working' })
});



router.post('/create-tokens', async (req, res, next) => {
    console.log('creating token in api')
    try {
        const { code } = req.body
        const { tokens } = await oauth2Client.getToken(code)
        idToken = tokens.id_token
        getUserInfo(idToken)
        res.send(tokens)
    } catch (error) {
        next(error);
    }
});

function getUserInfo(token){
    console.log('getting user info')
    var url = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token
    console.log(url)
    request.get({
        url: url,
        json: true
    }, async (error, response) => {
        if(error){
            throw error
        }
        userInfo = response.body

        logIn(userInfo)
    })
    }

    // after a users first sign in, we need to ask if they are a mentor or mentee and append that into the gInfo object
    async function logIn(gInfo){
        var email = gInfo.email
        // temp varible for isMentor
        var isMentor = 0

        switch (isMentor){
            case 0:
                var isMentorString = 'mentorName';
                break
            case 1:
                var isMentorString = 'menteeName'
        }

        var dbUser = await getUser(email)
        console.log(dbUser)
        var dbUserLen = dbUser.length
        console.log(dbUserLen)

        if (dbUserLen === 0){
            console.log('creating account')
            let dashboardStatus = await createDashboard(gInfo.name, isMentorString)
            console.log(dashboardStatus)
            let userStatus = await createUser(gInfo, isMentor)
            console.log(userStatus)
        }
        else{
            console.log('logging in')

        }
    }
    









router.post('/create-event', async (req, res, next) => {
    try {
        const { event, description, location, startDateTime } = req.body

        oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

        const calendar = google.calendar('v3')
        const response = await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            requestBody: {
                event: event,
                description: description,
                location: location,
                colorId: '7',
                start: {
                    dateTime: new Date(startDateTime)
                },
            }
        })
        res.send(response)
    } catch (error) {
        next(error)
    }
});

module.exports = router;