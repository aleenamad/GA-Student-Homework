// let postThis = function () {
//   $('#post').html("Thanks!");
// };
//
// $('button').on("click", () => {
// postThis();
// })

// let areaToPost = $('postingArea');
// areaToPost.name = "myTarget";



let main = function () {
  $('.btn').click(function() {
    let post = $('.comment-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.comment-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled');
  });

  $('.comment-box').keyup(function() {
    let postLength = $(this).val().length;
    let charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);

    if(charactersLeft < 0) {
      $('.btn').addClass('disabled');
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });

$('.btn').addClass('disabled');

}


// put tasks in proper order
$(document).ready(function($){
  $('form').submit(function() {
    if ($('.todo-box').val() !== '') {
      let newTask = $('.todo-box').val();
      let newLi = $('<li>' + newTask + '</li>');
      newLi.on('click', function() {
        $(this).remove();
      });
      $('ol').prepend(newLi); // to put the new task on top
      $('.todo-box').val('');
      return false;
    }
  });


  });

$(document).ready(main);
