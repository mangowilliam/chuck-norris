import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Science from './Science';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    joke:""
  })

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData= async() => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    
    setState({ 
      ...state,
      joke: result.data.value
    });
   }

  return (
    <div className="App">
        <Header />
        <Nav />
        <Science />
        <div className="jumbotron">
          <h3>Random joke</h3>
          <div className="a" >
          <p>{state.joke}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
