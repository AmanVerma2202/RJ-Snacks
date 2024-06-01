import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected`);
    } catch (error) {
        console.log(`Error while connecting ${error}`);
    }
}

export default connectDB;