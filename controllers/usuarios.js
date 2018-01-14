module.exports = (app) => {

	var path = require('path');
	var Usuario = app.models.usuario;

	var UsuariosController = {

		index: (req, res) => {

			res.sendFile(path.join(__dirname + '/../views/login.html'));

		},

		cadastro: (req, res) => {

			res.sendFile(path.join(__dirname + '/../views/cadastro.html'));

		},

		cadastrar: (req, res) => {

			var data = JSON.parse(req.body.usuario);
			var cadastrado = false;
			var usuario = new Usuario({

				nome: data.nome,
				email: data.email,
				senha: data.senha,
				curso: data.curso

			});

			usuario.save(function(err, user) {

				if (err) {

					console.error(err);
					res.send(err);

				} else {

					console.log("Usuario inserido com sucesso!");
					cadastrado = true;
					res.send(cadastrado);

				}

			});

		},

		login: (req, res) => {

			var data = JSON.parse(req.body.usuario);

			var query = {
				'login' : data.username,
				'senha' : data.senha
			};

			Usuario.findOne(query, 'login senha', (err, usuario) => {

				if(err) return handleError(err);

				if (usuario != null) {

					req.session.usuario = usuario;

					console.log("SESSION: ", req.session.usuario);

					res.send(usuario);

				} else {

					res.send(false);

				}

			});

		},

		logout: (req, res) => {

			req.session.destroy(erro => {

				if (erro) return next(erro);

			})

			res.redirect('/');

		}

	};

	return UsuariosController;

}