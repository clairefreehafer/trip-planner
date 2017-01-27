const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./place');


const Restaurants = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
  price: {
    //from 1-5, for how many $$$
    type: Sequelize.INTEGER
  }
});


module.exports = Restaurants;
