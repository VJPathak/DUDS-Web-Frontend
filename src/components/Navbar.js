import React from "react";
import { NavLink } from "react-router-dom";
// import "./style.css";
export default function Navbar(){

    return(
        <div>
            <div className="top-rectangle"></div>
            <div className="nav-rectangle">
                <div className="nav-left">
                    <NavLink to={"/"} className="no-under nav-left-item down-border" >
                    Home
                    </NavLink>
                    <a className="nav-left-item">Contact</a>
                    <NavLink to={"/about"} className="no-under nav-left-item" >
                    About
                    </NavLink>
                    
                    <a className="nav-left-item">Category</a>
                </div>
                <div className="nav-middle">
                    <img src="./images/Logo.png" className="nav-image"/>
                </div>
                <div className="nav-right">
                    <div className="right-part-one">
                        <form className="form-inputs">

                        <input type="search" className="search-tab" placeholder="What are you looking for"
                        />
                        </form>
                        <img src="./images/search.png" className="search-image"/>
                    </div>
                    <div className="right-part-two">
                    <NavLink to={"/wishlist"}>
                    <img src="./images/Vector.png" className="vector-image"/>
                    </NavLink>
                    <NavLink to={"/yourcart"}>
                    <img src="./images/Cart1.png" className="cart-image"/>
                    </NavLink>
                    
                        
                        
                        <img src="./images/user.png" className="user-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}