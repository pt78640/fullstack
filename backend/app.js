const express=require("express");
const mongoose=require("mongoose");
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
    }
    const teacherSchema=new mongoose.Schema({
        name:{type:String, required:true},
        age:{type:Number,required:true},
        gender:{type:String,required:true},
        class:[{type:Object}]
    });
    const teacher=mongoose.model("user", teacherSchema)
    
const app=express();
app.use(express.json());
app.post("/users", async(req,res)=>{
    const newuser=await teacher.create(req.body);
    res.send({newuser})
});
app.get("/users/:page",async(req,res)=>{
    const users=await teacher.find().skip((Number(req.params.page)-1)*5).limit(5);
    res.send({users})
})
app.get("/users",async(req,res)=>{
    const users=await teacher.find();
    res.send({users})
})
app.get("/users/search/:text",async(req,res)=>{
    const user = await teacher.find({name:req.params.text});
    res.send(user)
})
app.get("/users/filter/:gender",async(req,res)=>{
    const user = await teacher.find({gender:req.params.gender});
    res.send(user)
})

app.listen(2345, async function(){
    await connect();
    console.log("listening")
})
