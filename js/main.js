$(function () {
  var mapShown = false;

  var resizeMap = function () {
    if (mapShown) {
      // 50 is a magic constant to account for padding/margin -- temporary
      $('#map').height($(window).height() - $('#navbar').height() - 50);
    } else {
      $('#map').hide();
    }
  };

  var showMap = function (evt) {
    evt.preventDefault();
    mapShown = true;
    $('#navbtn').trigger('click');
    $('#map').css('position', 'static').show();
    $('#logo').hide();
    resizeMap();
  };

  var showLogo = function (evt) {
    evt.preventDefault();
    mapShown = false;
    $('#map').hide();
    $('#logo').show();
  };

  // nav bar changes size dynamically over time; easiest to just update
  // the map continually
  setInterval(resizeMap, 200);

  $('#js-map').on('click', showMap);
  $('#js-index').on('click', showLogo);
});
