
var vid = document.getElementsByTagName("video")[0];
function bda(){
    
    if(vid.paused){
        vid.play();
    }
    else{
        vid.pause();
    }

}

function zidfsot (e){
    
//     if (vid.muted == false){
//         (vid.muted= true)
//     }
//     else (vid.muted = false)
    vid.volume=e;
}

function zidflvideo(v){
    
    vid.playbackRate=v;
}

function reculer(){
    vid.currentTime=vid.currentTime-10;
    
}
function avancer(){
    vid.currentTime=vid.currentTime+25;
    
}

vid.addEventListener('timeupdate',function(){
    var asfer= document.getElementsByClassName("progress__filled")[0];
    var bar = vid.currentTime/vid.duration;
     asfer.style="flex-basis:"+ bar * 100 + "%"  ;
})

