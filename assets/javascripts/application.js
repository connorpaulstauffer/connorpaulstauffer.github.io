$(function () {
  $("#content-grid").isotope({ filter: ".project" });

  var $grid = $("#content-grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer"
      }
  });

  $grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
  });

  $("#projects-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".project" });
  });

  $("#information-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".information" });
  });
});
