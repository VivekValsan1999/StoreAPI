const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,`name value cannot be empty`],
        maxlength:[45,`Value cannot be more than `]
    },
    price:{
        type:Number,
        required:[true,`price value cannot be empty`]
    },
    featured:{
        type:Boolean,
        default:false
    },
    company:{
        type:String,
        enum:{
            values:[`CompanyA`,`CompanyB`,`CompanyC`,`CompanyD`],
            message:`Entry doesn't exist`
        }
    },
    rating:{
        type:Number,
        default:4.5
    }
});

const productModel=mongoose.model("productModel",productSchema);

module.exports=productModel;
