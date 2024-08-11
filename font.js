var r = document.querySelector(':root');

addEventListener("DOMContentLoaded", (event) => {
    var submit = document.getElementById('submit');
    var reset = document.getElementById('reset');
    var select = document.getElementById('font');
    
    submit.addEventListener('click', function() {
        const fontValue = select.value;
        changeFont(fontValue);
    })

    reset.addEventListener('click', function() {
        resetFont();
    });
});

function changeFont(font) {
    if (font == "tnr") {
        r.style.fontFamily = "Times New Roman";
    } else

    if (font == "arl") {
        r.style.fontFamily = "Arial";
    } else

    if (font == "sys") {
        r.style.fontFamily = "system-ui";
    } else

    if (font == "rob") {
        r.style.fontFamily = "Roboto";
    } else

    if (font == "eah") {
        r.style.fontFamily = "Edu AU VIC WA NT Hand";
    }

    else {
        resetFont();
    }

    setCookie('fonts', font);
}

function resetFont() {
    r.style.fontFamily = "Raleway";

    setCookie('fonts', "Raleway")
}

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    
    document.cookie = name+"="+value+"; expires="+date+"; SameSite=Lax;";
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

window.onload = function() {
    const fontValue = getCookie('fonts');
    changeFont(fontValue);
};