const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./place');

const Hotels = db.define('hotel', {
		name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER
	},
	amenities: {
		type:Sequelize.TEXT
	}
});


module.exports = Hotels;
