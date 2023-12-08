import React from "react";
import { NavLink } from "react-router-dom";


const Footer=()=>{
    return(
        <footer className="footer">
           <div className="container">
            <nav className="d-flex justify-content-center">
            <NavLink to={"/"} className={({isActive})=>isActive? "nav-link active":"nav-link"}>
                HOME
                </NavLink>
                <NavLink to={"/About"} className={({isActive})=>isActive? "nav-link active":"nav-link"}>
                ABOUT
                </NavLink>
                <NavLink to={"/Products"} className={({isActive})=>isActive? "nav-link active":"nav-link"}>
                PRODUCTS
                </NavLink>
                <NavLink to={"/Post"} className={({isActive})=>isActive? "nav-link active":"nav-link"}>
                POST
                </NavLink>
            </nav>
       
           </div>
        </footer>
    )
}
export default Footer