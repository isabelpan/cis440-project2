const router = require('express').Router();
const { google } = require('googleapis');
const request = require('request')
const {getUser, createDashboard, createUser} = require('../database')

const GOOGLE_CLIENT_ID = "357003526122-fnc0n6ua8um1iht4inc2brhu479afina.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
var userInfo = {}

// expires after 7 days, entered 10/25
const REFRESH_TOKEN = "4/0ARtbsJpq1wTp72Z"

// const oauth2Client = new google.auth.OAuth2(
//     GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET,
//     // Might need to change this to localhost:9000
//     // our backend is running on port 9000 and frontend is on 3000
//     'http://localhost:3000'
// )

googleCalendarSync.init({
    auth: oauth2Client,
    authUrl: 'https://oauth2.googleapis.com/token',
    clientId: GOOGLE_CLIENT_ID,
    refreshURL: REFRESH_TOKEN,
})

function getToken(type, token, callback) {

    const postData =
        'client_id=' + GOOGLE_CLIENT_ID + '&' +
        'client_secret=' + GOOGLE_CLIENT_SECRET + '&' +
        (type === 'refresh' ?
            'grant_type=refresh_token&' +
            'refresh_token=' + token:
            'grant_type=authorization_code&' +
            'code=' + token + '&' +
            'redirect_uri = postmessage&' +
            'code_verifier='
        )
   

    const postOptions = {
        host: 'oauth2.googleapis.com',
        port: '3000',
        path: '/token',
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content_Length' : Buffer.byteLength(postData)
        }
    };

    const postReq = https.request(postOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', d => {
            callback(d);
        });
    });
    
    postReq.on('error', error);
    console.log(error)
    

    postReq.write(postData)
    postReq.end();
}
    
function getPostData (req, callback) {
    let body = '';
    req.on('data', (data) => {
    body += data;
    
});

    req.on('end', () => {
        const parsed = new URLSearchParams(body);
        const data = {}
        for (const pair of parsed.entries()) {
            data[pair[0] = pair[1]];
        }
        callback(data)
    });
}

function checkCSRF(req, res) {
    // check if CSRF header is present
    if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
        return true; 
    } 
    // otherwise end request
    res.statusCode = 500; 
    res.end();
    return false;
}

function sendResponse(res, data) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    res.end(data)
}

const server = http.createServer(function (req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
        res.end();
    } else if (req.url.startsWith('/auth')) {   //handles auth
        if (checkCSRF(req,res)) {
            getPostData(req, (data) => {
                getToken('auth',data.code, (token) => {
                    sendResponse(res, token);
                });
            })
        }
    } else if (req.url.startsWith('/refresh')) { //handles refresh
        if (checkCSRF(req, res)) {
            getPostData(req, (data) => {
                // exchanges refresh token to access token (on access token expiry)
                getToken('refresh', data.REFRESH_TOKEN, (token) => {
                    sendResponse(res, token);
                })
            })
        }
    }
}) 



// ------------

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

// function getUserInfo(req, res, next){
//     console.log('getting user info')
//     token = req.idToken
//     var url = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token
//     console.log(url)
//     request.get({
//         url: url,
//         json: true
//     }, async (error, response) => {
//         if(error){
//             throw error
//         }
//         req.userInfo = response.body
//         next()
//     })
//     }

    
    

// router.post('/create-event', async (req, res, next) => {
//     try {
//         const { event, description, location, startDateTime } = req.body

//         oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

//         const calendar = google.calendar('v3')
//         const response = await calendar.events.insert({
//             auth: oauth2Client,weaisu
//             requestBody: {
//                 event: event,
//                 description: description,
//                 location: location,
//                 colorId: '7',
//                 start: {
//                     dateTime: new Date(startDateTime)
//                 },
//             }
//         })
//         res.send(response)
//     } catch (error) {
//         next(error)
//     }
// });

module.exports = router;
server.listen(8080);