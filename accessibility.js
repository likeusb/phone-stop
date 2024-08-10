// r.style.setProperty('--bg-prim', rgbValue);
document.addEventListener('DOMContentLoaded', function() {  
    var button1 = document.getElementById('submit1');
    var r = document.querySelector(':root');

    button1.addEventListener('click', rgbValues);
    
    function rgbValues() {
        const rgb = document.getElementById('bg1');
        const rgbValue = rgb.value;

        const pickers = document.querySelectorAll("input.color");

        console.log(pickers);

        pickers.forEach((index) => console.log(index));
        
        // setCookie('--bg-prim', values);
    }
    
});

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    



    document.cookie = "name="+name+"; value="+value+"; expires="+date+";";
}