const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const rocketsRoster = require('./routes/roster')
// mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/roster');







app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', rocketsRoster);




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(3000, () => {
	console.log("Yoooo");
});
