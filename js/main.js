/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function ($) {
  "use strict";
  /*-----------------------------------------------------------------------------------*/
  /* 	FULL SCREEN
/*-----------------------------------------------------------------------------------*/
  $(".full-screen").superslides({});
  /*-----------------------------------------------------------------------------------*/
  /* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
  $(".texti-slide").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    navigation: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    pagination: true,
    animateOut: "fadeOut",
  });
  /*-----------------------------------------------------------------------------------*/
  /*    TESTI SLIDER 2
/*-----------------------------------------------------------------------------------*/
  $(".testi-slide").owlCarousel({
    loop: true,
    autoPlay: 6000, //Set AutoPlay to 6 seconds
    items: 1,
    margin: 10,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsiveClass: true,
    nav: true,
    animateOut: "fadeOut",
  });
  /*-----------------------------------------------------------------------------------*/
  /* 	FLEX SLIDER
/*-----------------------------------------------------------------------------------*/
  $(".flex-banner").flexslider({
    animation: "fade",
    slideshow: true, //Boolean: Animate slider automatically
    slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 500, //Integer: Set the speed of animations, in milliseconds
    autoPlay: true,
    pauseOnHover: true,
  });
  /*-----------------------------------------------------------------------------------*/
  /* 	FEATURED SLIDER 
/*-----------------------------------------------------------------------------------*/
  $(".founder-slide").owlCarousel({
    margin: 30,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    pagination: true,
    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
  /*-----------------------------------------------------------------------------------*/
  /* 	FEATURED SLIDER 
/*-----------------------------------------------------------------------------------*/
  $(".doct-list-style").owlCarousel({
    margin: 30,
    nav: true,
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    pagination: false,
    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  /*-----------------------------------------------------------------------------------*/
  /* 	SERVICES SLIDER 
/*-----------------------------------------------------------------------------------*/
  $(".services-slide").owlCarousel({
    margin: 30,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    pagination: true,
    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
  /*-----------------------------------------------------------------------------------*/
  /* 		Active Menu Item on Page Scroll
/*-----------------------------------------------------------------------------------*/
  $(".scroll a").click(function () {
    $("html, body").animate(
      { scrollTop: $(this.hash).offset().top - 80 },
      1500
    );
    return false;
  });
  /*-----------------------------------------------------------------------------------*/
  /*    DATE PICKER
/*-----------------------------------------------------------------------------------*/
  $("#datepicker").datepicker({
    inline: true,
  });
  /*-----------------------------------------------------------------------------------*/
  /* 		Parallax
/*-----------------------------------------------------------------------------------*/
  jQuery.stellar({
    horizontalScrolling: false,
    scrollProperty: "scroll",
    positionProperty: "position",
  });
  /*-----------------------------------------------------------------------------------*/
  /*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
  var $container = $(".time-table .doc-avai");
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: ".item-iso",
      layoutMode: "masonry",
    });
  });
  $(".filter li a").click(function () {
    $(".filter li a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
    });
    return false;
  });
});
/*-----------------------------------------------------------------------------------*/
/*    POPUP VIDEO
/*-----------------------------------------------------------------------------------*/
$(".popup-vedio").magnificPopup({
  type: "inline",
  fixedContentPos: false,
  fixedBgPos: true,
  overflowY: "auto",
  closeBtnInside: true,
  preloader: true,
  midClick: true,
  removalDelay: 300,
  mainClass: "my-mfp-slide-bottom",
});
$(".gallery-pop").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
      return item.el.attr("title") + "";
    },
  },
});
/*-----------------------------------------------------------------------------------*/
/* 	POPUP IMAGE GALLERY
/*-----------------------------------------------------------------------------------*/
$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
      return item.el.attr("title") + "";
    },
  },
});
/*-----------------------------------------------------------------------------------*/
/*  ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $(".portfolio-wrapper .items");
$container.imagesLoaded(function () {
  $container.isotope({
    itemSelector: ".item",
    layoutMode: "masonry",
  });
});
$(".filter li a").on("click", function () {
  $(".filter li a").removeClass("active");
  $(this).addClass("active");
  var selector = $(this).attr("data-filter");
  $container.isotope({
    filter: selector,
  });
  return false;
});

/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$(".progress-bars").waypoint(
  function () {
    $(".progress").each(function () {
      $(this)
        .find(".progress-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          1500
        );
    });
  },
  { offset: "100%", triggerOnce: true }
);
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input) {
  var pattern1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (pattern1.test(input)) {
    return true;
  } else {
    return false;
  }
}
function proceed() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var company = document.getElementById("company");
  var web = document.getElementById("website");
  var msg = document.getElementById("message");
  var errors = "";
  if (name.value == "") {
    name.className = "error";
    return false;
  } else if (email.value == "") {
    email.className = "error";
    return false;
  } else if (checkmail(email.value) == false) {
    alert("Please provide a valid email address.");
    return false;
  } else if (company.value == "") {
    company.className = "error";
    return false;
  } else if (web.value == "") {
    web.className = "error";
    return false;
  } else if (msg.value == "") {
    msg.className = "error";
    return false;
  } else {
    $.ajax({
      type: "POST",
      url: "php/submit.php",
      data: $("#contact_form").serialize(),
      success: function (msg) {
        //alert(msg);
        if (msg) {
          $("#contact_form").fadeOut(1000);
          $("#contact_message").fadeIn(1000);
          document.getElementById("contact_message");
          return true;
        }
      },
    });
  }
}
