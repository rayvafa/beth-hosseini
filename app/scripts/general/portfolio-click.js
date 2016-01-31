console.log("Portfolio click init!");

$(".portfolio-item").click(function() {

  var $imageDiv = $(this);
  var imageDivStyle = $imageDiv[0].currentStyle || window.getComputedStyle($imageDiv[0], false);
  var imageUrl = imageDivStyle.backgroundImage.slice(4, -1).replace(/"/g, "");

  var imageTitle = $imageDiv.attr('data-headline');
  var imageText = $imageDiv.attr('data-text');
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
