import React , {useState} from "react";
function App() {
  const [count,setCount] = useState(0);
  function handleclick(){
    setCount(prevCount => prevCount + 1)
  }
  return (
    <button onClick={handleclick} style={{padding:"2rem 1.5rem"}}>`You clicked me ${count} times`</button>
);
}

export default App;
