import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import New from './New';
import { useEffect } from 'react';

function App() {

  useEffect( ()=>{

    fetch("http://localhost:3000/reActors")
    .then(r => r.json())
    .then(console.log)

  })



  return (<>

    <h1> - NavBar - SHOULD SEE THIS ALL THE TIME </h1>

    <BrowserRouter>

      <Route exact path="/"  />
      <Route exact path="/new" component={New} />

    </BrowserRouter>

  </>);

}

export default App;



{/* 
  
< Pets />
  < Dogs /> [ dogs ]
      < Dog /> { dog }
  < Cats /> [ cats ]
      < Cat /> { dog } 

*/}


{/* 

< Pets /> [ data ]
    < Dogs />
        [ data ].filter = [ dogs ]
        < Dog /> { dog }
    < Cats />
        [ data ].filter = [ cats ]
        < Cat /> { cat } 

*/}