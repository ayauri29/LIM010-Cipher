const start = document.getElementById("start");
const btnCipher = document.getElementById("btn-cipher");
const btnDecipher = document.getElementById("btn-decipher");
const btnCopy = document.getElementById("btn-copy");
const btnClean = document.getElementById("btn-clean")
let intentos = 3;

start.addEventListener("click", () => {

  const pass = document.getElementById("password").value;
  if (pass == "LABORATORIA") {
    ocultar();
  } else {
    if (intentos == 0) {
      document.getElementById("password").value = "";
      document.getElementById("incorrecto").innerHTML = "No te quedan más intentos.";
      document.getElementById("password").disabled = true;
    } else {
      intentos = intentos - 1;
      document.getElementById("password").value = "";
      document.getElementById("incorrecto").innerHTML = "Te quedan " + intentos + " intentos.";
    }
  }
});

let ocultar = () => {
  document.getElementById('login').classList.add('hide');
  document.getElementById('cifrado').classList.remove('hide');
  document.getElementById('footer').classList.remove('hide');
}

btnCipher.addEventListener("click", () => {
  const texto = document.getElementById("myTexto").value;
  const offSet = parseInt(document.getElementById("offset").value);
  const resultado = document.getElementById("resultado");
  const cifrado = cipher.encode(offSet, texto);
  resultado.value = cifrado;
});

btnDecipher.addEventListener("click", () => {
  const texto = document.getElementById("myTexto").value;
  const offSet = parseInt(document.getElementById("offset").value);
  const resultado = document.getElementById("resultado");
  const desCifrado = cipher.decode(offSet, texto);
  resultado.value = desCifrado;
});

btnCopy.addEventListener("click", () => {
  const copyText = document.getElementById("resultado");
  copyText.select();
  document.execCommand("copy");
});

btnClean.addEventListener("click", () => {
  document.getElementById("myTexto").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("offset").value = "";
});
