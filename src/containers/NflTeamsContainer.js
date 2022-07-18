import { useEffect, useState } from "react";
import NflTeamsComponent from "../components/NflTeamsComponent";




function NflTeamsContainer(props){

    console.log("Props from Container", props)

    // const[nflTeams, setnflTeams] = useState( [] )
    // useEffect( ()=>{ 

    //     fetch("http://localhost:3000/NflTeams")
    //     .then(r => r.json())
    //     .then(fetchedTeams => {
    //         // console.log(fetchedTeams);

        
    //         setnflTeams(fetchedTeams);
        
    // });

    // } , [] )


    return(<>
        <section className="layout">
        {
            props.teamsToMap.map(eachTeam => <NflTeamsComponent key={eachTeam.id} teamProp={eachTeam} />)
        }
       
       </section>
     
    </>)


}
export default NflTeamsContainer