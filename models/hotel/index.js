const Sequelize = require('sequelize');
const db = require('../models');
const Hotel = db.define('hotel', {
	address: {
		name: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	num_start: {
		type: Sequelize.STRING
	},
	amenities: {
		type: Sequelize.STRING
	}
});
