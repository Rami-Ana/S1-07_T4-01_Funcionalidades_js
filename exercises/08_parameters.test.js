test('08_parameters-1: can be triggered when the incoming argument is undefined', () => {
  const getName = (name = 'Mercury') => name

  // Comprova que el valor per defecte només s'utilitza quan l'argument és `undefined`
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName(undefined)).toBe('Mercury')
  expect(getName(null)).toBe(null)
  expect(getName()).toBe('Mercury')
})

  test('08_parameters-2: aren\'t included in arguments', () => {
function getName(name = 'Mercury') {
  return arguments.length;
}

  // Comprova que els paràmetres per defecte no formen part de l'objecte `arguments`
  expect(getName('Aaron')).toBe(1) //valor de lenght
  expect(getName(null)).toBe(1)
  expect(getName()).toBe(0)
})

test('08_parameters-3: can trigger a function call', () => {
  let triggerCount = 0

  const getName = (name = getDefault()) => name 
  //La constante contiene una función.
  //(name = getDefault()) -> Aquí se define el parámetro de la función.

  const getDefault = () => {
    triggerCount++
    return 'Mercury'
  }

  // Comprova que la funció per defecte només es crida quan és necessari
  expect(triggerCount).toBe(0)
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(triggerCount).toBe(2)
})

test('08_parameters-4: catch non-specified params', () => {
  //==CUANTOS ELEMENTOS HAY 
  const resty = (first, second, ...others) => others //other es un array donde se guardan demas argumentos
// first = primer argumento, (undefined: no recibe parametros)
// second = segundo argumento
// others = [todos los argumentos restantes]


// const f = (a, b, ...rest) => rest;
// Los 2 primeros argumentos se asignan en a y b = estos se encuentran en posición 0
// Todos los demás, sean números, undefined, null, objetos o cadenas = array rest.
// Su propiedad .length  es simplemente el número de argumentos que sobran después de los dos primeros.
// resty(  1,   2,      3,   4,   5 )   
//         ↓    ↓       ↓    ↓    ↓
//       first second  \___________/
//                         others
//                         [3,4,5]
  // Comprova que els paràmetres rest contenen els arguments no especificats
  expect(resty().length).toBe(0)
  expect(resty(1).length).toBe(0)
  expect(resty(1, 2).length).toBe(0)
  expect(resty(1, 2, 3).length).toBe(1)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,).toBe(8)
})

test('08_parameters-5: has a different length than `arguments`', () => {
  //==== COMPARA ...others con arguments
  // first = 1
  // second = 2
  // others = [3, 4]
  const resty = function (first, second, ...others) {
    return others.length === arguments.length //argument todos los argumentos que se pasaron a la función,))
  }

  // Comprova que la longitud dels paràmetres rest és diferent de `arguments`
  expect(resty()).toBe(true) // 0 === 0 (porque 1 y 2 son undefined)
  expect(resty(1)).toBe(false) // 0 === 1
  expect(resty(1, 2)).toBe(false) // 0 === 1
  expect(resty(1, 2, 3)).toBe(false) // 1 === 2
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toBe(false) // 8 === 10
})

test('08_parameters-6: is an actual array, unlike arguments', () => {
  const resty = (...args) => args //ARRAY REAL Ese args es un parámetro de la función. 

  const argy = function () { //OBJETO ESPECIAL
    return arguments
  }

  const args = argy(1, 2, 3) //NO ARRAY REAL Contiene argumentos Este args es otra variable completamente distinta. 
  const rests = resty(1, 2, 3)

  // Comprova que els paràmetres rest (`...args`) són un array real, a diferència de `arguments`.
  // Recorda que `arguments` només existeix en funcions tradicionals.
  expect(
    Object.getPrototypeOf(args) === Object.getPrototypeOf(rests),
  ).toBe(false)
// Objeto normal: persona → Object.prototype
// Array:         array   → Array.prototype → Object.prototype
  expect(args.splice).toBe(undefined)
  expect(Object.getPrototypeOf(rests)).toBe(Array.prototype)
  expect(rests.splice).toBeDefined() // comprueba rests.splice existe
  expect(rests.splice).toBe(Array.prototype.splice)
})

test('08_parameters-7: it can default all arguments, optionally', () => {
  // Modifica la signatura del mètode `myFunction` per permetre que
  // tots els arguments siguin opcionals

  const myFunction = ({ 
  name = 'Unknown',
  age = 0,
  favoriteBand = 'Unknown'
  } = {}) => { //{} Si no me pasan ningún objeto, utiliza un objeto vacío
    //{ name, age, favoriteBand } Es desestructuración de objetos
    expect(name).toBeDefined()
    expect(age).toBeDefined() 
    expect(favoriteBand).toBeDefined()
  // const myFunction = (person) => {
  // const name = person.name
  // const age = person.age
  // const favoriteBand = person.favoriteBand
  }

  myFunction({ name: 'Axel', age: 37, favoriteBand: 'Taylor Swift' })
  myFunction({ name: 'Axel', age: 37 })
  myFunction({ name: 'Axel' })
  myFunction({})
  myFunction()
})

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
