import CatCard from "../listcards/CatCard"

function CatList({ catsToMap }){

    return(<>
    
        <h2> Cat List </h2>
        {
            catsToMap.map(eachCat => <CatCard catToRender={eachCat}/>)

        }

    </>)

}
export default CatList