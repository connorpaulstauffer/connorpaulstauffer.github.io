$(function () {
  $("#content-grid").isotope({ filter: ".nill" });

  var $grid = $("#content-grid").imagesLoaded(function () {
    // setMasonrySize();

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

  // $( window ).on("resize", setMasonrySize);

  // function setMasonrySize() {
  //   var windowWidth = $( window ).width();
  //
  //   if (windowWidth > 1100) {
  //     $(".grid-sizer").css("width", "33.33%");
  //     $(".grid-item").css("width", "33.33%");
  //   } else if (windowWidth > 700) {
  //     $(".grid-sizer").css("width", "50%");
  //     $(".grid-item").css("width", "50%");
  //   } else {
  //     $(".grid-sizer").css("width", "100%");
  //     $(".grid-item").css("width", "100%");
  //   }
  //
  //   $("#content-grid").isotope({
  //     masonry: { columnWidth: ".grid-sizer" }
  //   });
  // };
});
