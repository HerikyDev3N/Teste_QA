const retornaNumero = require('./sum');

// Teste usando Jest
test('O retorno é númerico', () => {
  const resultado = retornaNumero();
  expect(typeof resultado).toBe('number');
});

