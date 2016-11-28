var express = require("express")
var app = express()

app.get('/', function (req, res) {
  res.send("Hello World!")
})

app.listen(process.env.PORT || 8080, function () {
  console.log("Voting app listening on port 3000!")
})
