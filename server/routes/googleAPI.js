const router = require('express').Router();
const { google } = require('googleapis');
const request = require('request')
const {getUser, createDashboard, createUser} = require('../database')

const GOOGLE_CLIENT_ID = "357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
var userInfo = {}

// expires after 7 days, entered 10/25
const REFRESH_TOKEN = "4/0ARtbsJpq1wTp72Z"

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



router.post('/login', createTokens, getUserInfo, async (req, res) => {

    console.log('logging in')
    var email = req.userInfo.email
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
    var dbUserLen = dbUser.length
    

    if (dbUserLen === 0){
        console.log('creating account')
        let dashboardStatus = await createDashboard(req.userInfo.name, isMentorString)
        let userStatus = await createUser(req.userInfo, isMentor)
        console.log(dashboardStatus)
        console.log(userStatus)
        let newUser = await getUser(email)
        res.send(newUser)
    }
    else{
        console.log('logging in')
        res.send(dbUser)
    }
})


async function createTokens(req, res, next) {
    console.log('creating token in api')
    try {
        const { code } = req.body
        const { tokens } = await oauth2Client.getToken(code)
        idToken = tokens.id_token
        req.idToken = idToken
        next()
    } catch (error) {
        console.log('error creating tokens')
        res.send(error);
    }
};

function getUserInfo(req, res, next){
    console.log('getting user info')
    token = req.idToken
    var url = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token
    console.log(url)
    request.get({
        url: url,
        json: true
    }, async (error, response) => {
        if(error){
            throw error
        }
        req.userInfo = response.body
        next()
    })
    }

    
    

router.post('/create-event', async (req, res, next) => {
    try {
        const { event, description, location, startDateTime } = req.body

        oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

        const calendar = google.calendar('v3')
        const response = await calendar.events.insert({
            auth: oauth2Client,weaisu
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