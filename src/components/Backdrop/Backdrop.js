import React from "react";
import "./Backdrop.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

function Backdrop(props) {
  return (
    <div
      onClick={props.toggleSidebar}
      className={["Backdrop", props.isBackdropActive ? "active" : ""].join(" ")}
    ></div>
  );
}
const mapStateToProps = (state) => {
  return {
    isBackdropActive: state.ui.backdropOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch({ type: actionTypes.TOGGLE_SIDEBAR }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
