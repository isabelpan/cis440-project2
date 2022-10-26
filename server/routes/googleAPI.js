const router = require('express').Router();
const { google } = require('googleapis');

const GOOGLE_CLIENT_ID = "357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

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
        res.send(tokens)
    } catch (error) {
        next(error);
    }
});

router.get("/hi", function(req, res, next){
    res.send('hello');

});

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