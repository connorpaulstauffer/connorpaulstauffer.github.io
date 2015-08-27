$(function () {
  $("#content-grid").isotope({ filter: ".project" });

  $("#content-grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".grid-sizer"
    }
  });

  $("#projects-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".project" });
  });

  $("#information-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".information" });
  });
});
