var showMap = function() {
  $("button[data-target='.nav-collapse']").trigger('click');
  $("#map").css('position', 'static');
  $("#logo").hide();
  resizeMap();
};

var showLogo = function () {
  $("#map").hide();
  $("#logo").show();
};

var resizeMap = function() {
  // 50 is a magic constant to account for padding/margin -- temporary
  $("#map").height($(window).height() - $("#navbar").height() - 50);
};

// nav bar changes size dynamically over time; easiest to just update
// the map continually
setInterval(resizeMap, 200);

$(document).on("ready", function() {
  $(".js-map").on('click', showMap);
  $(".js-index").on('click', showLogo);
});
