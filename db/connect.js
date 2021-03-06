var mongoose = require('mongoose'),
	db,
	env_url = {
		"test": "mongodb://localhost:27017/buy4me_test",
		"development": "mongodb://localhost:27017/buy4me",
		"remote_heroku": "mongodb://buy4meuser:a1b2c3d4e5@ds245337.mlab.com:45337/buy4me",
		"remote": "mongodb://buy4meuser:a1b2c3d4e5@ds245337.mlab.com:45337/buy4me"
	};

module.exports = () => {

	var url = env_url[process.env.DB_MODE];

	mongoose.connect(url, function (err, res) {

		if(err) {

			console.log ('ERROR connecting to: ' + url + '. ' + err);

		} else {

			console.log ('Succeeded connected to: ' + url);

		}

	});

	db = mongoose.connection;
	mongoose.Promise = global.Promise;

	return db;

};
