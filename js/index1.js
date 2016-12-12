$(function(){
    function resise(designSize,type) {
        var type= type || "x";
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if(type == "x"){
            var scale = width/designSize*100+"px";
        }else if(type == "y"){
            var scale = height/designSize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize = scale;
    }
    resise(750,"x");
    // var mySwiper = new Swiper ('.swiper-container', {
    //
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    //         swiperAnimateCache(swiper); //隐藏动画元素
    //         swiperAnimate(swiper); //初始化完成开始动画
    //     },
    //     onSlideChangeEnd: function(swiper){
    //         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    //     }
    // })

    var navXinwen = $("#navs .navbox .xinwen");
    navXinwen.on("click",function () {
        $(".navbox .item").removeClass("active");
        $(this).addClass("active");
        $(".list .menu").css("display","none");
        $("#index").css("display","block");
    });
    var navLuntan = $("#navs .navbox .luntan");
    navLuntan.on("click",function () {
        $(".navbox .item").removeClass("active");
        $(this).addClass("active");
        $(".list .menu").css("display","none");
        $("#fenlei").css("display","block");
    });
    var navXiaoxi = $("#navs .navbox .xiaoxi");
    navXiaoxi.on("click",function () {
        $(".navbox .item").removeClass("active");
        $(this).addClass("active");
        $(".list .menu").css("display","none");
        $("#mv").css("display","block");
    });
    var navWode = $("#navs .navbox .wode");
    navWode.on("click",function () {
        $(".navbox .item").removeClass("active");
        $(this).addClass("active");
        $(".list .menu").css("display","none");
        $("#mine").css("display","block");
    });
});