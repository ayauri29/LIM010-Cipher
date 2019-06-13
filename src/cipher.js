window.cipher = {
  encode: (offset, string) => {
    let cifrado = "";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        let numLetra = string.charCodeAt(i);
        if(numLetra>= 65 && numLetra<=90){
          cifrado += String.fromCharCode((numLetra-65+offset)%26+65);
        }
        if(numLetra >= 97 && numLetra <= 122){
          cifrado += String.fromCharCode((numLetra-97+offset)%26+97);
        }
        if(numLetra >= 48 && numLetra <= 57){
          cifrado += String.fromCharCode((numLetra-48+offset)%10+48);
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
        if(numLetra>= 65 && numLetra<=90){
          //2*26 porque recorre el abecedario 2 veces para descifrar
          desCifrado += String.fromCharCode((numLetra-65-offset+2*26)%26+65);
        }
        if (numLetra >= 97 && numLetra <= 122){
          desCifrado += String.fromCharCode((numLetra-97-offset+2*26)%26+97);
        }
        if(numLetra >= 48 && numLetra <= 57){
          desCifrado += String.fromCharCode((numLetra-48-offset+5*10)%10+48);
        }

      }else{
          desCifrado += " ";
      }
    }
    return desCifrado;
  }
};
