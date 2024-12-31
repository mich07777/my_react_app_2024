import React from "react";
import { Outlet,NavLink } from "react-router-dom"

const NestedRoutingPage  = () => {
    return(
        <div className="Nested-container">
            <div className="header-container"></div>
            <div className="body-container">
                <div className="sidebar">
                
                    <NavLink to="/nested/content-1"  className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Content 1</NavLink>
                    <br />
                    <NavLink to="/nested/content-2" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Content 2 </NavLink>
                    <br />
                    <NavLink to="/nested/content-3" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Content 3</NavLink>
                    <br />
                    <NavLink to="/nested/content-4" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Content 4</NavLink>
                    <br />
                    <NavLink to="/nested/salaryDetails" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Salary Details</NavLink>
                    <br />
                    <NavLink to="/nested/vechicalDetails" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>vechical Details</NavLink>
                    <br />
                    <NavLink to="/nested/actorDetails" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Actor Details</NavLink>
                    <br />
                    <NavLink to="/nested/profileDetails" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>Profile Details</NavLink>
                    <br />
                    <NavLink to="/nested/condtionalrendering" className = {({isActive}) => isActive ? "linkbutton selection" : "linkbutton"}>condtional Rendering</NavLink>
                    <br />
                </div>
                <div className="section">
                    <div className="content">
                        <Outlet></Outlet>
                    </div>
                    <div className="footer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NestedRoutingPage;