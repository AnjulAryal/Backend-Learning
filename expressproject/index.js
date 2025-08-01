let express  = require("express");
let app = express();
app.use(express.json());
let myToken = "12345";
let checkToken=(req,res,next)=>{
    if(req.query.token== "" || req.query.token ==undefined){
        return res.send({
            status:0,
            msg:"Please Fill the token"
        })
    }
    if(req.query.token!=myToken){
         return res.send({
            status:0,
            msg:"Please Fill the correct token"
        })
    }
    next();
}
let myPassword = "hello123";
app.use((req,res,next)=>{
    if(req.query.password="" || req.query.password==undefined){
        return res.send({
            status:0,
            message: "Please fill the password"
        })
    }
    if(req.query.password!==myPassword){
        return res.send({
            status:0,
            message: "Password didnot matched!!!"
        })
    }
    next()
})
app.use(checkToken);
app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home Page API"})
})
app.get("/news",(req,res)=>{
    res.send({status:1,msg:"Hello from news"})
})
app.get("/products",(req,res)=>{
    res.send({status:1,msg:"Hello from products"})
})
app.post("/login",(req,res)=>{
    console.log(req.body)
    // res.send({
    //     status:2,
    //     msg:"Login Sucessful",
    //     bodyData:req.body,
    //     queryData:req.query
    // })
    res.status(200).json({
        msg:"Login Sucessful",
        bodyData:req.body,
        queryData:req.query
    })
})
app.get("/news/:id",(req,res)=>{
    let currentId = req.params.id;
    res.send("Hello Kanxa" + currentId)
})
app.listen("8000")