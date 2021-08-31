import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import axios from 'axios';

function App() {
  const [answer, setState] = useState({
    jokes:""
  })

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData= async() => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random?category=science');
    console.log(result.data.value);
    
    setState({ 
      ...answer,
      jokes: result.data.value
    });

  
   }

  return (
    <div className="Science">
        <div className="jumbotron">
          <p>science jokes</p>
          <div className="b">
          <p>{answer.jokes}</p>
          </div>
        </div>
        
    </div>
  );
}

export default App;
