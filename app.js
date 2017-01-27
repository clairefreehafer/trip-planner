const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const db = require('./models');
const router = require('./routes');

const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './public')));

app.use('/bootstrap', express.static(path.join(__dirname, './node_modules/bootstrap/dist')));

app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist')));

app.use('/', router);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.render('error', err);
});

db.sync().then(function () {
	console.log('Synced server!')
	app.listen(3000, function() {
		console.log('Server is listening on port 3000');
	});
});
