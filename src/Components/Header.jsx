import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <header>
        <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <div className="logo badge rounded-pill bg-info text-dark fs-4">
                <NavLink to={"/"}>Route E-Commarce</NavLink>
             </div>
             <div className="nav nav-pills d-flex gap-2">
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
             </div>


        </div>
        </div>
       
        </header>
    )
}
export default Header