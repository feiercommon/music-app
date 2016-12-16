$(function () {

    //歌曲列表1
    var musics = [
        {path:'audio/周杰伦 - 菊花台 .mp3',name:'菊花台',artistan:'周杰伦',duration:'04:52',src:''},
        {path:'audio/庄心妍 - 走着走着就散了.mp3 ',name:'走着走着就散了',artistan:'宋冬野',duration:'04:13',src:''},
        {path:'audio/宋冬野 - 斑马,斑马.mp3',name:'斑马,斑马',artistan:'宋冬野',duration:'04:13',src:''},
        {path:'audio/薛之谦 - 丑八怪.mp3',name:'丑八怪',artistan:'薛之谦',duration:'04:13',src:''},
        {path:'audio/薛之谦 - 演员.mp3',name:'演员',artistan:'薛之谦',duration:'04:21',src:''}
    ];



//获取一系列对象
    var audios = $('#audio');
    var audio = $('audio').get(0);
    var play = $('.videobottom1 .play');
    var prev = $('.videobottom1 .prev');
    var next = $('.videobottom1 .next');
    var index = 0;
    var currentIndex = 0;

// 播放按钮
    play.on('click',function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    });

    audios.on('play',function(){
        play.addClass('icon-kaishi').removeClass("icon-kaishi1");
    });
    audios.on('pause',function(){
        play.removeClass('icon-kaishi').addClass('icon-kaishi1');
    });

// 在播放时调用时间函数
    audio.onplay = function(){
        $(this).triggerHandler('timeupdate');
    };

//上下首切歌
    next.on('click',function(){
        currentIndex ++;
        if(currentIndex>musics.length-1){
            currentIndex = 0;
        }
        audio.src = musics[currentIndex].path;
        audio.play();
    });
    prev.on('click',function(){
        currentIndex --;
        if(currentIndex<0){
            currentIndex=musics.length-1;
        }
        audio.src=musics[currentIndex].path;
        audio.play();
    });

//总时间
    audios.on('play',function () {
        $('.timebox .alltime').text(musics[currentIndex].duration);
    });

//时间条
    var time = $('.timebox');
    var Nowtime = $('.timebox .time');
    var Alltime = $('.timebox .alltime');
    var timeRegulate = $('.videoline1');
    var timeBar = $('.videoline1 .yinshen');
    var timeOp= $('.videoline1 .videocircles');

//获取时间函数
    function getTime(time){
        if(isNaN(time)){
            return '--:--';
        }
        var min=Math.floor(time/60);
        var sec=parseInt(time%60);
        if(sec<10){
            sec='0'+sec
        }
        if(min<10){
            min='0'+min
        }
        return min+':'+sec;
    }

//进度条
    audio.ontimeupdate=function () {
        Nowtime.text(getTime(audio.currentTime));
        timeOp.css({left:timeRegulate.width()*(audio.currentTime/audio.duration)});
        timeOp.on('click',false);
    };

    timeRegulate.on('click',function (e) {
        audio.currentTime = parseInt(audio.duration*(e.offsetX+timeOp.width()/2+4)/timeRegulate.width());
        audio.ontimeupdate=function () {
            Nowtime.text(getTime(audio.currentTime));
            timeBar.css({width:timeRegulate.width()*(audio.currentTime/audio.duration)});
            timeOp.css({left:timeRegulate.width()*(audio.currentTime/audio.duration)-timeOp.width()/2});
        };
    });

//拖动进度条
    timeOp.on('mousedown',function(e){
        e.preventDefault();
        $(document).on('mousemove',function(e){
            var ww=(e.pageX-timeOp.offsetX)/timeRegulate.width()*audio.duration;
            ww=ww>=audio.duration?audio.duration:ww;
            ww=ww<=0?0:ww;
            audio.currentTime=ww;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove');
            $(document).off('mouseup');
        });
    });

});