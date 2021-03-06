const express = require('express')
const app = express()


const teams = [
  {id: 1, name: "Atlanta Hawks", url: "http://www.nba.com/teams/hawks"},
  {id: 2, name: "Boston Celtics", url: "http://www.nba.com/teams/celtics"},
  {id: 3, name: "Brooklyn Nets", url: "http://www.nba.com/teams/nets"},
  {id: 4, name: "Charlotte Hornets", url: "http://www.nba.com/teams/hornets" },
  {id: 5, name: "Chicago Bulls", url: "http://www.nba.com/teams/bulls"},
  {id: 6, name: "Clevland Caveliers", url: "http://www.nba.com/teams/cavaliers"},
  {id: 7, name: "Dallas Mavericks", url:"http://www.nba.com/teams/mavericks"},
  {id: 8, name: "Denver Nuggets", url: "http://www.nba.com/teams/nuggets"},
  {id: 9, name: "Detroit Pistons", url: "http://www.nba.com/teams/pistons"},
  {id: 10, name: "Golden State Warriors", url: "http://www.nba.com/teams/warriors"},
  {id: 11, name: "Houston Rockets", url: "http://www.nba.com/teams/rockets"},
  {id: 12, name: "Indiana Pacers", url: "http://www.nba.com/teams/pacers"},
  {id: 13, name: "LA Clippers", url: "http://www.nba.com/teams/clippers"},
  {id: 14, name: "Los Angeles Lakers", url: "http://www.nba.com/teams/lakers"},
  {id: 15, name: "Memphis Grizzlies", url: "http://www.nba.com/teams/grizzlies"},
  {id: 16, name: "Miami Heat", url: "http://www.nba.com/teams/heat"},
  {id: 17, name: "Milwaukee Bucks", url: "http://www.nba.com/teams/bucks"},
  {id: 18, name: "Minnesota Timberwolves", url: "http://www.nba.com/teams/timberwolves"},
  {id: 19, name: "New Orleans Pelicans", url: "http://www.nba.com/teams/pelicans"},
  {id: 20, name: "New York Knicks", url: "http://www.nba.com/teams/knicks"},
  {id: 21, name: "Oklahoma City Thunder", url: "http://www.nba.com/teams/thunder"},
  {id: 22, name: "Orlando Magic", url: "http://www.nba.com/teams/magic"},
  {id: 23, name: "Philadelphia 76ers", url: "http://www.nba.com/teams/sixers"},
  {id: 24, name: "Phoenix Suns", url: "http://www.nba.com/teams/suns"},
  {id: 25, name: "Portland Trail Blazers", url: "http://www.nba.com/teams/blazers"},
  {id: 26, name: "Sacremento Kings", url: "http://www.nba.com/teams/kings"},
  {id: 27, name: "San Antonio Spurs", url: "http://www.nba.com/teams/spurs"},
  {id: 28, name: "Toronto Raptors", url: "http://www.nba.com/teams/raptors"},
  {id: 29, name: "Utah Jazz", url: "http://www.nba.com/teams/jazz"},
  {id: 30, name: "Washington Wizards", url: "http://www.nba.com/teams/wizards"}

]


const houstonRocketsRoster = [
  {id: 1, name: "Ryan-Anderson"},
  {id: 2, name: "Trevor Ariza"},
  {id: 3, name: "Tarik Black"},
  {id: 4, name: "Bobby Brown"},
  {id: 5, name: "Clint Capela"},
  {id: 6, name: "Eric Gordan"},
  {id: 7, name: "Gerald Green"},
  {id: 8, name: "James Harden"},
  {id: 9, name: "Demetrius Jackson"},
  {id: 10, name: "Luc Mbah a Moute"},
  {id: 11, name: "Nene"},
  {id: 12, name: "Chinanu Onuaku"},
  {id: 13, name: "Chris Paul"},
  {id: 14, name: "Zhou Qi"},
  {id: 15, name: "PJ Tucker"},
  {id: 16, name: "Briante Weber"},
  {id: 17, name: "Troy Williams"}
]

