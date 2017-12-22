var selectmp3 = new Audio();
selectmp3.src = "Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Move.mp3";
selectmp3.preload = 'auto';

var backmp3 = new Audio();
backmp3.src = "Sounds/Final%20Fantasy%20VII%20Sound%20Effects%20-%20Cursor%20Back.mp3";
backmp3.preload ='auto';

var tday = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock() {
    var d = new Date();
    var nday = d.getDay(),
        nmonth = d.getMonth(),
        ndate = d.getDate();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        nsec = d.getSeconds(),
        ap;

    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    }

    if (nmin <= 9) nmin = "0" + nmin;
    document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + " " + nhour + ":" + nmin + ap + "";
}

window.onload = function () {
    GetClock();
    setInterval(GetClock, 1000);

    var statFile = "stats.txt"

    var file = new File(statFile);

    var statTable = document.getElementById("stats");

    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 2; y++) {
            statTable.rows[x].cells[y].innerHTML = file.readln();
        }
    }
    file.close();
    alert("Load Succesful");
}

function openConsole(consoleName) {
    
    document.getElementById("main_console").style.display = "none";

    document.getElementById(consoleName).style.display = "block";
    
}

function goBack(consoleName) {
    document.getElementById("main_console").style.display = "block";

    document.getElementById(consoleName).style.display = "none";
    
    
}

