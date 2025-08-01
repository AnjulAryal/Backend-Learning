let express = require("express");
let app = express();
let myToken = "12345"
let checkToken = (req,res,next)=>{
    if(req.query.token=="" || req.query.token== undefined){
        return res.send({
            status:400,
            msg: "please fill token and your token is empty",
        })
    }
    if(req.query.token!==myToken){
        return res.send({
            status:400,
            msg: "Wrong credential",
        })
    }
    next()
}
app.use(checkToken)
app.get("/hello",(req,res)=>{
    return res.send("Hello World !!!")
})
app.post("/login",(req,res)=>{
    let data = {
        status:1,
        msg: "ready to use",
        success:true
    }
    return res.send(data);
})
app.get("/news/:id",(req,res)=>{
    return res.send(
        {
            author: "Anjul",
            authorID: 3,
            status: "OK",
            newsDescription : "Today news is to get and learn about noddes js happy learning"
        }
    )
})
app.listen(8000,()=>{
    console.log("Running on port 8000");
});