
var bgmusic = new Audio("FF7loop.mp3");

var select_mp3 = new Audio("Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Move.mp3"); 

var back_mp3 = new Audio("Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Back.mp3");

var confirm_mp3 = new Audio("Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Ready.mp3");

var cancel_mp3 = new Audio("Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Error.mp3");

select_mp3.preload = "auto";
back_mp3.preload = "auto";
confirm_mp3.preload = "auto";
cancel_mp3.preload = "auto";
bgmusic.autoplay = "true";

$(document).ready(function() {
    
    $(".menuBtn").on("click", function() {
        document.getElementById("Move").play();
  });
    
    $(".backBtn").on("click", function() {
        document.getElementById("Back").play();
    })
    
});

function muteBGM() 
{
    if(bgmusic.muted)
        {
            bgmusic.muted = false;
        }
    else{
        bgmusic.muted = true;
    }
    console.log("IRAN");
}