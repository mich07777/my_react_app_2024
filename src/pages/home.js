import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="heading">This is a Home Page Content</h1>
      <img
        className="home-image"
        src={require("../images/tvk.ruling part.jpeg")}
        alt=""
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiX0tL5aJtKK8QkPpRVLSjvmtoZnLWmVAjhw&s"
        className="home-image"
        alt=""
      />
      <br></br>
      <NavLink to="/login">Sigin up! Login Page</NavLink>
      <br></br>
      <NavLink to="/about">About</NavLink>
      <br></br>
      <NavLink to="/nested">Go to Nested Routing Page</NavLink>
    </div>
  );
};

export default HomePage;
