const router = require('express').Router();
const { addGoal, getGoals, getGoalCount, completeGoal } = require('../database');

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

// router.post('/update-goal', async (req, res) => {
//     console.log("Updating Goal");
//     console.log(req.body);
//     let updatedGoal = await updateGoal(req.body.dashboardKey);
//     console.log(updatedGoal);
//     res.send(updatedGoal);

// })

router.post('/complete-goal', async(req, res) => {
    console.log(req.body);
    let goal = req.body;

    let status = await completeGoal(goal.goalId);
})


module.exports = router;