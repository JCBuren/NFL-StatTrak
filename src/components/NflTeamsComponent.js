import { useHistory } from "react-router-dom"

function NflTeamsComponent(props){

    let history = useHistory()
    // console.log("Props from Component", props.teamProp)

    


    return(<>
        
            <div>
            <p>{props.teamProp.teamName}</p>
            <p>{props.teamProp.division}</p>
            <p>{props.teamProp.founded}</p>
            <img src={props.teamProp.logo}/>
            <button onClick={() => history.push('/team/'+props.teamProp.id)}> View Stats </button>
            </div>
       
    
        </>)
    



}
export default NflTeamsComponent