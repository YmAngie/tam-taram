$(function () {
    $(".video-stepbystep__link").slice(0, 3).show();
    $("#loadMoreStepByStep").click(function (e) {
        e.preventDefault();
        $(".video-stepbystep__link:hidden").slice(0, 3).slideDown();
    });
});
