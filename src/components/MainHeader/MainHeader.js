import React from "react";
import "./MainHeader.css";

function MainHeader(props) {
  return (
    <div className="Main-header">
      <div className="Main-header__text">
        <h2>My Day</h2>
        <span>Tuesday , july 14</span>
      </div>
      <div className="Main-header__icons">
        <span>
          <ion-icon name="bulb-outline"></ion-icon>
        </span>
        <span>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}
export default MainHeader;