// Team's Stats

const rocketsStats = [
  {id: 1, name: "Ryan-Anderson", url: "http://www.nba.com/players/ryan/anderson/201583"},
  {id: 2, name: "Trevor Ariza", url: "http://www.nba.com/players/trevor/ariza/2772"},
  {id: 3, name: "Tarik Black", url:"http://www.nba.com/players/tarik/black/204028"},
  {id: 4, name: "Bobby Brown", url:"http://www.nba.com/players/bobby/brown/201628"},
  {id: 5, name: "Clint Capela", url:"http://www.nba.com/players/clint/capela/203991"},
  {id: 6, name: "Eric Gordan", url:"http://www.nba.com/players/eric/gordon/201569"},
  {id: 7, name: "Gerald Green", url:"http://www.nba.com/players/gerald/green/101123"},
  {id: 8, name: "James Harden", url:"http://www.nba.com/players/james/harden/201935"},
  {id: 9, name: "Demetrius Jackson", url:"http://www.nba.com/players/demetrius/jackson/1627743"},
  {id: 10, name: "Luc Mbah a Moute", url:"http://www.nba.com/players/luc/mbah_a_moute/201601"},
  {id: 11, name: "Nene", url:"http://www.nba.com/players/nene/2403"},
  {id: 12, name: "Chinanu Onuaku", url:"http://www.nba.com/players/chinanu/onuaku/1627778"},
  {id: 13, name: "Chris Paul", url:"http://www.nba.com/players/chris/paul/101108"},
  {id: 14, name: "Zhou Qi", url:"http://www.nba.com/players/zhou/qi/1627753"},
  {id: 15, name: "PJ Tucker", url:"http://www.nba.com/players/pj/tucker/200782"},
  {id: 16, name: "Briante Weber", url:"http://www.nba.com/players/briante/weber/1627362"},
  {id: 17, name: "Troy Williams", url:"http://www.nba.com/players/troy/williams/1627786"}
]









const jamesHardenStats = [
  {id: 1, name: "James Harden", url: "http://www.nba.com/players/james/harden/201935"}
]


// put get requests here
app.get('/teams/:id', (request, response) => {
  for (let i=0; i < teams.length; i++){
    if (teams[i].id == request.params.id) {
    response.send(teams[i]);
    }
}
response.send("404, Team not found");

});




// app.get('/teams/:id', (req, res) => res.send('Western or Eastern'))
// app.get('/teams/:id/Houston-Rockets', (req, res) => res.send('Houston Rockets'))




app.get('/teams/roster/:id', (request, response) => {

for (let i = 0; i < houstonRocketsRoster.length; i++) {
   let houstonRocketsRosterNames = houstonRocketsRoster[i].name.toLowerCase().split(' ').join('');
   if (Number(houstonRocketsRoster[i].id) === Number(request.params.id) || houstonRocketsRosterNames === (request.params.id).toLowerCase()) {
     return response.send(houstonRocketsRoster[i]);
   }
 }
 return response.send("This id does not exist in the system");
});




// app.get('/teams/:id/Houston-Rockets/players/:id', (req, res) => res.send('James Harden'))


app.get('/teams/HoustonRockets/players/stats/:id', (request, response) => {

  for (let i=0; i < rocketsStats.length; i++) {
    let houstonRocketsStats = rocketsStats[i].name.toLowerCase().split(' ').join('');
    if (Number(rocketsStats[i].id) === Number(request.params.id) || houstonRocketsStats === (request.params.id).toLowerCase()) {
      return response.send(rocketsStats[i]);
    }
  }
  return response.send('This Player isnt apart of clutch city');
});












app.get('/teams/:id/Houston-Rockets/players/:id/stats/:id', (req, res) => res.send(jamesHardenStats))









app.listen(3000, () => console.log('Go Rockets!'))
