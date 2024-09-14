const mongooose= require('mongoose')


const link= "mongodb+srv://admin:sonu12@cluster0.yvrnr.mongodb.net/"

const connectDB=async()=>{
    try{
        await mongooose.connect(link)
        console.log("db is connected")
    }
    catch(err){
        console.log("this is error", err)

    }

}

module.exports= connectDB

