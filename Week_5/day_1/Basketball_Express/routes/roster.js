const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser')
const app = express();
const rocketsRosterArray = require('../models/roster');




router.get('/roster', function(req, res){
  res.render('roster/index', {rocketsRosterArray: rocketsRosterArray });
});



router.get('/roster/:id', function(req, res){
	console.log('getting by id')
	for (let i = 0; i < rocketsRosterArray.length; i++) {
		if (rocketsRosterArray[i].id == req.params.id) {
	      res.render('roster/show', {roster: rocketsRosterArray[i]});
		}
	}
});


// set up delete function
router.delete('/roster/:id', function(req,res) {
  for (let i=0; i <rocketsRosterArray.length; i++) {
    if(rocketsRosterArray[i].id == req.params.id) {
      rocketsRosterArray.splice(i, 1);
    }
  }
  res.redirect('/roster');
});


module.exports = router;
