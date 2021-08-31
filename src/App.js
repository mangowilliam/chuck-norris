import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import axios from 'axios';

function App() {
  const [state, seState] = useState({
    joke:""
  })
  useEffect(async() => {
   fetchData();
  }, []);
  const fetchData= async() => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    setState({ 
      ...state,
      joke: result.data.value
    })
   },

  return (
    <div className="App">
        <Header />
        <Nav />
        <div className="jumbotron">
          <h3>Random joke</h3>
          <p>joke</p>
          <h3>science joke</h3>
          <p>joke</p>
        </div>
    </div>
  );
}

export default App;
