var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

var app = express()
var db

app.use(bodyParser.json())

app.get('/calendar', function (req, res) {
  db.collection('events').find({}).toArray(function (err, result) {
    if (err) {
      return console.error(err)
    }
    console.log('A GET request was sent.')
    res.json(result)
  })
})

app.post('/calendar', function (req, res) {
  db.collection('events').insertOne(req.body, function (err, result) {
    if (err) {
      return console.log(err)
    }
    console.log('saved new event ' + req.body.name + ' to database')
    res.json('success')
  })
})

MongoClient.connect(process.env.CALENDAR_MONGO_URI, function (err, database) {
  if (err) {
    return console.error(err)
  }
  db = database
  console.log('Connected to MongoDB')
  app.listen(process.env.CALENDAR_DATASERVER_PORT || 3000, function () {
    console.log('Server listening on port 3000')
  })
})
