(function ($) {
    "use strict"; // Start of use strict

    $(".nav-link").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
        $(".navbar-collapse").collapse('hide');
    });

})(jQuery); // End of use strict