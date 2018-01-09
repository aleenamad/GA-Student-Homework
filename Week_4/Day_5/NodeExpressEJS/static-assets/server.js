


const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();


//middleware
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.json());



app.listen(3000, () => {
    console.log("Yo Yo Yo");
});



app.get('/teams/HoustonRockets/players/stats/:id', (request, response) => {

  for (let i=0; i < rocketsStats.length; i++) {
    let houstonRocketsStats = rocketsStats[i].name.toLowerCase().split(' ').join('');
    if (Number(rocketsStats[i].id) === Number(request.params.id) || houstonRocketsStats === (request.params.id).toLowerCase()) {
      return response.send(rocketsStats[i]);
    }
  }
  return response.send('This Player isnt apart of clutch city');
});




app.get('*', (request, response) => {
  response.status(404).sendFile('404page.html', {root: 'public'});
});
