let main = function () {
  $('.btn').click(function() {
    let post = $('.todo-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.todo-box').val('');
    $('.counter').text('300');
    $('.btn').addClass('disabled');
  });

  $('.todo-box').keyup(function() {
    let postLength = $(this).val().length;
    let charactersLeft = 300 - postLength;
    $('.counter').text(charactersLeft);

    if(charactersLeft < 0) {
      $('.btn').addClass('disabled');
    }
    else if(charactersLeft == 300) {
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
//
//       // double click to disappear already one task
//       $(document).on('dbclick','newLi', function() {
//         $(this).toggleClass('strike').fadeOut('.slow');
//       });
//
//
//   $('.todo-box').focus(function() {
//     $(this).val('');
//   });
//
//   $('ol').sortable();
//

}

});

$(document).on('dbclick', '.ol', function() {
  $(this).toggleClass("scratch");
});


});




$(document).ready(main);
