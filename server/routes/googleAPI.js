const router = require('express').Router();
const { google } = require('googleapis');
const request = require('request')
const {getUser, createDashboard, createUser, updateDashboard} = require('../database')

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

router.post('/create-account', async (req, res) => {

    console.log('creating account')
    var isMentor = Number(req.body.isMentor)
    var dashboardKey = req.body.dashboardKey
    var userInfo = req.body.userInfo
    var isMentorString

    console.log(isMentor)
    console.log(dashboardKey)

    console.log('userInfo')
    console.log(userInfo)

    switch (isMentor){
        case 0:
            isMentorString = 'menteeName';
            break
        case 1:
            isMentorString = 'mentorName';
            break
    }
    console.log(isMentorString)

    if (dashboardKey === ''){
        console.log('creating dashboard')
        let dashboardStatus = await createDashboard(userInfo.given_name, isMentorString)
        let userStatus = await createUser(userInfo, isMentor)
        let newUser = await getUser(userInfo.email)
        res.send(newUser)    
    }else{
        console.log('inserting into dashboard')
        let dashboardStatus = await updateDashboard(Number(dashboardKey), isMentorString, userInfo.given_name)
        let userStatus = await createUser(userInfo, isMentor, Number(dashboardKey))
        let newUser = await getUser(userInfo.email)
        res.send(newUser)
    }


})



router.post('/login', createTokens, getUserInfo, async (req, res) => {

    console.log('in login function')
    var email = req.userInfo.email
    console.log(email)
    var dbUser = await getUser(email)

    console.log(email)
    console.log(dbUser)

    var dbUserLen = dbUser.length
    console.log('request.userInfo')
    console.log(req.userInfo)
    req.userInfo['hasAccount'] = 0
    console.log(req.userInfo)


    if (dbUserLen === 0){
        //send back a status that brings up a model asking for additional informaiton
        //that modles submit could go to a /createAccount rout and handle all of this stuff
        // console.log('creating account')
        // let dashboardStatus = await createDashboard(req.userInfo.name, isMentorString)
        // let userStatus = await createUser(req.userInfo, isMentor)
        // let newUser = await getUser(email)

        res.send(req.userInfo)


    }
    else{
        console.log('logging in')
        dbUser = dbUser[0]
        dbUser['hasAccount'] = 1
        console.log(dbUser)
        res.send(dbUser)
    }
})


async function createTokens(req, res, next) {
    console.log('creating token in api')
    try {
        const { code } = req.body
        const { tokens } = await oauth2Client.getToken(code)
        id_token = tokens.id_token
        req.id_token = id_token
        next()
    } catch (error) {
        console.log('error creating tokens')
        res.send(error);
    }
};

function getUserInfo(req, res, next){
    console.log('getting user info')
    token = req.id_token
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
            auth: oauth2Client,
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