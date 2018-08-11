$(function(){
  var dodger = document.getElementById('dodger');
  // console.log(dodger.style.left);
  
  document.addEventListener('keydown', function(e){
    // console.log(e);
    if (e.key === 'ArrowLeft'){
      moveDodgerLeft();
    }
  })
  function moveDodgerLeft(){
    
    dodger.style.left = '300px';
  }
})