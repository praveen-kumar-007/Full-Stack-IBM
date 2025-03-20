const express=require("express");
const userRouter = require("./routes/user.route");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">Welcome to our Backend..!!</h1>`)
});

app.use(userRouter)

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})