import Button from "./Button";
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1); // This line calls the state setter function with the new counter value

  };

  return (
    <div className="App">
      <Button
        configuration="filled"
        icon={false}
        iconName={undefined}
        onClick={incrementCounter}
      >
        Click Me
      </Button>
      <Button
        configuration="filled"
        icon={true}
        iconName={"search"}
        onClick={incrementCounter}
      >
        Click Me
      </Button>
      <Button
        configuration="outlined"
        icon={false}
        iconName={undefined}
        onClick={incrementCounter}
      >
        Click Me
      </Button>
      <Button
        configuration="outlined"
        icon={true}
        iconName={"search"}
        onClick={incrementCounter}
      >
        Click Me
      </Button>

      <p>Counter: {count}</p>
    </div>
  )
}

export default App
