const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./place');


const Activities = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});



module.exports = Activities;
