const routenotFound=async(req,res)=>{
    res.status(404).json(`Given route is not defined`)
};

module.exports=routenotFound;
