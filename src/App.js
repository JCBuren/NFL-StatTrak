import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { useEffect, useState } from 'react';


import NavBar from './NavBar';
import Home from './components/Home';

import ReActorContainer from './containers/ReActorContainer';

import CatList from './list/CatList';
import DogList from './list/DogList';

//  ***  //
import Pets from './Pets';

import New from './New';




function App() {


  const[catList, setCatList] = useState( [] )
    console.log("STATE OF: ", catList)
  const[dogList, setDogList] = useState( [] )
    console.log("STATE OF: ", dogList)

  useEffect( ()=>{

    fetch("http://localhost:3003/cats")
    .then(r => r.json())
    .then(fetchedCats => {console.log(fetchedCats)
        
      setCatList(fetchedCats)
  
    })

    fetch("http://localhost:3003/dogs")
    .then(r => r.json())
    .then(fetchedDogs => {console.log(fetchedDogs)
        
      setDogList(fetchedDogs)
  
    })

  }, [] )



  return (<>

      <NavBar />
      
      {/* <Switch> */}

        <Route exact path="/">
          <Home />
        </Route>


        <Route path="/ReActors">
          <ReActorContainer />
        </Route>



  

        <Route exact path="/cats" render={ props => <CatList {...props} catsToMap={catList} />} />
        <Route exact path="/dogs" component={DogList} />




        <Route exact path="/pets" component={Pets} />
        {/* WHY U NO WORK */}


        <Route exact path="/new" component={New} />


      {/* </Switch> */}

  </>);

}

export default App;



    {/* <BrowserRouter>
    </BrowserRouter> */}

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



{/* <h1> - NavBar - SHOULD SEE THIS ALL THE TIME </h1> */}