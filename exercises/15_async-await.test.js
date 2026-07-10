// Els tests ja funcionen correctament utilitzant promeses amb `.then()` i `.catch()`.

// Refactoritza'ls utilitzant `async/await` mantenint exactament el mateix comportament i fent que els tests continuïn passant.

const doAsync = (rejectPromise = false) =>  new Promise((resolve, reject) => setTimeout(() => {
      const result = await doAsync() //no hace falta return, porque await ya espera a que termine la Promise.

      if (rejectPromise) {
        reject('rejected')
      } else {
        resolve('resolved')
      }
    })
  )

  test('15_async-await-1: should work with resolved promises', async () => {
  return doAsync().then(result => {
    expect(result).toBe('resolved')
  })
})

test('15_async-await-2: should throw an error with a rejected promise', async () => {
  return doAsync(true).catch(error => {
    expect(error).toBe('rejected')
  })
})


