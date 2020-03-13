var showIndex=0;
var playIndex=0;
var playbtn_timer,play_timer;
$(function () {
    playBtn_click();
})
function playBtn_click(){
    $(".playBtn").click(function () {
        var Index=$('.playBtn').index(this);
        var playBtn=$('.playBtn');
        var videoplay=$(".videoplay");
        if(videoplay[Index]!=null){
            if(videoplay[Index].paused){
                videoplay[playIndex].pause();
                videoplay[Index].play();
                playBtn[playIndex].innerHTML="<svg t=\"1570950763077\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1799\" width=\"200\" height=\"200\"><path d=\"M271.36 62.976l577.536 363.008c66.048 37.888 66.048 131.072 0 168.96L271.36 957.952c-66.048 37.888-149.504-9.728-149.504-84.48V147.456C122.88 72.704 205.312 25.088 271.36 62.976\" p-id=\"1800\" fill=\"#cdcdcd\"></path></svg>" ;
                playBtn[Index].innerHTML="<svg t=\"1570962294326\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2566\" width=\"200\" height=\"200\"><path d=\"M735.744 49.664c-51.2 0-96.256 44.544-96.256 95.744v733.184c0 51.2 45.056 95.744 96.256 95.744s96.256-44.544 96.256-95.744V145.408c0-51.2-45.056-95.744-96.256-95.744z m-447.488 0c-51.2 0-96.256 44.544-96.256 95.744v733.184c0 51.2 45.056 95.744 96.256 95.744S384 929.792 384 878.592V145.408c0-51.2-44.544-95.744-95.744-95.744z\" fill=\"#cdcdcd\" p-id=\"2567\"></path></svg>";
                playbtn_timer=setTimeout(function () {
                    playBtn[Index].innerHTML="";
                    playIndex=Index;
                },1000);
            }
            else{
                playBtn[Index].innerHTML="<svg t=\"1570950763077\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1799\" width=\"200\" height=\"200\"><path d=\"M271.36 62.976l577.536 363.008c66.048 37.888 66.048 131.072 0 168.96L271.36 957.952c-66.048 37.888-149.504-9.728-149.504-84.48V147.456C122.88 72.704 205.312 25.088 271.36 62.976\" p-id=\"1800\" fill=\"#cdcdcd\"></path></svg>" ;
                videoplay[Index].pause();
                clearTimeout(playbtn_timer);
                playIndex=Index;
            }
        }

    });
}


