import React from "react";
import Lists from "./Lists/Lists";
import "./SideDrawer.css";

function SideDrawer(props) {
  return (
    <nav className="siteDrawer">
      <Lists />
    </nav>
  );
}

export default SideDrawer;
