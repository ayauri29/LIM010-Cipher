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

document.getElementById("cipher").addEventListener("click",function(){
  const palabra = document.getElementById("myTexto").value.toUpperCase();
  const offset = parseInt(document.getElementById("offset").value);
  //console.log(offset);
  let cifrado = " ";
  for(var i=0; i<palabra.length; i++){
    let letra = palabra.charAt(i);
    if(letra != " "){
      let numLetra = palabra.charCodeAt(i);
      let nueva = ecuacionCifrado(numLetra,offset);
      cifrado += String.fromCharCode(nueva);
      console.log("offset" + offset);
      console.log(numLetra);
      console.log(nueva);
      console.log(cifrado);
    }else{
      cifrado+=" ";
    }
  }
  document.getElementById("resultado").innerHTML = cifrado;
});

document.getElementById("decipher").addEventListener("click",function(){
  const palabra = document.getElementById("myTexto").value.toUpperCase();
  const offset = parseInt(document.getElementById("offset").value);
  //console.log(offset);
  let cifrado = " ";
  for(var i=0; i<palabra.length; i++){
    let letra = palabra.charAt(i);
    if(letra != " "){
      let numLetra = palabra.charCodeAt(i);
      let nueva = ecuacionDescifrado(numLetra,offset);
      cifrado += String.fromCharCode(nueva);
      console.log("offset" + offset);
      console.log(numLetra);
      console.log(nueva);
      console.log(cifrado);
    }else{
      cifrado+=" ";
    }
  }
  document.getElementById("resultado").innerHTML = cifrado;
});

function ecuacionCifrado(letra, numero)
{
	return (letra-65+numero)%26+65
}

function ecuacionDescifrado(letra, numero)
{
	return (letra-65-numero)%26+65
}
