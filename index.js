$(function(){
  var dodger = document.getElementById('dodger');
  // console.log(dodger.style.left);
  
  document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft'){
      moveDodgerLeft();
    }
    if (e.key === 'ArrowRight'){
      moveDodgerRight();
    }
  })
  
  function moveDodgerLeft(){
    var currentPosition = parseInt(dodger.style.left);
    if (currentPosition > 0){
      dodger.style.left = `${currentPosition - 10}px`;
    }
  }
  
  function moveDodgerRight(){
    var currentPosition = parseInt(dodger.style.left);
    if (currentPosition > 0){
      dodger.style.left = `${currentPosition + 10}px`;
    }
  }
})