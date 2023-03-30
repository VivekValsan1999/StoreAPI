const mongoose=require("mongoose");
const productData=require("./product.json");
const connectDB=require("../server/DB/connectDB")
const dotenv=require("dotenv");
dotenv.config({path:"../config.env"});
const productModel=require("../server/model/productModel")

const addData=async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(productData);
    console.log(`Succesfully added data`)
    }catch(error){
        console.log(`Failed to add data to the DB`)
    }
};

addData();


