const mysql = require('mysql2') 

var lastDashboardKey

const pool = mysql.createPool({
    host: '107.180.1.16',
    user: '440fall20225',
    password: '440fall20225', 
    database: '440fall20225'
})


const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM user', (err, results) => {
            if(err){
                console.log('throwing error')
                return reject(err);
            }
            return resolve(results);
        })
    })
}

const getUser = (email) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

const createDashboard = (name, isMentor) => {
    console.log('creating dashboard')
    return new Promise((resolve, reject) => {
        // no quotes in sql query
        pool.query("INSERT INTO dashboard (??) VALUE (?)", [isMentor, name], (err, results) => {
            if(err){
                return reject(err)
            }
            console.log('last inserted key')
            lastDashboardKey = results.insertId
            console.log(lastDashboardKey)
            return resolve(results)
        })
    })   
}

const updateDashboard = (dashboardKey, isMentor, name) => {
    console.log('creating dashboard')
    return new Promise((resolve, reject) => {
        // no quotes in sql query
        pool.query("UPDATE dashboard SET ?? = ? WHERE dashboardKey = ?", [isMentor, name, dashboardKey], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })   
}

const createUser = (gInfo, isMentor, dashboardKey=lastDashboardKey) => {
    console.log('creating user')
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO user (email, fname, lname, isMentor, dashboardKey) VALUES (?, ?, ?, ?, ?)", [gInfo.email, gInfo.given_name, gInfo.family_name, isMentor, Number(dashboardKey)], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })       
}

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////tasks////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
const createTask = (taskInfo) => {
    console.log('creating task')
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO task (task, description, dashboardKey, completed, deadline, priority) VALUES (?, ?, ?, ?, ?, ?)", [taskInfo.taskTitle, taskInfo.taskDescription, taskInfo.dashboardKey, taskInfo.isComplete, taskInfo.deadlineDate, taskInfo.priority], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })       
}

const getTasks = (dashboardKey) => {
    console.log('getting tasks')
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM task WHERE dashboardKey = ?", [dashboardKey], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}


const completeTasks = (taskId) => {
    console.log('completing tasks in db')
    return new Promise((resolve, reject) => {
        pool.query("UPDATE task SET completed = 1 WHERE taskId = ?", [taskId], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })

}

const addFeedback = (obj) => {
    console.log('adding feedback in db')
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO feedback (subjectLine, feedback, seen, dashboardKey, feedbackTask) VALUES (?, ?, ?, ?, ?)", [obj.subjectLine, obj.feedback, obj.seen, obj.dashboardKey, obj.feedbackTask], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })

}





const addGoal = (goalData) => {
    console.log("Creating new goal...");
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO goal (goalTitle, goalDescription, dashboardKey, completed) VALUE (?, ?, ?, ?)", [goalData.goalTitle, goalData.goalDescription, goalData.dashboardKey, goalData.isComplete], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

const getGoals = (dashboardKey) => {
    console.log('Getting goals...')
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM goal WHERE dashboardKey = ?", [dashboardKey], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

const getGoalCount = (dashboardKey) => {
    console.log("Counting goals...")
    return new Promise((resolve, reject) => {
        pool.query("SELECT COUNT (*) as GoalCount FROM goal WHERE dashboardKey = ?", 
            [dashboardKey], (err, results) => {
                if(err) {
                    return reject(err) 
                }
                return resolve(results)
            })
    })
}


<<<<<<< HEAD
// const updateGoal = (dashboardKey, goalData) => {
=======


// const updateGoal = (dashboardKey) => {
>>>>>>> 14613c38ef9d2525bf1f5c8b33a3789afe04ec23
//     console.log('Updating goal...');
//     return new Promise((resolve, reject) => {
//         pool.query("UPDATE goal SET goalTitle = ?, goalDescription = ?, WHERE dashboardKey = ?", [goalData.goalTitle, goalData.goalDescription, dashboardKey], (err, results) => {
//             if(err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })
// }

module.exports = { getUser, createDashboard, createUser, updateDashboard, createTask, getTasks, addGoal, getGoals, getGoalCount, completeTasks, addFeedback}