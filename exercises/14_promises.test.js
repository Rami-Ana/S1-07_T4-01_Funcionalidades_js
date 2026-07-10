// Per a cada bloc then() o catch(), decideix si s'ha d'executar o no
// Si s'ha d'executar, indica quin valor rebrà a `result` o `error`
// Si no s'ha d'executar, descomenta la línia que llança l'error

const pickApple = (ripeness) => {
  // Retorna immediatament una promesa que eventualment serà resolta
  // o rebutjada cridant la funció corresponent.
  return new Promise((resolve, reject) => {
    // Fes alguna cosa asíncrona. Podria ser AJAX, utilitzant un timeout aquí.
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject(new Error('unripe apple'))
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}

test('14_promises-1: should resolve', () => {
  return pickApple('ripe')
    .then(
      result => {
        // comprova el valor resolt de la promesa
        expect(result).toBe('ripe apple')
      },
      error => {
        throw new Error("aquest bloc no s'hauria d'executar")
      },
    )
})

test('14_promises-2: should reject', () => {
  return pickApple('unripe')
    .then(
      result => {
        throw new Error("aquest bloc no s'hauria d'executar")
      },
      error => {
        // comprova el missatge de l’error rebutjat
        expect(error.message).toBe('unripe apple')
      },
    )
})

test('14_promises-3: errors can be caught', () => {
  return pickApple()
    .then(result => {
      throw new Error("aquest bloc no s'hauria d'executar")
    })
    .catch(error => {
      // comprova el missatge de l’error capturat
      expect(error.message).toBe('out of apples')
    })
})


