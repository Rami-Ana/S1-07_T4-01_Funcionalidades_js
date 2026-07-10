import { jest } from '@jest/globals' //He tenido que importar esto porque me daba error linea 30
test('17_public-class-fields-1: public class fields help us avoid .bind-ing everything', () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props
      this.setState = () => {} // només per diversió
    }
  }

  class MyComponent extends FakeReactComponent {
    constructor(...args) {
      super(...args)
      // no volem haver de fer això...
      // this.handleClick = this.handleClick.bind(this) // this siga apuntando al componente.
    }
    // Converteix `handleClick` en un camp públic de classe utilitzant una funció fletxa (`=>`) perquè mantingui automàticament el valor correcte de `this` sense necessitat de fer `.bind(this)` al constructor.
    handleClick({target: {value}}) {
      this.props.onClick(value)
    }
    render() {
      // coses estranyes de JSX aquí
    }
    // això és només perquè puguem provar coses
    testClick(value) {
      const fakeEvent = {target: {value}}
      this.handleClick(fakeEvent)
    }
  }

  const onClick = jest.fn() //Da fallo, pegar arriba import { jest } from '@jest/globals' 
  const myComponent = new MyComponent({onClick})
  myComponent.testClick('hello world')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onClick).toHaveBeenCalledWith('hello world')
})
