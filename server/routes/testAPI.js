var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send('API is working properly');

});

router.get("/hi", function(req, res, next){
    res.send('hello');

});

module.exports = router