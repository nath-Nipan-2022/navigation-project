import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button purpose="primary" rounded outline>
        Click Me!
      </Button>
      <Button outline>Buy Now!</Button>
      <Button purpose="warning" rounded>
        Remove
      </Button>
      <Button purpose="success" rounded outline>
        Save
      </Button>
    </div>
  );
}

export default App;
