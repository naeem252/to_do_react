import React from "react";
import "./Backdrop.css";

function Backdrop(props) {
  return (
    <div className={["Backdrop", props.active ? "active" : ""].join(" ")}></div>
  );
}

export default Backdrop;
