$(function () {

    $("#contact-left").click(function (e) {
        $(".contact-overlay-left").addClass("active-left")
    });

    $(document).click(function (e) {

        var subject = $("#contact-left");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $(".contact-overlay-left").removeClass("active-left");
        }

    });

    $("#contact-right").click(function (e) {
        $(".contact-overlay-right").addClass("active-right")
    });

    $(document).click(function (e) {

        var subject = $("#contact-right");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $(".contact-overlay-right").removeClass("active-right");
        }

    });

    $("#contact-top").click(function (e) {
        $(".contact-overlay-top").addClass("active-top")
    });

    $(document).click(function (e) {

        var subject = $("#contact-top");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $(".contact-overlay-top").removeClass("active-top");
        }

    });

    $("#contact-bottom").click(function (e) {
        $(".contact-overlay-bottom").addClass("active-bottom")
    });

    $(document).click(function (e) {

        var subject = $("#contact-bottom");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $(".contact-overlay-bottom").removeClass("active-bottom");
        }

    });

});