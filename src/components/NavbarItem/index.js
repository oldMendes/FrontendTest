import React from "react";

const NavbarItem = ({ href, label, ...props }) => {
  return (
    <>
      <li className="nav-item">
        <a onClick={props.onClick} className="nav-link" href={href} style={{fontSize: '20px'}}>
          {label}
        </a>
      </li>
    </>
  );
};

export default NavbarItem;
