const express=require("express");
const router=express.Router();
const controller=require("../controller/controller");

router.get("/static",controller.fetchAlldata);
router.get("/",controller.fetchDataFilter);


module.exports=router;
