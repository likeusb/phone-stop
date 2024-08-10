// r.style.setProperty('--bg-prim', rgbValue);
document.addEventListener('DOMContentLoaded', function() {  
    var button1 = document.getElementById('submit1');
    var button2 = document.getElementById('retrieve');
    var button3 = document.getElementById('reset');
    var r = document.querySelector(':root');

    button1.addEventListener('click', rgbValues);

    button2.addEventListener('click', function() {
        console.log(getCookie('--bg-prim'));
    });

    
    
    function rgbValues() {
        const rgb = document.getElementById('bg1');

        const pickers = document.querySelectorAll("input.color");

        values = [pickers[0].value, pickers[1].value, pickers[2].value, pickers[3].value, pickers[4].value, pickers[5].value, pickers[6].value];

        setCookie('--bg-prim', values);

        r.style.setProperty('--bg-prim', values[0]);
        r.style.setProperty('--bg-sec', values[1]);
        r.style.setProperty('--bg-tert', values[2]);
        r.style.setProperty('--border-prim', values[3]);
        r.style.setProperty('--fc-prim', values[4]);
        r.style.setProperty('--acc', values[5]);
        r.style.setProperty('--warn', values[6]);
    }
    
});

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