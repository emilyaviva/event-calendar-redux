var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

var app = express()
var db

// Don't forget to set your environment variables!
var mongoURI = process.env.CALENDAR_MONGO_URI || 'mongodb://localhost:27017'
// Use 3000 as the server port by default
var port = process.env.CALENDAR_DATASERVER_PORT || 3000

app.use(bodyParser.json())
// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

app.get('/calendar', function (req, res) {
  // Show all events on a simple GET to the endpoint
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
      return console.error(err)
    }
    console.log('saved new event ' + req.body.name + ' to database')
    // Send the client a success message including the new event's ID
    res.json({ success: true, _id: result.insertedId })
  })
})

app.delete('/calendar/:id', function (req, res) {
  db.collection('events').findOneAndDelete({ _id: ObjectID(req.params.id) }, function (err, result) {
    if (err) {
      return console.error(err)
    }
    console.log('deleted event id ' + req.params.id)
    res.json(result)
  })
})

app.put('/calendar/:id', function (req, res) {
  db.collection('events').replaceOne({ _id: ObjectID(req.params.id) }, req.body, function (err, result) {
    if (err) {
      return console.error(err)
    }
    console.log('updated event id ' + req.params.id)
    res.json({ success: true, _id: result.insertedId })
  })
})

MongoClient.connect(mongoURI, function (err, database) {
  if (err) {
    return console.error(err)
  }
  db = database
  console.log('Connected to MongoDB')
  app.listen(port, function () {
    console.log('Server listening on port 3000')
  })
})
