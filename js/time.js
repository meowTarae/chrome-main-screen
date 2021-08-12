const nowTimeHourMinute = document.querySelector(".nowTime-HM");
const nowTimeAMPM = document.querySelector(".nowTime-AMPM");
const nowTimeSecond = document.querySelector(".nowTime-S");

function getNowTime() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const secs = String(date.getSeconds()).padStart(2, "0");

  if (date.getHours() >= 13) {
    hours = String(date.getHours() - 12).padStart(2, "0");
  }
  if (date.getHours() < 12) {
    nowTimeAMPM.innerText = `AM`;
  } else {
    nowTimeAMPM.innerText = `PM`;
  }
  nowTimeHourMinute.innerText = `${hours}:${mins}`;
  nowTimeSecond.innerText = `:${secs}`;
}

getNowTime();
setInterval(getNowTime, 1000);
