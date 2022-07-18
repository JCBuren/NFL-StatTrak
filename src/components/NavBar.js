import { NavLink } from "react-router-dom"




function NavBar(){

    return(<>

        
        <header className="header">
            <h1 className="logo"><a href="#">NFL StatTrak</a></h1>
            <ul className="main-nav">
                <NavLink to="/">
                    <h3>Home</h3>
                </NavLink>


                <NavLink to="/nflTeams">
                    <h3> NFL Teams </h3>
                </NavLink>

                <NavLink to="/new">
                    <h3> Add New Team Stats </h3>
                </NavLink>
            </ul>
        </header>
        


    </>)

}
export default NavBar