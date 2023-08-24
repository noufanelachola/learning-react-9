
import React , {useState , useEffect} from "react";

function App() {

  const [count,setCount] = useState(1);
  const [data,setData] = useState(0);

  function handleclick(){
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    console.log("effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(resp => resp.json())
      .then(data => setData(data));
  },[count])

  return (
    <div>
      <button onClick={handleclick} style={{padding:"2rem 1.5rem"}}>`You clicked me ${count} times`</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

}

export default App;
