test('12_maps-1: has a map method', () => {
  // Crea un nou mapa anomenat 'myMap'
  // Afegeix una nova entrada. Utilitza 'name' com a clau i 'Aaron' com a valor
  const myMap = new Map();
  myMap.set('name', 'Aaron')


  expect(myMap.get('name')).toBe('Aaron')
})

test('12_maps-2: can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  // Crea un mapa anomenat 'myMap'
  const myMap = new Map();
  // Afegeix una nova entrada. Utilitza user com a clau i value com a valor
  myMap.set(user, value); //clave, valor, clave es objeto y no un texto
      

  expect(myMap.has(user)).toBe(true) //¿user existe?
  expect(myMap.get(user)).toBe(value) //¿que devuelve user?
})

test(`12_maps-3: doesn't coerce keys`, () => {
  const myMap = new Map()
  //.set(clave, valor)
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(undefined) //1 !== '1' = no encuentra `1`, solo 1
  
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe('Aaron') //'1' === '1' = value
})
