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
    $(".filter").addClass("active");
    $("#information-button").removeClass("active");
    $("#projects-button").addClass("active");
    hideFiltersNow();
    $("#filters-container").imagesLoaded(function () {
      showFilters("active");
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
      $(".filter").removeClass("active");
      $(".filter" + "#" + filter).addClass("active")
      $("#content-grid").isotope({ filter: "." + filter });
    } else {
      $(".filter").addClass("active");
      $("#content-grid").isotope({ filter: ".project" });
    }
  };

  function displayInformation () {
    $("#projects-button").removeClass("active");
    $("#information-button").addClass("active");
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
    $("#filters-container").show();
    recursiveShow($(".filter").first());
  };

  function recursiveShow (element) {
    setTimeout(function () {
      element.find(".logo").show("slide", 300);
      element.find("h4").show("slide", 300);
      var next = element.parent().next().find(".filter");
      if (next.length > 0) { recursiveShow(next) }
    }, 50)
  };

  function hideFilters () {
    $(".filter .logo, h4").hide("slide", {
      complete: function () {
        $(".filters").hide()
        $("#filters-container").hide()
      }
    }, 300)
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
