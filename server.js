var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Controllers
var SightingCtrl = require('./controllers/SightingCtrl'); // the . means that directory starts at the same level


var app = express();

// Middelware 

app.use(cors());
app.use(bodyParser.json());


// Endpoints

app.post('/sighting', SightingCtrl.create); // this is another file, so referencing the file in a controller instead of im the server
app.get('/sighting', SightingCtrl.read);
app.put('/sighting:id', SightingCtrl.update);
app.delete('/sighting:id', SightingCtrl.delete);

// connections
var port = 8888;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connect to mongoDB at', mongoUri);
});


app.listen(port, function() {
	console.log('listening toooa:', port)
})