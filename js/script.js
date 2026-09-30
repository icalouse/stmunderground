$(document).ready(function () {

    let iconAudio = document.createElement('audio');
    for (let i = 1; i < 6; i++) {
        iconAudio[i] = new Audio();
        iconAudio[i].src = "assets/sounds/sound_" + i + ".mp3";
    }
    $(".index01").click(function () {
        window.location.href = "navigation-en.html";
    });
    $(".bg-overlay").click(function () {
        $(".bg-overlay, .popup, .v2").css("display", "none");
        $(".icon-btn").css("filter", "none");
    });
    // $(".popup.v2").click(function () {
    //     $(".bg-overlay, .popup, .v2").css("display", "none");
    //     $(".icon-btn").css("filter", "none");
    // });
    $(".icon-btn").click(function () {
        $(this).css("filter", "invert(50%)");
        $(".popup").css("display", "none");
        $(".bg-overlay").css("display", "block");
    });
    $("#icon-1").click(function () {
        $("#popup-1").css("display", "block");
        iconAudio[1].play();
    });
    $("#icon-2").click(function () {
        $("#popup-2").css("display", "block");
        iconAudio[2].play();
    });
    $("#icon-3").click(function () {
        $("#popup-4").css("display", "block");
        iconAudio[3].play();
    });
    $("#icon-4").click(function () {
        $("#popup-3").css("display", "block");
        iconAudio[4].play();
    });
    $("#icon-5").click(function () {
        console.log("beep")
        $("#popup-5").css("display", "flex");
        iconAudio[5].play();
    });
});
