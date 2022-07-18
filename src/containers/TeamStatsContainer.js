import { useEffect, useState } from "react";
import TeamStatsComponent from "../components/TeamStatsComponent";

function TeamStatsContainer(props){

    console.log("Props from Container", props)
    // console.log("Props Match Params", props.match.params.id)

    const[teamStats, setTeamStats] = useState( {} )
    useEffect( ()=>{ 

        fetch("http://localhost:3000/teamStats/"+props.match.params.id)
        .then(r => r.json())
        .then(fetchedStats => {
            console.log("Individual team Stats:", fetchedStats);

        
            setTeamStats(fetchedStats);
        
    });

    } , [] )

    const[teamInfo, setTeamInfo] = useState( {} )
    useEffect( ()=>{ 

        fetch("http://localhost:3000/nflTeams/"+props.match.params.id)
        .then(r => r.json())
        .then(fetchedStats => {
            console.log("Individual team Stats:", fetchedStats);

        
            setTeamInfo(fetchedStats);
        
    });

    } , [] )

    return(<>
        <section>
        {
            <TeamStatsComponent teamProp={teamStats} teamInfo={teamInfo}/>
        }
       
       </section>
     
    </>)

}

export default TeamStatsContainer