// creating a MODEL!

var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema ({
	name: { type: String, lowercase: true },
	order: { type: String, lowercase: true, maxlength: 20 }, // maxlength is just checking that theres not a bird name thats over 20 chars long 
	status: { 
		type: String, 
		lowercase: true,  
		enum: [
			'extinct',
			'extinct in the wild',
			'critically someth8bng',
			'something else',
			'completely',
			'least concern'	
		]
	},
	confirmed: { type: Boolean, default: false },
	numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema); // mkaes it a model, calling 'Sighting' and use SightingScheama schema 