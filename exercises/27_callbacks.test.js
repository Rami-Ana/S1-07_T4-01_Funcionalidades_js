import { jest } from '@jest/globals' //para activar jest 



test('27_callbacks-2: Callbacks with mathematical operations - calculator', () => {
  // Crea una funció 'calculator' que accepti dos números i una funció callback
  // La funció ha d'invocar el callback amb els dos números com a paràmetres

  const calculator = (a, b, callback) => {
    return callback (a, b)
  }

  const sum = (a, b) => a + b
  const result = calculator(3, 4, sum)

  expect(result).toBe(7)
})

test('27_callbacks-3: Callbacks in asynchronous functions - wait and greet', (done) => {
  // Crea una funció 'waitAndGreet' que accepti un nom i un callback
  // La funció ha d'esperar 2 segons (usa setTimeout) i després invocar el callback amb el nom

  const waitAndGreet = (name, callback) => {
    setTimeout(()=> {
      callback(name)}, 2000) //setTimeout espera 2000 ms. = 2 sec
  }

  const startTime = Date.now()

  waitAndGreet('Maria', (name) => { //test(nombre, funcionDelTest, timeout)
    const elapsed = Date.now() - startTime
    expect(name).toBe('Maria')
    expect(elapsed).toBeGreaterThanOrEqual(1900) // Tolerància de 100ms
    expect(elapsed).toBeLessThan(2500)
    done()
  })
}, 3000) // Timeout: Jest esperará como máximo 3000 milisegundos (3 segundos)

test('27_callbacks-4: Callbacks with arrays - process elements', () => {
  // Crea una funció 'processElements' que accepti un array i un callback
  // La funció ha d'invocar el callback per cada element de l'array

  const processElements = (elements, callback) => {
  elements.forEach((element) => { //forEach para recorrer el array y llamar al callback con cada elemento.
  // for (const element of elements) { /*Igual de valido que forEach*/
  callback(element)
   })
  }

  const elements = ['a', 'b', 'c']
  const results = []

  processElements(elements, (element) => {
    results.push(element.toUpperCase())
  })

  expect(results).toEqual(['A', 'B', 'C'])
})

test('27_callbacks-5: Process string with callback - transform to uppercase', (done) => {
  // Crea una funció 'processString' que accepti una cadena i un callback
  // La funció ha de convertir la cadena a majúscules i després invocar el callback
  // amb la cadena transformada

  const processString = (string, callback) => {
    const transformedString = string.toUpperCase()
    callback (transformedString)
  }

  processString('hola món', (transformedString) => {
    expect(transformedString).toBe('HOLA MÓN')
    done()
  })
})


test('27_callbacks-6: Chained callbacks - multiple transformations', () => {
  // Crea funcions que demostrin callbacks encadenats
  // Primer duplica un número, després suma 10, finalment mostra el resultat

  const double = (num, callback) => {
    const result0 = num * 2
    callback (result0)
  }

  const addTen = (num, callback) => {
    const result0 = num + 10
        callback (result0)
  }

  let finalResult //crea una variable pero sin darle ningún valor todavía (undefined)

  double(5, (result1) => {
    addTen(result1, (result2) => {
      finalResult = result2
    })
  })

  expect(finalResult).toBe(20) // (5 * 2) + 10 = 20
})