const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
    Let date = new Date();
    Let sec = date.getSeconds() / 60;
    Let min = date.getMinutes() / 60;
    Let hour = date.getHours() / 12;
    
    secDiv.style.Transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.Transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.Transform = "rotate(" + (hour * 360) + "deg)";
}

function myFunction() {
  alert("I am an alert box!");
}

window.onload = myFunction();