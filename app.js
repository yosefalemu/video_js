const btn = document.querySelector(".swich-btn");
const video = document.querySelector(".video-container");
const preloder = document.querySelector(".preloader");

btn.addEventListener("click", function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide");
        video.play();
    }
});

window.addEventListener("load", function(){
    preloder.classList.add("hide-pre-loader");
});