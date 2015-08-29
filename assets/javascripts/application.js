$(function () {
  $("#content-grid").isotope({ filter: ".nill" });
  bindListeners();
  route();

  function urlHash () {
    return window.location.hash.replace('#','');
  };

  function route () {
    var hash = urlHash().split("/");

    if (hash[0] == "projects") {
      displayProjects(hash[1]);
    } else if (hash[0] == "information"){
      displayInformation();
    } else {
      window.location.hash = "projects";
      displayProjects();
    }
  };

  function displayProjects (filter) {
    hideFiltersNow();
    $("#filters-container").imagesLoaded(function () {
      showFilters();
    });

    var $grid = $("#content-grid").imagesLoaded(function () {
      $grid.isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: { columnWidth: ".grid-sizer" }
      });

      if (filter) {
        $("#content-grid").isotope({ filter: "." + filter });
      } else {
        $("#content-grid").isotope({ filter: ".project" });
      }
    });
  };

  function displayInformation () {
    $("#content-grid").isotope({ filter: ".information" });
    hideFilters();
  };

  function bindListeners () {
    $( window ).on("hashchange", function (event) {
      debugger;
      event.preventDefault();
      route();
    });

    $(".resume-preview-link").on("click", displayResume);

    $("#resume-preview").on("click", function (event) {
      hideResume();
    });
  };

  function showFilters () {
    $("#filters-container").show()
    $(".filters").show();
    $(".filter .logo, h4").show("blind");
  };

  function hideFilters () {
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
