import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

function Modal(props) {
  return (
    <div className={['Modal', props.isShowModal ? 'active' : 'inActive'].join(' ')}>
      <span className="cls-icon" onClick={props.hideModal}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <h4>Are You Sure ?</h4>
      <p>{`You want to delete ${props.content}`} </p>
      <button onClick={props.hideModal} className="btn btn-close">
        Close
      </button>
      <button onClick={props.onDeleteTask.bind(this, props.index, props.place)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isShowModal: state.ui.modalShow,
    content: state.ui.modalContent,
    index: state.ui.deletedIndex,
    place: state.ui.deleteActionPlace,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTask: (index, place) =>
      dispatch({
        type: actionTypes.DELETE_TASK,
        index: index,
        deleteTaskArr: place === 'incomplete' ? 'dayTask' : null,
      }),
    hideModal: () => dispatch({ type: actionTypes.HIDE_SIDEBAR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
