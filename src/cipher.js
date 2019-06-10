window.cipher = {
  encode: (offset, string) => {
    let cifrado = " ";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        if(letra == letra.toUpperCase()){
          let numLetra = string.charCodeAt(i);
          let nuevoNum = (numLetra-65+offset)%26+65;
          cifrado += String.fromCharCode(nuevoNum);
        }else if(letra == letra.toLowerCase()){
          let numLetra = string.charCodeAt(i);
          let nuevoNum = (numLetra-97+offset)%26+97;
          cifrado += String.fromCharCode(nuevoNum);
        }else{
          cifrado += letra;
        }
      }else{
        cifrado += " ";
      }
    }
    return cifrado;
  },

  decode: (offset, string) => {
    let desCifrado = " ";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
          let numLetra = string.charCodeAt(i);
          let nuevoNum = (numLetra-offset+65)%26+65;
          desCifrado += String.fromCharCode(nuevoNum);
      }else{
          desCifrado += " ";
      }
    }
    return desCifrado;
  }
};
