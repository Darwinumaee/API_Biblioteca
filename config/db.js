const mongoose = require("mongodb");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MondogoDB no conectado", error);
        process.exit(1);
    }    
};

module.exports = connectDB;
