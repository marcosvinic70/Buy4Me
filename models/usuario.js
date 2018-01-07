module.exports = function(app) {

	var db = require('../db/connect')();
	var Schema = require('mongoose').Schema;

	var usuario = Schema({

		nome: { type: String, required: true },
		senha: { type: String, required: true },
		email: { type: String, required: true , index: {unique: true} }

	});

	return db.model('usuarios', usuario);

}