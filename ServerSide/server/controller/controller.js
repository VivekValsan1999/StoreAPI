const mongoose=require("mongoose");
const productModel=require("../model/productModel");

const fetchAlldata=async(req,res)=>{
    const getAlldata= await productModel.find();
    res.status(200).json({getAlldata})
};

const fetchDataFilter=async(req,res)=>{
    const {featured,price} = req.query;
    const queryObject= {};
    if(featured){
        queryObject.featured=featured == "true" ? true : false ;
    };
    if(price){
        queryObject.price= price
    }
    const getData= await productModel.find(queryObject)
    res.status(200).json({getData, TotalNumber:getData.length})
};

module.exports={
    fetchAlldata,fetchDataFilter
};
