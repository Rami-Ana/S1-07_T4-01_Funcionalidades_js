test('10_class-1: has a constructor for initialization', () => {
  // Crea una classe Animal
  // Afegeix un constructor que prengui un paràmetre, el nom.
  // Assigna this.name al nom passat com a paràmetre
  class Animal {
     constructor(name) {
       this.name = name; //guardar ese valor en la propiedad this.name, asign parametro.
  }
}

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('10_class-2: constructor can have default param values', () => {
  // Crea una classe Animal amb un constructor
  // Fes que la classe tingui un valor per defecte (utilitzant paràmetres per defecte) per al nom: 'Honey Badger'
  class Animal {
     constructor(name = 'Honey Badger') { 
       this.name = name;
  }
}
  const animal = new Animal() //No pasamos ningún argumento
  const dog = new Animal('Dog')
//   name (en constructor(name)) es el parámetro.
//  'Dog' (en new Animal('Dog')) es el argumento o valor que pasas al parámetro.

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('10_class-3: can have instance methods', () => {
  // Crea una classe Animal, passa el nom al constructor i afegeix una funció sayName a la definició de la classe
  class Animal{ constructor(name = 'Honey Badger') {// CONTENEDOR inicialización
    this.name = name;
  }
  sayName(){// METODO INSTANCIA: comportamiento 
        return `My name is: ${this.name}`;
  }
}
  const animal = new Animal() //creamos un objeto con molde de class Animal

  expect(animal.sayName).toBeDefined() // Existe: es una instancia creada a partir del molde Animal
  expect(Animal.sayName).toBeUndefined() // No existe: es solo un molde class Animal, no objeto
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('10_class-4: can have static methods', () => {
  // Crea una classe Animal, passa el nom al constructor,
  // i afegeix un mètode estàtic create que prengui un nom i retorni una instància

  class Animal{ constructor (name){
    this.name = name;
  }
  static create(name){ //método estático
  return new Animal(name); //Que metodo estatico devuuelva una instancia, un objeto creado
}}

  const animal = new Animal()
  const dog = Animal.create('Dog')

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()

  expect(dog instanceof Animal).toBe(true)
  expect(dog.name).toBe('Dog')
})

test('10_class-5: can extend another class', () => {
  // Crea una classe Animal
  // Crea una classe Dog que extengui Animal
  // Afegeix un mètode `sayName` a `Dog` que retorni el nom de la instància.
  class Animal { constructor(name){
    this.name = name;
  }}

  class Dog extends Animal {
  constructor(name) {
  super(name); //herencia
  }
  sayName(){
    return `My name is: ${this.name}`
  }
}

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)

  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()

  expect(dog.sayName()).toBe('My name is: Fido')
})

test('10_class-6: can use property setters and getters', () => {
  // Crea una classe Animal (no passis el nom al constructor)
  // Afegeix un setter per a la propietat name
  // Afegeix un getter per a la propietat name
  class Animal{
    set name(value) {this._name = value;} //value = lo que entra. | _name = lo que se guarda.
    get name() {return `${this._name} type of animal`;}

  }

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})


