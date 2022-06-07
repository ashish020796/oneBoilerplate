const productCtlr=require("../controllers/product")
const Router= require('express').Router()

Router.get("/createRole", productCtlr.createRoles)
Router.get("/getRoles", productCtlr.getRoles)

module.exports= Router
