import React from "react";
import SiteDrawer from "./components/SideDrawer/SideDrawer";

function Layout(props) {
  return (
    <div className="Layout">
      <SiteDrawer />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
