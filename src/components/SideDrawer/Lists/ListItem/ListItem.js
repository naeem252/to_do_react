import React from "react";
import "./ListItem.css";
import { connect } from "react-redux";
import * as actionTypes from "../../../../store/actions/actionTypes";

function ListItem(props) {
  return (
    <li
      onClick={props.toggleSidebar}
      className={["listItem", props.active ? "active" : ""].join(" ")}
    >
      <span className="listItem__icon">{props.icon}</span>
      <a className="listItem__link" href="#">
        {props.name}
      </a>
    </li>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch({ type: actionTypes.TOGGLE_SIDEBAR }),
  };
};
export default connect(null, mapDispatchToProps)(ListItem);
