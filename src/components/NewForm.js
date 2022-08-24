import { useState } from "react"

const NewForm =(props)=>{

    const [idForNewStats, setIdForNewStats] = useState("")
    const [winsForNewStats, setWinsForNewStats] = useState("")
    const [lossesForNewStats, setLossesForNewStats] = useState("")
    const [tiesForNewStats, setTiesForNewStats] = useState("")


    function addNewStats( teamStats ) {
  
      
      
      
      fetch("http://localhost:3000/teamStats/"+teamStats.teamID)
      .then (r=> r.json())
      .then(fetchedStats => {console.log(fetchedStats)
        
        fetch("http://localhost:3000/teamStats/"+teamStats.teamID, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ ...fetchedStats, ...teamStats})
        })
      })
    }

    const confirmSubmit = "New Stats Submitted!"

    return(<>
    
        <form 
              onSubmit={ (synthEvent) => {
                
                synthEvent.preventDefault()

              let newStatsForTeams = {

                "teamID": idForNewStats,

                "2022Wins": winsForNewStats,

                "2022Losses": lossesForNewStats,

                "2022Ties": tiesForNewStats
              
              }
          
              console.log(synthEvent.target.value)
            addNewStats(newStatsForTeams)

            alert (confirmSubmit)
            }}>
        
        {/* <img class="img-for-input" src="https://img.wallpapersafari.com/desktop/1920/1080/41/48/OH6EQt.jpg"/> */}

        <h1 class="h1ForInput">Add 2022's Stats Here!</h1>

        <label class="label-input">Team ID:</label>
          <input class="css-input" name="teamID" placeholder="NFL Team ID..." onChange={ (synthEvent) =>{
          setIdForNewStats(synthEvent.target.value)
          }      
        }/>      

        <label class="label-input">Team Wins:</label>
          <input class="css-input" name="teamWins" placeholder="Team Wins..." onChange={ (synthEvent) =>{
          setWinsForNewStats(synthEvent.target.value)
          }      
        }/>
        
        <label class="label-input">Team Losses:</label>
          <input class="css-input" name="teamLosses" placeholder="Team Losses..." onChange={ (synthEvent) =>{
          setLossesForNewStats(synthEvent.target.value)
          }      
        }/>

        <label class="label-input">Team Ties:</label>
          <input class="css-input" name="teamTies" placeholder="Team Ties..." onChange={ (synthEvent) =>{
          setTiesForNewStats(synthEvent.target.value)
          }      
        }/>

        <button class="inputbutton"> SUBMIT </button>

        </form>
      

    </>)

}
export default NewForm