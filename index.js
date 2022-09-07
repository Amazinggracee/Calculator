
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let result = document.getElementById("inputext");

    let calculate = (number)=>{
        result.value +=number;
    }
    let Result=()=>{
        try{
           result.value = eval(result.value) 
        }
        catch(err){
            alert("Enter the valid input");
        }
    
    }
    function clr(){
        result.value = "";
    }
    function del(){
        result.value = result.value.slice(0, -1);
    }
})
app.listen(2000, function () {
    console.log("Server is running on localhost2000");
});



/*

*/