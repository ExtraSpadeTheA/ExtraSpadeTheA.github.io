function fade() {
    var content = document.getElementById("fadecontent");
    if (content.getBoundingClientRect().top < 528) {
        content.style.animation = "fadeIn 1s ";
        content.style.opacity = 1;
    } else if (content.getBoundingClientRect().top >= 528) {
        content.style.opacity = 0;
        content.style.animation = "fadeOut 1s ";
    }

}

function tohome() {
    var page = document.getElementById("home");
    page.style.animation = "none";
    setTimeout(() => {
        page.style.animation = "fadeIn 1s";
    }, 0);
}

function DNshift() {
    var shift = document.getElementById("rightmask");
    if (shift.style.opacity == 0) {
        shift.style.animation = "backIn 1s";
        shift.style.opacity = 1;
    } else if (shift.style.opacity == 1) {
        shift.style.animation = "backOut 1s";
        shift.style.opacity = 0;
    }

    var shift2 = document.getElementById("leftmask");
    if (shift2.style.opacity == 0) {
        shift2.style.animation = "backIn2 1s";
        shift2.style.opacity = 0.5;
    } else if (shift2.style.opacity == 0.5) {
        shift2.style.animation = "backOut2 1s";
        shift2.style.opacity = 0;
    }
}

function musicwindow() {
    var window = document.getElementById("music");
    if (window.style.opacity==0) {
        window.style.animation = "mwin 0.5s forwards";
        window.style.opacity=1;
    }else if(window.style.opacity==1){
        window.style.opacity=0;
        window.style.animation = "mwout 0.5s forwards";
    }

}