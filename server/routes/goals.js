const router = require('express').Router();
const { createGoal, getGoals } = require('../database');

router.post('/add-goal', async (req, res) => {
    createGoal(req.body);
});

router.post('/get-goals', async (req, res) => {
    console.log("Getting goals...");
    console.log(req.body);
    console.log(req.body.dashboardKey);
    let goals = await getGoals(req.body.dashboardKey);
    res.send(goals);
})


module.exports = router