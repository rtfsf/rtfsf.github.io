var showMap = function() {
  console.log("show map");
  $("#map").show();
  $("#logo").hide();
  resizeMap();
};

var showLogo = function () {
  console.log("show logo");
  $("#map").hide();
  $("#logo").show();
};

var resizeMap = function() {
  // 50 is a magic constant to account for padding/margin -- temporary
  $("#map").attr('height', $(document).height() - $("#navbar").height() - 50);
};

$(document).on("ready", resizeMap);
$(window).on("resize", resizeMap);

$(document).on("ready", function() {
  $(".js-map").on('click', showMap);
  $(".js-index").on('click', showLogo);
});
