module.exports = function(app) {

	var db = require('../db/connect')();
	var Schema = require('mongoose').Schema;
	// var Usuario = app.models.usuario;

	var produto = Schema({

		codigo: { type: String, required: true, index: {unique: true} },
		titulo: { type: String, required: true },
		descricao: { type: String, required: true },
		// fotos: { type: String, required: true },
		preco: { type: Number, required: true },
		precoComDesconto: { type: Number, required: false },
		precoComFrete: { type: Number, required: false },
		// dono: { type: Usuario, required: false },
		condicao: { type: Number, required: false },
		marca: { type: String, required: false },
		local: { type: String, required: true },
		cor: { type: String, required: false },
		tamanho: { type: String, required: true }

	});

	return db.model('produtos', produto);

}