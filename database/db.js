var mongoose=require("mongoose")

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to the DataBase");
    }
    catch(error){
        console.log("error",error)
    }
}

module.exports = connectToDatabase