const closeBtn = document.querySelector(".close-btn");
    const navLinkTag = document.querySelector(".navIcons");
    const menuTag = document.querySelector(".menubar");
    closeBtn.addEventListener("click",() => {
        navLinkTag.style.right = "-220px";
    })
    menuTag.addEventListener("click",() => {
        navLinkTag.style.right = "0px";
    })

// For countdown

const daysTag = document.getElementById("days");
    const hoursTag = document.getElementById("hours");
    const minutesTag = document.getElementById("mins");
    const secondsTag = document.getElementById("secs");
    const dTag = document.getElementById("d");
    const hTag = document.getElementById("h");
    const mTag = document.getElementById("m");
    const sTag = document.getElementById("s");

    // The data/time we want to countdown to
    var countDownDate = new Date("Feb 25, 2023 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    daysTag.innerHTML = days;
    daysTag.classList.add("timeBackground");
    dTag.innerHTML = "d";

    hoursTag.innerHTML = hours;
    hoursTag.classList.add("timeBackground");
    hTag.innerHTML = "h";

    minutesTag.innerHTML = minutes;
    minutesTag.classList.add("timeBackground");
    mTag.innerHTML = "m";

    secondsTag.innerHTML = seconds;
    secondsTag.classList.add("timeBackground");
    sTag.innerHTML = "s Left!";
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);