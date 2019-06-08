window.cipher = {
  encode: (offset, string) => {
    let cifrado = " ";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        let numLetra = string.charCodeAt(i);
        let nuevoNum = (numLetra-65+offset)%26+65;
        cifrado += String.fromCharCode(nuevoNum);
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
