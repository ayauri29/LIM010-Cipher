const start = document.getElementById("start");
const btnCipher = document.getElementById("btn-cipher");
const btnDecipher = document.getElementById("btn-decipher");
let intentos = 3;

start.addEventListener("click", () =>{

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

let   ocultar = () => {
  document.getElementById("password").classList.add("hide");
  document.getElementById("start").classList.add("hide");
  document.getElementById("myTexto").classList.replace("hide","show");
  document.getElementById("offset").classList.replace("hide","show");
  document.getElementById("btn-cipher").classList.replace("hide","show");
  document.getElementById("btn-decipher").classList.replace("hide","show");
  document.getElementById("form").classList.add("hide");
  document.getElementById("resultado").classList.replace("hide","show");
}

btnCipher.addEventListener("click",() => {
  const texto = document.getElementById("myTexto").value;
  const offet = parseInt(document.getElementById("offset").value);
  const resultado = document.getElementById("resultado");
    const cifrado = cipher.encode(offet,texto);
  resultado.value = cifrado;
});

btnDecipher.addEventListener("click",() => {
  const texto = document.getElementById("myTexto");
  const offet = document.getElementById("offset");
  const resultado = document.getElementById("resultado");

  resultado.value = cipher.decode(offet.value,texto.value);
});
