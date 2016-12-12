$(function() {
    function resise(designSize, type) {
        var type = type || "x";
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (type == "x") {
            var scale = width / designSize * 100 + "px";
        } else if (type == "y") {
            var scale = height / designSize * 100 + "px";
        }
        document.getElementsByTagName("html")[0].style.fontSize = scale;
    }

    resise(1334, "y");
    var mySwiper = new Swiper ('.swiper-container', {

        // 如果需要分页器
        pagination: '.swiper-pagination'
    })

})