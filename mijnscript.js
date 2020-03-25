const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);


function updateClock(){
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour = date.getHours() / 12;
    
    secDiv.style.Transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.Transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.Transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();
//function myFunction() {
//  alert("I am an alert box!");
//}
//
//window.onload = myFunction();