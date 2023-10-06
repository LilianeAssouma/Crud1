const express = require("express");
const logger= function logger (req, res,next){
    console.log(req.body);
    next();
};
module.exports=logger;


