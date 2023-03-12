import Button from "./Button";
import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1); // This line calls the state setter function with the new counter value

  };

  return (
    <div className="App">
      <Button configuration="filled" onClick={handleClick}>Click Me</Button>
      <Button configuration="outlined" onClick={handleClick}>Click Me</Button>

      <p>Counter: {count}</p>
    </div>
  )
}

export default App
