module.exports = function(req, res, next) {

	console.log("Authenticate: " , req.session.usuario);

	if(!req.session.usuario) {

		return res.redirect('/');

	}

	return next();

};