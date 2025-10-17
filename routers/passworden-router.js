var express=require("express")
var {register,login}=require("../controllers/passworden-contoller")

var router=express.Router()

router.post("/register",register)

router.get("/login",login)

module.exports=router



