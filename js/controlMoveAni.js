const rightBtn = document.querySelector(".right-sideBar .btn");
const rightDrwaer = document.querySelector(".right-sideBar:not(.btn)");
// const RMC = document.querySelector(".rightMoveCircle");
// const LMC = document.querySelector(".leftMoveCircle");
// const RMD = document.querySelector(".rightMoveDrawer");
// const LMD = document.querySelector(".leftMoveDrawer");

function ifRightBtnClick() {  
  if (rightBtn.classList.contains("rightMoveCircle") === true) {
    rightBtn.classList.toggle("rightMoveCircle");
    rightBtn.classList.toggle("leftMoveCircle");
    rightDrwaer.classList.toggle("rightMoveDrawer");
    rightDrwaer.classList.toggle("leftMoveDrawer");
  }  else if (rightBtn.classList.contains("rightMoveCircle") === false) {
    rightBtn.classList.add("rightMoveCircle");
    rightBtn.classList.remove("leftMoveCircle");
    rightDrwaer.classList.add("rightMoveDrawer");
    rightDrwaer.classList.remove("leftMoveDrawer");
  } 
} rightBtn.addEventListener("click", ifRightBtnClick);

