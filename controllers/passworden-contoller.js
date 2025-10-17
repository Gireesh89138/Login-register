var user=require("../model/passworden")
var byCrpt=require("bcrypt")
var webToken=require("jsonwebtoken")


//register Controller

var register=async(req,res)=>{
    try{
        // extract  the user information

        var {userName,email,password,role}=req.body;


        //checkwheather the userName and email exist

        var userExist= await user.findOne({$or : [{userName},{email}]});
        if(userExist){
            return res.status(200).json({message:"user Exist"})
        }

        //generate a salt and hash the password

        var salt=await byCrpt.genSalt(10)
        var hashPassword =await byCrpt.hash(password,salt)

        //create a new user in the data base

        var myUser= await user.create({
            userName,
            email,
            password : hashPassword,
            role
        })

        //send the successfull response

        if(myUser){
            return res.status(201).json({message:"created a new user"})
        }
        else{
            return res.status(400).json({message:"cannot create"})
        }
    }


    catch(error){
        console.log("error",error);
        res.status(500).json({Message:"Server error"});
        
    }
}



var login=async(req,res)=>{
    //collect the user name and the password
    var {userName,password}=req.body;

    // check wheather the user name exist or not 
    var userThere =await user.findOne({userName});
    if(!userThere){
        return res.status(400).json({message :"invalid user name or password"})
    }

    var isPassword= await byCrpt.compare(password,userThere.password)
    console.log(isPassword);
    if(!isPassword){
        return res.status(400).json({message:"invalid user name or password"})
    }


    var gerenatedToeken = webToken.sign({
        userName:userThere._id,
        email:userThere.email,
        role:userThere.password
    },process.env.JSON_WEB_TOKEN,{expiresIn : "10m"})

    res.status(200).json({message:"Loin successfull",token: gerenatedToeken})






    res.status(200).json({message:"login SuccessFull ",token : gerenatedToeken})


}

module.exports={
    register,login
}


