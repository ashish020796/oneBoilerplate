const express= require('express')
const app=express();
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/one')

const userRoute=require("./routes/user")
const productRoute=require("./routes/product")
const roleRoute=require("./routes/role")
const cors= require('cors')
app.use(express.json())

app.use('/user',userRoute)
app.use('/product',productRoute)
app.use('/role',roleRoute)
app.listen(3000,(server)=>{ 
    console.log("Server started")
})