var express = require("express");
var app = express();
var port = 3000;
 
app.get("/", (req, res) => {
res.send("Hii");
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

