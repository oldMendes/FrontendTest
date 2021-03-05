import React from "react";
import NavbarItem from "../NavbarItem";

const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-expand-sm fixed-top navbar-dark bg-primary">
        <div className="container" style={{ margin: 0 }}>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav" >
              <NavbarItem
                href="#/health-plain"
                label="Planos de saúde"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
