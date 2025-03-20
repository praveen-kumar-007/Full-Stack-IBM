const express=require("express");
const {connectDB} = require("./confligs/db");
const { userRouter } = require("./routes/user.route");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to backend server");
});


app.use(userRouter);

const PORT=8080;

app.listen(PORT, async()=>{
    try {
        await connectDB
        console.log("DB is connected");
        console.log(`server is running at http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
