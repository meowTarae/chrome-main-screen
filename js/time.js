const nowTime = document.querySelector(".nowTime");

function getNowTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const secs = String(date.getSeconds()).padStart(2, "0");
    nowTime.innerText = `${hours}:${mins}:${secs}`;
}

getNowTime();
setInterval(getNowTime, 1000);