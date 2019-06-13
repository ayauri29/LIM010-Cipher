describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "KROD FRPR HVWDV" para "HOLA COMO ESTAS" con offset 3', () => {
      assert.equal(cipher.encode(3,"HOLA COMO ESTAS"),"KROD FRPR HVWDV");
    });

    it('debería retornar "krod frpr hvwdv" para "hola como estas" con offset 3', () => {
      assert.equal(cipher.encode(3,"hola como estas"),"krod frpr hvwdv");
    });

    it('debería retornar "Krod Frpr Hvwdv" para "Hola Como Estas" con offset 3', () => {
      assert.equal(cipher.encode(3,"Hola Como Estas"),"Krod Frpr Hvwdv");
    });

    it('debería retornar "01" para "90" con offset 1', () => {
      assert.equal(cipher.encode(1,"90"),"01");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "HOLA COMO ESTAS" para "KROD FRPR HVWDV" con offset 3', () => {
      assert.equal(cipher.decode(3,"KROD FRPR HVWDV"),"HOLA COMO ESTAS");
    });

    it('debería retornar "hola como estas" para "krod frpr hvwdv" con offset 3', () => {
      assert.equal(cipher.decode(3,"krod frpr hvwdv"),"hola como estas");
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQrstuvwxyz" para "HIJKLMNOPQRSTUVWXyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXyzabcdefg"),"ABCDEFGHIJKLMNOPQrstuvwxyz");
    });
    it('debería retornar "90" para "23" con offset 33', () => {
      assert.equal(cipher.decode(33,"23"),"90");
    });
  });
});
