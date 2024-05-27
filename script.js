function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hours >= 12) {
        hours = (hours > 12) ? hours - 12 : 12;
        session = "PM";
    }

    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.querySelector("#Clock").innerText = time;
}

function showDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

   
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    let formattedDate = day + "/" + month + "/" + year;
    document.querySelector("#Date").innerText = formattedDate;
}

function countdownToNewYear() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1); 

    const totalSeconds = Math.floor((nextYear - now) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    const countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.querySelector("#Countdown").innerText = countdown;

    document.querySelector("#Remains2024").innerText = "Remains in 2024";
}

setInterval(showTime, 1000);
setInterval(showDate, 1000);
setInterval(countdownToNewYear, 1000);
