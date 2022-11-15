const router = require('express').Router();
const { addFeedback } = require('../database')


router.post('/add-feedback', async (req, res) => {

    console.log('adding feedback')
    console.log(req.body)
    const status = await addFeedback(req.body)
    res.send(status)
})





module.exports = router