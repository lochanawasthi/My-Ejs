const express = require("express");
const app = express();


const port = 8080;

app.use(express.static("public"));
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");


app.get ("/",(req,res)=>{
res.render("home.ejs")
res.send("on root");
});


app.get("/apple", (req,res)=>{

let num = Math.floor(Math.random()*6)+1;

res.render("rolldice.ejs", {num});

});

app.get("/ig/:username",(req,res)=>{

    // const followers = ["lochan","awasthi"];
    let{ username } =req.params;
    const instData = require("./data.json");
    const data = instData[username];

     if(data){
        res.render("instagram.ejs",{data});
     }
     else{
        res.render("error.ejs");
     }
    
    
//     res.render("instagram.ejs",{username,followers});
});

app.listen(port, ()=>{
    console.log(`listenging boss ${port}`);
})