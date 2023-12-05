import mongoose from "mongoose";

export default function connectDB() {
    const url = "mongodb://127.0.0.1:27017/bezkoder_db";

    try {
        mongoose.connect(url);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    const dbconnection = mongoose.connection;
    dbconnection.once("open", (_) => {
        console.log(`Database connected; ${url}`);
    });

    dbconnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });

    return;
}