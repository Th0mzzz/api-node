import mongoose, { mongo } from "mongoose";
async function dbConnect() {
    mongoose.connect(process.env.DBCONN)
    return mongoose.connection;
}

export default dbConnect;