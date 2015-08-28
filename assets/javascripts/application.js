$(function () {
  $(".resume-preview-link").on("click", displayResume);

  $("#resume-preview").on("click", function (event) {
    hideResume();
  });

  $("#content-grid").isotope({ filter: ".nill" });
  hideFiltersNow();

  var $grid = $("#content-grid").imagesLoaded(function () {
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: { columnWidth: ".grid-sizer" }
    });

    $("#content-grid").isotope({ filter: ".project" });
  });

  $("#filters-container").imagesLoaded(function () {
    showFilters();
  });

  $("#projects-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".project" });
    showFilters();
  });

  $("#information-button").on("click", function () {
    $("#content-grid").isotope({ filter: ".information" });
    hideFilters();
  });

  $(".filter").on("click", function (event) {
    var selector = "." + $(event.currentTarget).attr("id");
    // did this to avoid lack of activity when a filter doesn't change anything
    $("#content-grid").isotope("shuffle");
    $("#content-grid").isotope({ filter: selector });
  });

  function showFilters() {
    $("#filters-container").show()
    $(".filters").show();
    $(".filter .logo, h4").show("blind");
  };

  function hideFilters() {
    $(".filter .logo, h4").hide("scale", {
      complete: function () {
        $(".filters").hide()
        $("#filters-container").hide()
      }
    }, 200)
  };

  function hideFiltersNow () {
    $("#filters-container").hide()
    $(".filters").hide();
    $(".filter .logo, h4").hide();
  };

  function displayResume () {
    $("#resume-preview").removeClass("hidden");
    
    var keyInterval = $( window ).on("keydown", function (event) {
      if (event.which == 27) {
        hideResume();
        clearInterval(keyInterval);
      }
    });
  };

  function hideResume () {
    $("#resume-preview").addClass("hidden");
  };
});
