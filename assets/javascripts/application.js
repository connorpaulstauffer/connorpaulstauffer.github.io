$(function () {
  $("#content-grid").isotope({ filter: ".nill" });
  hideFiltersNow();
  bindListeners();
  initializeIsotope();
  route();

  function urlHash () {
    return window.location.hash.replace('#','');
  };

  function route () {
    window.currentPage = window.currentPage || null;
    var hash = urlHash().split("/");

    if (hash[0] == "projects") {
      if (window.currentPage == "projects") {
        filterProjects(hash[1]);
      } else {
        displayProjects(hash[1]);
      }
      window.currentPage = "projects";
    } else if (hash[0] == "information"){
      displayInformation();
      window.currentPage = "information";
    } else {
      window.location.hash = "projects";
      displayProjects();
      window.currentPage = "projects";
    }
  };

  function initializeIsotope () {
    $("#content-grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: { columnWidth: ".grid-sizer" }
    });
  };

  function displayProjects (filter) {
    hideFiltersNow();
    $("#filters-container").imagesLoaded(function () {
      showFilters();
    });

    var $grid = $("#content-grid").imagesLoaded(function () {
      if (filter) {
        filterProjects(filter);
      } else {
        $grid.isotope({ filter: ".project" });
      }
    });
  };

  function filterProjects (filter) {
    if (filter) {
      $("#content-grid").isotope({ filter: "." + filter });
    } else {
      $("#content-grid").isotope({ filter: ".project" });
    }
  };

  function displayInformation () {
    hideFilters();
    var $grid = $("#content-grid").imagesLoaded(function () {
      $grid.isotope({ filter: ".information" });
    });
  };

  function bindListeners () {
    $( window ).on("hashchange", function (event) {
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
