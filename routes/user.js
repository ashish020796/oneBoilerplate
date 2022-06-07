const Router= require('express').Router()
const userCtlr= require('../controllers/user')
const asyncHandler= require('express-async-handler')
const jwt= require("../middleware/jwt")

Router.post("/add",jwt,userCtlr.addUser)

/* Router.get("/user",userCtlr)
Router.get("/users",userCtlr)
Router.get("/login",userCtlr)
Router.get("/login",userCtlr) */

module.exports= Router