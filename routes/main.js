module.exports = (app) => {

	var main = app.controllers.main;

	app.get('/', main.index);

	var usuarios = app.controllers.usuarios;

	app.post('/entrar', usuarios.login);
	app.get('/cadastro', usuarios.cadastro);
	app.post('/cadastrar', usuarios.cadastrar)
	app.get('/sair', usuarios.logout);

};