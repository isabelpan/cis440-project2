const router = require('express').Router();
const { addFeedback, getFeedback, markSeen } = require('../database')


router.post('/add-feedback', async (req, res) => {

    console.log('adding feedback')
    console.log(req.body)
    const status = await addFeedback(req.body)
    res.send(status)
})

router.post('/get-feedback', async (req, res) => {
    console.log('getting feedback')
    console.log(req.body)
    console.log(req.body.dashboardKey)
    let feedback = await getFeedback(req.body.dashboardKey)
    console.log(feedback)
    res.send(feedback)

})

router.post('/mark-seen', async (req, res) => {
    console.log('marking as seen')
    console.log(req.body)
    let status = await markSeen(req.body.feedbackId)
    console.log(status)
    res.send(status)

})




module.exports = router