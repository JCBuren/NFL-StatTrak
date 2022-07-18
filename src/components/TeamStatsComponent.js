function TeamStatsComponent(props){

    console.log("Props from Component", props)

    return(<>
        {/* <img src="https://img.wallpapersafari.com/desktop/1920/1080/41/48/OH6EQt.jpg"/> */}
        <div className="container">
        <img src={props.teamInfo.logo}/>
        <p>{props.teamProp.teamName}</p>
        </div>

        <div className="grid-container">
        {
            (props.teamProp["2022Wins"]) &&
            <p>2022 Wins: {props.teamProp["2022Wins"]}</p>
        }

        {
            (props.teamProp["2022Losses"]) &&
            <p>2022 Losses: {props.teamProp["2022Losses"]}</p>
        }

        {
            (props.teamProp["2022Ties"]) &&
            <p>2022 Ties: {props.teamProp["2022Ties"]}</p>
        }

        <p>2021 Wins: {props.teamProp["2021Wins"]}</p>
        <p>2021 Losses: {props.teamProp["2021Losses"]}</p>
        <p>2021 Ties: {props.teamProp["2021Ties"]}</p>
        <p> 2020 Wins: {props.teamProp["2020Wins"]}</p>
        <p>2020 Losses: {props.teamProp["2020Losses"]}</p>
        <p>2020 Ties: {props.teamProp["2020Ties"]}</p>
        
        </div>

     
        
   

    </>)

}
export default TeamStatsComponent