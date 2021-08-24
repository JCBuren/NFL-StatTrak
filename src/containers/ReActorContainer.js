import { useEffect, useState } from "react";
import ReActorComponent from "../components/ReActorComponent";




function ReActorContainer(){

    const[reActors, setReActors] = useState( [] )
    useEffect( ()=>{ 

        fetch("http://localhost:3003/reActors")
        .then(r => r.json())
        .then(fetchedReActors => {console.log(fetchedReActors)
        
            setReActors(fetchedReActors)
        
        })

    } , [] )


    return(<>
        <h2>ReActors</h2>
        {
            reActors.map(eachReActor => <ReActorComponent reActorProp={eachReActor} />)
        }
        {/* < ReActorComponent /> */}
    
    </>)


}
export default ReActorContainer