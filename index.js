$(function(){
  var dodger = document.getElementById('dodger');
  // console.log(dodger.style.left);
  
  document.addEventListener('keydown', function(e){
    if (e.key === 'left'){
      moveDodgerLeft();
    }
  })
  function moveDodgerLeft(){
    
    dodger.style.left = '300px';
  }
})