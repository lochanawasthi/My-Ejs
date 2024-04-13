const express = require("express");
const app = express();


const port = 8080;

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
let{username} =req.params;
res.render("instagram.ejs",{username});
}
);

app.listen(port, ()=>{
    console.log(`listenging boss ${port}`);
})