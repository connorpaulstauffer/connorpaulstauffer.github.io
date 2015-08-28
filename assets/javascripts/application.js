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

    $(".filter .logo, h4").show();
    $("#filters-container").show()
    $(".filters").show("blind");
  });

  $("#information-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".information" });

    $(".filter .logo, h4").hide("scale", {
      complete: function () {
        $(".filters").hide()
        $("#filters-container").hide()
      }
    }, 200)
  });

  $(".filter").on("click", function (event) {
    var selector = "." + $(event.currentTarget).attr("id");
    $("#content-grid").isotope({ filter: selector });
  });
});
