import React from "react";
import { NavLink } from "react-router-dom"

const PageNotFoundPage = () => {
    return(
        <div>
            <h5>Page Not Found</h5>
            <NavLink to="/">Back to home Page</NavLink>
        </div>
    )
}

export default PageNotFoundPage;