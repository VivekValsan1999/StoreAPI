const express =require("express");
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const morgan=require("morgan");
const mongoose=require("mongoose")
const connectDB=require("./server/DB/connectDB");
const routenotFound = require("./server/middleware/routenotFound");
const errorHandler = require("./server/middleware/errorHandler");
require("express-async-error");
const router=require("./server/routes/routes")

const app=new express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV != "production"){
    dotenv.config({path:"./config.env"})
};

const PORT =process.env.PORT || 1200
//home route
app.get("/",(req,res)=>{
    res.send(`<h1>Store API testing</h1><br><a href="/storeAPI/productList">Product List</a>`)
})

//product route 
app.use("/storeAPI",router);
app.use(routenotFound);
app.use(errorHandler);

const start=async()=>{
    try {
       await connectDB();
       app.listen(PORT,()=>{
        console.log(`Server is listening to http://localhost:${PORT}`)
       }) 
    } catch (error) {
        console.log(`Failed to connect to server: ${error}`)
    }
};

start();
