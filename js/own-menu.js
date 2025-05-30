/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

(function ($, window, document, undefined) {
  $.fn.doubleTapToGo = function (params) {
    if (
      !("ontouchstart" in window) &&
      !navigator.msMaxTouchPoints &&
      !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
    )
      return false;

    this.each(function () {
      var curItem = false;
      $(this).on("click", function (e) {
        var item = $(this);
        if (item[0] != curItem[0]) {
          e.preventDefault();
          curItem = item;
        }
      });
      $(document).on("click touchstart MSPointerDown", function (e) {
        var resetItem = true,
          parents = $(e.target).parents();

        for (var i = 0; i < parents.length; i++)
          if (parents[i] == curItem[0]) resetItem = false;
        if (resetItem) curItem = false;
      });
    });
    return this;
  };
})(jQuery, window, document);

/*-----------------------------------------------------------------------------------
    HOME SIMPLE TEXT SLIDER
/*-----------------------------------------------------------------------------------*/
function MenuExpander() {
  $(".menu-toggle").click(function () {
    $("nav > ul").toggle();
  });
}
$(document).ready(function () {
  MenuExpander();
  $("nav li:has(ul)").addClass("sub-menu");
  $(".sub-menu > a").doubleTapToGo();
});
