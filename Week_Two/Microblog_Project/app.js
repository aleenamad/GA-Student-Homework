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

$(document).ready(main);
