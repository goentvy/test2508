$("#main-menu>li").mouseenter(function() {
    $(".sub_menu").stop().slideDown(500);
});

$("#main-menu>li").mouseleave(function() {
    $(".sub_menu").stop().slideUp(500);
});

var slide = $("#slideImage>img");
var slideCount = 0;
var endCount = slide.length - 1;

var timer = setInterval("autoSlide()", 2500);

function autoSlide() {
    $(slide[slideCount]).stop().animate(
        { top: "-300px" }, 1000, function () {
            $(this).css({ top: "300px" });
        }
    );
    slideCount++;
    if (slideCount > endCount) {
        slideCount = 0;
    }
    $(slide[slideCount]).stop().animate(
        { top: "0" }, 1000);
}

$(".notice_gallery_box>div").click(function (){
    const notice = $(".notice_box")[0];
    const gallery = $(".gallery_box")[0];

    if(this === notice) {
        $("#noticeContent").show();
        $("#galleryContent").hide();
        $("#noticeBox").css({ fontWeight: "700", backgroundColor: "black", color: "#fff" });
        $("#galleryBox").css({ fontWeight: "400", backgroundColor: "#CCCACA", color: "#000" });
    } else {
        $("#noticeContent").hide();
        $("#galleryContent").show();
        $("#noticeBox").css({ fontWeight: "400", backgroundColor: "#CCCACA", color: "#000" });
        $("#galleryBox").css({ fontWeight: "700", backgroundColor: "black", color: "#fff" });
    }
})