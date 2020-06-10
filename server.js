const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
    console.log("get Running!")
});

app.post("/bmicalculator",function(req,res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = (weight/(height*height)).toFixed(2);
    res.send("<h3>Calculated BMI is :"+bmi+"</h3>");
    console.log("post Running!")
});

app.listen(2000,function(){
    console.log("Listening to 2000")
});