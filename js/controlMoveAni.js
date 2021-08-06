const ifBtnClick = document.querySelector(".btn");
let btnOnOff = 0;

ifBtnClick.addEventListener("click", ifClick);

function ifClick() {
  if (btnOnOff === 0) {
    ifBtnClick.classList.add("rightMoveCircle");
    ifBtnClick.classList.remove("leftMoveCircle");

    return btnOnOff++;
  } else if (btnOnOff === 1) {
    ifBtnClick.classList.toggle("rightMoveCircle");
    ifBtnClick.classList.toggle("leftMoveCircle");

    return --btnOnOff;
  }
}

//버튼을 눌렀을 때, 버튼 애니 따로, drawer 애니 따로 작동되게끔.
/*
if (ifBtnClick.classList.contains('rightMoveCircle')) {
  ifBtnClick.classList.toggle("rightMoveCircle");
  ifBtnClick.classList.toggle("leftMoveCircle");
} else {
    ifBtnClick.classList.add("rightMoveCircle");
    ifBtnClick.classList.remove("leftMoveCircle");
}    이렇게하면 btnOnOff없어도 돌아가지않을까
*/

// 아니면? css의 애니메이션을 바로 js에서 실행할 순 없을까..?
