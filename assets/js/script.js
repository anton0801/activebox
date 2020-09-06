$(function () {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();

        let elemId = $(this).data("scroll"),
            blockOffset = $(elemId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        });
    });

});