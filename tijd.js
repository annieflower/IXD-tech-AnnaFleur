// adding initial time classnames on load. css handles the timing.
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.getElementById("second-hand").className = "sh-" + seconds;
document.getElementById("minute-hand").className = "mh-" + minutes;
document.getElementById("hour-hand").className = "hh-" + hours;