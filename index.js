$(function(){
  var dodger = document.getElementById('dodger');
  // console.log(dodger.style.left);
  moveDodgerLeft();
  
  function moveDodgerLeft(){
    var currentPosition = dodger.style.left
    console.log(currentPosition);
    currentPosition -= 10;
  }
})