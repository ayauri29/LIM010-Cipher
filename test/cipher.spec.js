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
  });
});
