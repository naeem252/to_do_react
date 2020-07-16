import React from 'react';
import './Hambarger.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

function Hambarger(props) {
  return (
    <div onClick={props.toggleSidebar} className="Hambarger">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch({ type: actionTypes.SHOW_SIDEBAR }),
  };
};
export default connect(null, mapDispatchToProps)(Hambarger);
