import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <li className={["listItem", props.active ? "active" : ""].join(" ")}>
      <span className="listItem__icon">{props.icon}</span>
      <a className="listItem__link" href="#">
        {props.name}
      </a>
    </li>
  );
}

export default ListItem;
