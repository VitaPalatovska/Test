function initMap() {
  // The location of Uluru
  var uluru = { lat: 49.839233, lng: 24.025175 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru
  });
  // The marker, positioned at Uluru
  var image = "../icons/pin.png";
  var beachMarker = new google.maps.Marker({
    position: { lat: 49.939233, lng: 24.025175 },
    map: map,
    icon: image
  });
}

//Navbar Animation On Scroll
(function() {
  let header = $("header");
  let win = $(window);
  let classShowMenu = "scroll-show-menu";
  let classHideMenu = "scroll-hide-menu";

  let prevScroll = win.scrollTop();

  $(window).on("scroll", function() {
    if (win.scrollTop() > 100) {
      let currentScroll = win.scrollTop();

      if (prevScroll > currentScroll) {
        if (header.hasClass(classHideMenu)) {
          header.removeClass(classHideMenu);
          header.addClass(classShowMenu);
        }
      } else {
        header.addClass(classHideMenu);
      }

      prevScroll = currentScroll;
    } else {
      if (header.hasClass(classShowMenu)) {
        header.removeClass(classShowMenu);
      } else if (header.hasClass(classHideMenu)) {
        header.removeClass(classHideMenu);
      }
    }
  });
})();
