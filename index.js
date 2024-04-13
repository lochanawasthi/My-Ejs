const express = require("express");

const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
res.render("home.ejs")
});

app.listen(port,()=>{
console.log(`listening ${port}`);
});


app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    res.render("instragram.ejs",{username});
});
app.use((req, res) => {
    console.log("404- not found");
});