import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log("Error in connecting to DB",err);
    });
}

export default connectDB;