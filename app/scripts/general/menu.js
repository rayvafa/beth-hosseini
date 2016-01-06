$(".nav.navbar-nav a").click(function() {
  $('.navbar-toggle').click();

  ga('send', {
    hitType: 'event',
    eventCategory: 'menu',
    eventAction: 'click',
    eventLabel: $(this).html()
  });
});
