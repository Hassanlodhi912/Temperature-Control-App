import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  let [myStyle, setMyStyle] = useState({ backgroundColor: "aqua", color: "white" })
  const [count, setCount] = useState(19);
  const call = () => {
    setMyStyle({ backgroundColor: "blue", color: "white" })
  }
  if (count > 21) {
    call()
    setCount(20)
  }
  else if(count<18){
    setMyStyle({ backgroundColor: "aqua", color: "white" })
    setCount(20)
  }

  return (
    <div className="App" >
      <div className="Box" style={myStyle}>
        <h1>Temperature Control App</h1>
        <div className="Box-2">
          Current Temperature is {count}
        </div>
        <Button variant='outlined' color='success' sx={{ margin: "auto" }} onClick={() => setCount(count + 1)}>Increase Temperature</Button>
        <Button variant='outlined' color='error' onClick={() => setCount(count - 1)}>Decrease Temperature</Button>
        { }
      </div>
    </div>
  );
}

export default App;
