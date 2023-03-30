const errorHandler=(err,req,res,next)=>{
    res.status(500).json(`Error found`);
    console.log(`Error found ${err}`)
};

module.exports=errorHandler;


