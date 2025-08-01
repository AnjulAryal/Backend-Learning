let http = require("http");
let server = http.createServer((req,res)=>{
    if(req.url == "/news"){
        let obj = {
            status:1,
            data:[
                {
                    newTitle:"we",
                    newsDes:"Ws Hello"
                },
                {
                    newTitle:"we",
                    newsDes:"Ws Hello"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
      if(req.url == "/about"){

    }
      if(req.url == "/course"){
        res.end("Welcome to JS")
    }
    if(req.url == "/"){
        res.end("Welcome to wS")
    }
    
});
server.listen("8000")//http://localhost:8000