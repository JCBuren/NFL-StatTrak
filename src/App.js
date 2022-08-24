import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { useEffect, useState } from 'react';


import NavBar from './components/NavBar';
import Home from './components/Home';
import NflTeamsContainer from './containers/NflTeamsContainer';
import TeamsList from './list/TeamsList';
import NewForm from './components/NewForm';
import TeamStatsComponent from './components/TeamStatsComponent';
import TeamStatsContainer from './containers/TeamStatsContainer';



function App() {


  const[teamsList, setTeamsList] = useState( [] )
    // console.log("STATE OF: ", teamsList)


  useEffect( ()=>{

    fetch("http://localhost:3003/nflTeams")
    .then(r => r.json())
    .then(fetchedNflTeams => {console.log(fetchedNflTeams)
        
      setTeamsList(fetchedNflTeams)
  
    })

  }, [] )



  return (<>

      <NavBar />
      
        <Route exact path="/NflTeams" render={props => <TeamsList {...props} teamsToMap={teamsList} />} > 

          <section class="layout" component> <NflTeamsContainer teamsToMap={teamsList} /> </section>
        
        </Route>

        <Route exact path="/new" component={NewForm}/> 
        
        <Route exact path="/team/:id" component={TeamStatsContainer}/>




       <Route exact path="/">
          <Home />
       </Route>

  </>);

}

export default App;


