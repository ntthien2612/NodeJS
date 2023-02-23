const path = require("path");
const express = require("express");

var app = express();

var pathToView = path.join(__dirname, "views");
var pathToPublic = path.join(__dirname, "public");

app.set("views", pathToView);
app.set("view engine", "ejs");

app.use(express.static(pathToPublic));

app.get("*", async (request, response) => {
   response.render("index.ejs", {
      layout: "article",
      action: "add",
      data  : require("./data.js")
   });
});


app.post("*", (request, response) => {
   
   console.log(request.body);
})

app.listen(8080, (_) => console.log("Server started: http://127.0.0.1:8080"));

// app.listen(3000, function() {
//    console.log('Server is running at...');
//    console.log('http://127.0.0.1:3000');
// });