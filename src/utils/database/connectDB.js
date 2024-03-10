const mongoose = require("mongoose");
const configs = require("../../configs");


module.exports = async () => {
    try {
        await mongoose.connect(configs.mongoURI);
        console.log("Database connected");
    } catch (err) {
        console.log("Error while connecting to database", err);
    }
}

