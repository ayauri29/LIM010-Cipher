let intentos = 3;
document.getElementById("start").addEventListener("click",function(){

  const pass=document.getElementById("password").value;
   if(pass=="LABORATORIA"){
     ocultar();
   }else{
    if(intentos==0)
    {
     document.getElementById("password").value = "";
     document.getElementById("incorrecto").innerHTML = "No te quedan mas intentos";
     document.getElementById("password").disabled = true;
    }else{
     intentos=intentos-1;
     document.getElementById("password").value = "";
     document.getElementById("incorrecto").innerHTML = "Te quedan "+intentos + " intentos";
    }
   }
});

function ocultar(){
  document.getElementById("password").classList.add("hide");
  document.getElementById("start").classList.add("hide");
  document.getElementById("myTexto").classList.replace("hide","show");
  document.getElementById("offset").classList.replace("hide","show");
  document.getElementById("cipher").classList.replace("hide","show");
  document.getElementById("decipher").classList.replace("hide","show");
  document.getElementById("form").classList.add("hide");
  document.getElementById("resultado").classList.replace("hide","show");
}
