var r = document.querySelector(':root');
// r.style.setProperty('--bg-prim', rgbValue);
// document.cookie = "--bg-prim=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax;";
document.addEventListener('DOMContentLoaded', function() {  
    var submit = document.getElementById('submit');
    var reset = document.getElementById('reset');

    var lightMode = document.getElementById('lightMode');
    var grayMode = document.getElementById('grayMode');

    submit.addEventListener('click', rgbValues);

    reset.addEventListener('click', function() {
        updateThemeSpecific('rgb(0, 0, 0)', 'rgb(20, 20, 20)', 'rgb(40, 40, 40)', 'rgb(87, 87, 87)', 'white', 'rgb(50, 115, 255)', 'rgb(255, 0, 0)');
    });

    lightMode.addEventListener('click', function() {
        updateThemeSpecific('white', 'rgb(240, 240, 240)', 'rgb(235, 235, 235)', 'rgb(185, 185, 185)', 'black', 'rgb(0, 59, 185)', 'rgb(255, 0, 0)');
    });

    grayMode.addEventListener('click', function() {
        updateThemeSpecific('rgb(30, 30, 30', 'rgb(20, 20, 20)', 'rgb(10, 10, 10)', 'rgb(121, 121, 121)', 'white', 'rgb(58, 119, 252)', 'rgb(255, 0, 0)');
    });
    
    function rgbValues() {
        const pickers = document.querySelectorAll("input.color");

        values = [pickers[0].value, pickers[1].value, pickers[2].value, pickers[3].value, pickers[4].value, pickers[5].value, pickers[6].value];

        setCookie('--bg-prim', values);

        updateTheme(values);
    }
});

function updateThemeSpecific(color1, color2, color3, color4, color5, color6, color7) {
    r.style.setProperty('--bg-prim', color1);
    r.style.setProperty('--bg-sec', color2);
    r.style.setProperty('--bg-tert', color3);
    r.style.setProperty('--border-prim', color4)
    r.style.setProperty('--fc-prim', color5);
    r.style.setProperty('--acc', color6);
    r.style.setProperty('--warn', color7);

    setCookie('--bg-prim', color1 + ',' + color2 + ',' + color3 + ',' + color4 + ',' + color5 + ',' + color6 + ',' + color7);
}

function updateTheme(values) {
    r.style.setProperty('--bg-prim', values[0]);
    r.style.setProperty('--bg-sec', values[1]);
    r.style.setProperty('--bg-tert', values[2]);
    r.style.setProperty('--border-prim', values[3]);
    r.style.setProperty('--fc-prim', values[4]);
    r.style.setProperty('--acc', values[5]);
    r.style.setProperty('--warn', values[6]);
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
    const theme = getCookie('--bg-prim').split(',');
    updateTheme(theme);
};