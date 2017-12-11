// calling on the document and listen to key presses
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
})

// handling key presses
function handleKeyPress (e) {
  if (e.which == 81) {
    movePlayer(1)
  }

  if (e.which == 80) {
    movePlayer(2)
  }
}
