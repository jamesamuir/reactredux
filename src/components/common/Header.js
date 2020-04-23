import React from 'react';
import {NavLink} from 'react-router-dom';
import {act} from "react-testing-library";

const Header = () => {
    const activeStyle = {color: '#F15B2A'};

    return (
      <nav>
          <NavLink to={"/"} activeStyle={activeStyle} exact>Home</NavLink>
          {" | "}
          <NavLink to={"/courses"} activeStyle={activeStyle} >Courses</NavLink>
          {" | "}
          <NavLink to={"/about"} activeStyle={activeStyle} >About</NavLink>
      </nav>
    );
}

export default Header;