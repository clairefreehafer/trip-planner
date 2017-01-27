const express = require('express');
const router = express.Router();
const db = require('../models');


const Sequelize = require('sequelize');
const Place = db.models.place; 
const Activity = db.models.activity; 
const Hotel = db.models.hotel; 
const Restaurant = db.models.restaurant; 

module.exports = router;

router.get('/', function(req, res, next) {


	Promise.all([
		Hotel.findAll(), 
		Restaurant.findAll(), 
		Activity.findAll() 
		])
		.then(function(results){
			res.render('index', {
				hotels: results[0], 
				restaurants: results[1], 
				activities: results[2] 
			});
		})
		.catch(next) 
});



