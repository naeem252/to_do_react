import React from "react";
import Lists from "./Lists/Lists";
import "./SideDrawer.css";
import { connect } from "react-redux";

function SideDrawer(props) {
  return (
    <nav className={["siteDrawer", props.isActive ? "active" : null].join(" ")}>
      <Lists />
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isActive: state.ui.sidebarOn,
  };
};
export default connect(mapStateToProps)(SideDrawer);
