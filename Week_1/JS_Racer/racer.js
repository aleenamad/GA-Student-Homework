// calling on the document and listen to key presses
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
})

// handling key presses
function handleKeyPress (e) {
  if (e.which == 39) {
    movePlayer(1)
  }
// right arrow key
  if (e.which == 68) {
    movePlayer(2)
  }
}
// "d" key
// moving the players
function movePlayer (playerInt) {
  let row = document.getElementById('player' + playerInt + '_lane');
  let cell = document.getElementsByClassName('active' + playerInt);
  function movePlayer (playerInt) {

  let nextCell = row.cells[cell[0].cellIndex + 1];
  let cell = td;

  checkForVictory(nextCell, playerInt)

}
{
  cell[0].className = ''
  nextCell.className = 'active' + playerInt
}
}

function checkForVictory (nextCell, playerInt) {
  if (nextCell === undefined) {
    alert('Player ' + playerInt + ' wins!')
    window.location.reload()
  }
}
