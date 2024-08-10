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
        updateThemeSpecific('#000000', '#0f0f0f', '#282828', '#575757', 'white', '#3273ff', '#ff0000');
    });

    lightMode.addEventListener('click', function() {
        updateThemeSpecific('white', '#f0f0f0', '#ebebeb', '#b9b9b9', 'black', '#003bb9', '#ff0000');
    });

    grayMode.addEventListener('click', function() {
        updateThemeSpecific('#1e1e1e', '#141414', '#0a0a0a', '#797979', 'white', '#3a77fc', '#ff0000');
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
    console.log(theme);
};