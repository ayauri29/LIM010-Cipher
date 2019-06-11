window.cipher = {
  encode: (offset, string) => {
    let cifrado = "";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        if(letra == letra.toUpperCase()){
          let numLetra = string.charCodeAt(i);
          cifrado += String.fromCharCode((numLetra-65+offset)%26+65);
        }else if(letra == letra.toLowerCase()){
          let numLetra = string.charCodeAt(i);
          cifrado += String.fromCharCode((numLetra-97+offset)%26+97);
        }
      }else{
        cifrado += " ";
      }
    }
    return cifrado;
  },

  decode: (offset, string) => {
    let desCifrado = "";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
          let numLetra = string.charCodeAt(i);
          desCifrado += String.fromCharCode((numLetra-offset+65)%26+65);
      }else{
          desCifrado += " ";
      }
    }
    return desCifrado;
  }
};
