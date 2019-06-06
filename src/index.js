document.getElementById('start').classList.addEventListener("click",function(){
  const password = document.getElementById('password').value;

  if(password.localeCompare('LABORATORIA') == 0){
    alert('Son iguales')
  }
});
