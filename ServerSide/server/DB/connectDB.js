const mongoose=require("mongoose");
const dotenv=require("dotenv");

if(process.env.NODE_ENV != "production"){
    dotenv.config({path:"../../config.env"})
};

const connectDB=async()=>{
    try{
    mongoose.set("strictQuery",true);
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true
    });
    console.log(`Connected to DB`)
    }catch(error){
        console.log(`Failed to connect to DB : ${error}`)
    }
};

module.exports=connectDB;