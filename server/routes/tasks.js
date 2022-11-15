const router = require('express').Router();
const { google } = require('googleapis');
const { tasks } = require('googleapis/build/src/apis/tasks');
const request = require('request')
const {createTask, getTasks, completeTasks} = require('../database')


router.post('/add-task', async (req, res) => {

    console.log('adding task')
    console.log(req.body)
    createTask(req.body)
})

router.post('/get-tasks', async (req, res) => {
    console.log('getting tasks')
    console.log(req.body)
    console.log(req.body.dashboardKey)
    let tasks = await getTasks(req.body.dashboardKey)
    console.log(tasks)
    res.send(tasks)

})

router.post('/complete-tasks', async (req, res) => {
    console.log(req.body)
    let task = req.body
    
    let status = await completeTasks(task.taskId)


})



module.exports = router