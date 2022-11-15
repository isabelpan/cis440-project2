const router = require('express').Router();
const { addGoal, getGoals, getGoalCount } = require('../database');

router.post('/add-goal', async (req, res) => {
    console.log("Adding new goal...");
    console.log(req.body);
    addGoal(req.body);

});

router.post('/get-goals', async (req, res) => {
    console.log("Getting goals");
    console.log(req.body);
    console.log(req.body.dashboardKey);
    let goals = await getGoals(req.body.dashboardKey);
    console.log(goals);
    res.send(goals);
});

router.post('/get-goalCount', async (req, res) => {
    console.log('Counting goals');
    console.log(req.body);
    console.log(req.body.dashboardKey);
    let count = await getGoalCount(req.body.dashboardKey);
    console.log(count);
    res.send(count);
})


module.exports = router;