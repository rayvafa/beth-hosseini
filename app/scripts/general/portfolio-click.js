console.log("Portfolio click init!");

$(".portfolio-item").click(function() {

  var clickedImage = $(this).find("img");
  var imageUrl = clickedImage.attr('src');
  var imageTitle = clickedImage.attr('alt');
  var imageText = clickedImage.attr('data-text');
  $('.portfolio-modal .modal-body img').attr('src', imageUrl);
  if(imageTitle) {
    $('.portfolio-modal .modal-title').html(imageTitle);
  } else {
    $('.portfolio-modal .modal-title').html('');
  }
  if(imageText) {
    $('.portfolio-modal .modal-footer p').html(imageText);
  } else {
    $('.portfolio-modal .modal-footer p').html('');
  }

  ga('send', {
    hitType: 'event',
    eventCategory: 'portfolio',
    eventAction: 'click',
    eventLabel: imageTitle
  });

  $('#portfolio-modal').modal('show')
});
