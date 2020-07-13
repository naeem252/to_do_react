import React from "react";
import ListItem from "./ListItem/ListItem";
import "./Lists.css";
function Lists(props) {
  return (
    <ul className="lists">
      <ListItem
        active
        icon={<ion-icon name="sunny-outline"></ion-icon>}
        name="My Day"
      />
      <ListItem
        icon={<ion-icon name="star-outline"></ion-icon>}
        name="Important"
      />
      <ListItem
        icon={<ion-icon name="list-outline"></ion-icon>}
        name="Planed"
      />
    </ul>
  );
}

export default Lists;
