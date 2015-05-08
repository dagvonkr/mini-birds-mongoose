var Sighting = require('../models/Sighting'); // gonna get the model with the data thats there

module.exports = {

	create: function(req, res) {
		// res.send('hellååå');

		var newSighting = new Sighting(req.body);
		// were saving an instance of the model thats comming in
		newSighting.save(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	read: function(req, res) {
		// res.send('read hellååå');
		// DOES NOT WORK:
		Sighting.find(req.query) // you'll determine the query in the url
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
			    res.send(result);
			}
		});
	},

	update: function(req, res) {
		// res.send('update hellååå');
		Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
			    res.send(result);
			}
		});
	},

	delete: function(req, res) {
		Sighting.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(result);
			}
		});
	}

};