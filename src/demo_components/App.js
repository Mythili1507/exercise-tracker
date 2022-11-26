import logo from './logo.svg';
import './App.css';

import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';


// not a component, just ordinary function
function sayHello()
{
  console.log('Hello');
}

// Main component- hint: PascalCase
function App()
{

  function sayHi()
  {
    console.log('Hi');
  }

  return (
  <>
    <div className="App">
      <h1>Hello world</h1>
    </div>

    <div>
      <h2>Made by Mythili</h2>
    </div>


    <MyComponent />
    <hr/>

    <MyComponent2>
      <p>Child1</p>
      <p>Child2</p>
    </MyComponent2>
    <hr/>

    <MyComponent3 firstName='Mythili' lastName='Y' dummy='DUMMY' />
    <br/>
    <MyComponent3 firstName='Mythili' lastName='Y' dummy='DUMMY'>
      <p>Child1</p> <p>Child2</p>
    </MyComponent3>
    <hr/>

    <MyComponent4 firstName='Mythili' lastName='Y' dummy='DUMMY' />
    <br/>
    <MyComponent4 firstName='Mythili' lastName='Y' dummy='DUMMY'>
      <p>Child1</p> <p>Child2</p>
    </MyComponent4>
    <br/>
    <MyComponent4 firstName='Mythili' lastName='Y' dummy='DUMMY'>
      <MyComponent3 firstName='Pavan' lastName='Kumar' />
    </MyComponent4>
    <hr/>

    <MyComponent5 name='Mythili' whatToSay={sayHello} />
    <br/>
    <MyComponent5  whatToSay={sayHi} />
    <br/>
    <MyComponent5 name='Lambda' whatToSay={ ()=> console.log("Bye") }/>

  </>
  );

}

export default App;
