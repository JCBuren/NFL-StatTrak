import { NavLink } from "react-router-dom"




function NavBar(){

    return(<>

        <h1>- NavBar -</h1>

            <NavLink to="/">
                <h3>HOME🏡✨</h3>
            </NavLink>


                <NavLink to="/ReActors">
                    <h4> ReActors </h4>
                </NavLink>

                <NavLink to="/pets">
                    <h4> Pets </h4>
                </NavLink>


                <NavLink to="/cats">
                    <h4> Cats </h4>
                </NavLink>
                <NavLink to="/dogs">
                    <h4> Dogs </h4>
                </NavLink>


                <NavLink to="/new">
                    <h4> NEW FORM - For Something </h4>
                </NavLink>


        <h1>- NavBar -</h1>


            <br></br>
            <br></br>
            <br></br>
            <br></br>


    </>)

}
export default NavBar