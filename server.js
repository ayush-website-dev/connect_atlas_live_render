const mongoose = require('mongoose');

const uri = "mongodb+srv://ayushdce2:8445315561Aa@cluster0.8kkxg.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

let db_response = "start value";

async function connectToMongoDB() {
    try {
     
        await mongoose.connect(uri);

        console.log("Connected successfully to MongoDB Atlas using Mongoose");
        db_response = "Connected successfully to MongoDB Atlas using Mongoose";
    
    } catch (error) {
    
        console.error("Error connecting to MongoDB Atlas:", error);
        db_response = `${error} error occured`;
    
    }
}

connectToMongoDB();

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.json({message:"Hello World",db_response:db_response});
})

app.listen(3000, () => {
    console.log("server at 3000 connected")
});