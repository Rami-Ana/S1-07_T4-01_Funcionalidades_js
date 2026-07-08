test('02_arrow-1: pot substituir funcions tradicionals', () => {
  let fnMultiply = function (a, b) {
    return a * b;
  }
  let arrowMultiply = (a, b) => a * b;

  // Escriu dues funcions que prenguin dos paràmetres i retornin el seu producte
  // Per a 'fnMultiply', assigna-li una funció tradicional
  // Per a 'arrowMultiply', assigna-li una funció fletxa
  // el producto de dos números es el resultado de multiplicarlos.

  expect(fnMultiply(5, 5)).toBe(arrowMultiply(5, 5))
})

test('02_arrow-2: pot substituir funcions tradicionals #2', () => {
  const nums = [2, 5, 10]

  //El següent codi ja funciona correctament i el test ja passa.
  //Refactoritza la funció utilitzant una funció fletxa per simplificar-lo, assegurant-te que el test segueix passant.
  //Pista: una funció fletxa amb una sola expressió pot ometre les claus i el `return`.

  const squares = nums.map((num) => num * num);
  //   const squares = nums.map(function(num) {
  //   return num * num;
  // });

  expect(squares.shift()).toBe(4)
  expect(squares.shift()).toBe(25)
  expect(squares.shift()).toBe(100)
})

test('02_arrow-3: lliga `this` a l\'àmbit d\'avaluació, no a l\'àmbit d\'execució', () => {

  // Modifica l'objecte 'person'. Una de les funcions hauria de convertir-se en una funció fletxa
  // per permetre que 'this' mantingui el context correctament

  const person = {
    name: 'Aaron',
    greetFriends: function(friends) {
      return friends.map((friend) => this.name + ' saluda a ' + friend)
    },
  }

  //   const person = {
  //   name: 'Aaron',
  //   greetFriends: function(friends) {
  //     return friends.map(function(friend) {
  //       return this.name + ' saluda a ' + friend
  //     })
  //   },
  // }

  const friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen']
  expect(() => person.greetFriends(friendsArray)).not.toThrow()
})

test('02_arrow-4: pot fer que les cadenes de filtres d\'arrays siguin més manejables', () => {
  const data = [
    { type: 'Widget', name: 'Sprocket', price: 10.0, qty: 3 },
    { type: 'Widget', name: 'Bracket', price: 1.0, qty: 5 },
    { type: 'Widget', name: 'Brace', price: 2.5, qty: 1 },
    { type: 'Widget', name: 'Sprocket', price: 4.0, qty: 2 },
    { type: 'Food', name: 'Gouda', price: 8.75, qty: 4 },
    { type: 'Food', name: 'Bacon', price: 3.5, qty: 3 },
    { type: 'CD', name: 'Queen Best Hits', price: 5.5, qty: 5 },
    { type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3 },
    { type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6 },
  ]

  // El següent codi funciona correctament amb funcions tradicionals i el test ja passa.
  // Refactoritza totes les funcions utilitzant funcions fletxa per fer el codi més concís i llegible, assegurant-te que el test segueix passant.

  const shoppingList = data
    .filter( (d)  => d.type != 'Widget')  // Elimina els Widgets
    .filter( (d) =>  d.price < 5 )        // Troba només els elements restants amb preu < 5
    .sort((a, b) => a.qty - b.qty)        // Ordena per quantitat, descendent
    .map( (d) => d.name)          // Extreu només el nom de cada element

  expect(shoppingList.shift()).toBe('Bacon')
  expect(shoppingList.shift()).toBe('JT Best Hits')

  // const shoppingList = data
  //   .filter(function (d) {
  //     return d.type != 'Widget'
  //   }) // Elimina els Widgets
  //   .filter(function (d) {
  //     return d.price < 5
  //   }) // Troba només els elements restants amb preu < 5
  //   .sort(function (a, b) {
  //     return a.qty - b.qty
  //   }) // Ordena per quantitat, descendent
  //   .map(function (d) {
  //     return d.name
  //   }) // Extreu només el nom de cada element

  // expect(shoppingList.shift()).toBe('Bacon')
  // expect(shoppingList.shift()).toBe('JT Best Hits')
})