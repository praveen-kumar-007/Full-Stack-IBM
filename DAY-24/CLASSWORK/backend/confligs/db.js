const mongoose = require("mongoose");

const connectDB = mongoose.connect("mongodb+srv://subhajitmal509:subhajit@cluster0.bdptc.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connectDB
}