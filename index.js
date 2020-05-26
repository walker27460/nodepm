"use strict"
var express = require("express")
var app = express()
const port = Number(process.env.PORT) || 3002
var fs = require("fs")
var packagesdir = "./packages/"

app.get("/packages/:pn",(req, res) => {
  let pkg = `${packagesdir}/${req.params.pn}.json`
  fs.readFile(pkg,function(err, data) {
    if(err) {
      res.status(404).send("404")
      throw err
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})