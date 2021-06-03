// import logo from './logo.svg';
import React, { useState } from 'react'
import { useForm } from './useForm'
import './App.css';

// function testingInitialState() {
//   return 'this is just a test'
// }

// let test = testingInitialState()
// console.log('ey', test)

function App() {

  // useState(initialValue)
  // useState((function) => value) ~ only run in the initial value
  // useState(() => testingInitialState())

  //destructuring
  // const [count, setCount] = useState(0);
  // const [constant, setter]

  // next level destructuring
  const [ { count1, count2 }, setCount ] = useState({count1: 10, count2: 20})
  // console.log('test', count, setCount)

  // stored in useForm.js file
  // const [ email, setEmail ] = useState("")
  // const [ password, setPassword ] = useState("")
  const [values, handleChange] = useForm({email: '', password: ''})

  return (
    <div className="App">
      <header className="App-header">
        learn useState and useEffect

        <div>
          {/* <button onClick={() => setCount(count + 1)}> + </button>
          <button onClick={() => setCount(count - 1)}> - </button> */}

          <button onClick={() => setCount(currentState => ({ 
                ...currentState, 
                count1: currentState.count1 + 1,
                count2: currentState.count2 + 1
              })
            )
          }> + </button>
          <div>count 1: {count1}</div>
          <div>count 2: {count2}</div>
        </div>

        <div>
          <input name="email" 
                 value={values.email} 
                //  onChange={e => setEmail(e.target.value)} 
                onChange={handleChange}
          />

          <input name="password" 
                 type="password" 
                 value={values.password} 
                //  onChange={e => setPassword(e.target.value)} 
                onChange={handleChange}
          />
        </div>
      </header>
    </div>
  );
}

// useState() can only use these functions, can't use in class components
// function App(){}
// const app = () => {}

// hooks - https://reactjs.org/docs/hooks-rules.html

export default App;
