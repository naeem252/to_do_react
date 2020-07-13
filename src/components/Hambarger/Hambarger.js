import React from "react";
import "./Hambarger.css";

function Hambarger(props) {
  return (
    <div onClick={() => console.log("hell")} className="Hambarger">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
  );
}
export default Hambarger;
