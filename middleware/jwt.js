const jwt = require("jsonwebtoken")
const jwtSecret = "one.com.boilerplate";
module.exports=(req,res,next)=>{
const token= req.body.token || req.query.token || req.headers["x-access-token"]
if(!token){return res.send("Un authorized")}
try{
const decoded= jwt.verify(token,secret)
req.user=decoded  
return next()
}
catch(err){
    return res.status(401).send(err)
}

}