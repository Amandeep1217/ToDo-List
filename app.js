
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["GO TO MARKET" , "WATCH MOVIES" , "BASKETBALL(9.00AM)"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);


    // if(currentDay===6 || currentDay===0){
    //     day= "weekend";     
    // }
    // else{
    //     day= "weekday";
    // // }

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednessday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "friday";
    //         break;
    //     case 6:
    //         day = "Saturday" ; 
    //         break;


    //     default:
    //         console.log("Error: current day is equal to " + currentDay);

    // }


    res.render("list", { kindOfDay: day, newListItem: items});

});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
})

app.post("/:i", function (req, res) {
    var item = req.params.i;
    items.splice(item,1);
    console.log(item);
    res.redirect("/");
})




app.listen(3000, function () {
    console.log("The server is runnng on port 3000");
})