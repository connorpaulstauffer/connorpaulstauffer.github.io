$(function () {
  $("#content-grid").isotope({ filter: ".nill" });

  var $grid = $("#content-grid").imagesLoaded(function () {
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: { columnWidth: ".grid-sizer" }
    });

    $("#content-grid").isotope({ filter: ".project" });
  });

  $("#projects-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".project" });
  });

  $("#information-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".information" });
  });

  $(".filter").on("click", function (event) {
    var selector = "." + $(event.currentTarget).attr("id");
    $("#content-grid").isotope({ filter: selector });
  });
});
