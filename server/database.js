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

const createUser = (gInfo, isMentor) => {
    console.log('creating user')
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO user (email, fname, lname, isMentor, dashboardKey) VALUES (?, ?, ?, ?, ?)", [gInfo.email, gInfo.given_name, gInfo.family_name, isMentor, lastDashboardKey], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })       
}


module.exports = { getUser, createDashboard, createUser}