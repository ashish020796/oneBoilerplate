const Router= require('express').Router()
const jwt= require("../middleware/jwt")
const moduleRights= require("../middleware/authorized")
const productCtlr=require("../controllers/product")
const moduleName= "product"



Router.post("/add",jwt, moduleRights(moduleName,"add"), productCtlr.addProduct)
Router.put("/update",jwt, moduleRights(moduleName,"update"),   productCtlr.updateProduct)
Router.delete("/delete",jwt, moduleRights(moduleName,"delete") ,productCtlr.deleteProduct)
Router.get("/find/:id",jwt,moduleRights(moduleName,"read"),   productCtlr.getProductById)
Router.get("/find",jwt, moduleRights(moduleName,"read"),  productCtlr.getProducts)

module.exports= Router