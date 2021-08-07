const leftBtn = document.querySelector(".left-sideBar .btn");
const leftDrawer = document.querySelector(".left-sideBar:not(.btn)");


function ifLeftBtnClick() {  
  if (leftBtn.classList.contains("leftMoveCircle") === true) {
    leftBtn.classList.toggle("leftMoveCircle");
    leftBtn.classList.toggle("rightMoveCircle");
    leftDrawer.classList.toggle("leftMoveDrawer");
    leftDrawer.classList.toggle("rightMoveDrawer");
  }  else if (leftBtn.classList.contains("leftMoveCircle") === false) {
    leftBtn.classList.add("leftMoveCircle");
    leftBtn.classList.remove("rightMoveCircle");
    leftDrawer.classList.add("leftMoveDrawer");
    leftDrawer.classList.remove("rightMoveDrawer");
  } 
} leftBtn.addEventListener("click", ifLeftBtnClick);

