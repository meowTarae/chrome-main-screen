                            
const switch = document.querySelector(".switch");
let switchNumber = 0;

switch.addEventListener("click", ifClick);

function ifClick() {
  if (switchNumber === 0) {
    switch.classList.add("rightMove");
    switch.classList.remove("leftMove");
    return switchNumber++;
  } else if (switchNumber === 1) {
    switch.classList.toggle("rightMove");
    switch.classList.toggle("leftMove");
    return --switchNumber;
  }
}
