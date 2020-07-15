import React from "react";
import "./CompleteTaskList.css";
import { connect } from "react-redux";
import * as action from "../../store/actions/actionTypes";
import CompletedTaskListItem from "./CompleteTaskListItem/CompleteTaskListItem";
function CompleteTaskList(props) {
  let output = null;

  if (props.allCompletedTask.length > 0) {
    output = (
      <React.Fragment>
        <h3 className="cmpl-heading" onClick={props.toggleShowCompleteTask}>
          <span className={props.isActive ? "active" : null}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
          <span>Completed</span>
        </h3>
        <div className="ul-wrapper">
          <ul className={props.isActive ? "active" : null}>
            {props.allCompletedTask.map((task, index) => {
              return <CompletedTaskListItem text={task} key={index} />;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
  return <div className="CompleteTaskList">{output}</div>;
}

const mapStateToProps = (state) => {
  return {
    isActive: state.ui.showCompleteTask,
    allCompletedTask: state.myDay.completedTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowCompleteTask: () =>
      dispatch({ type: action.TOOGLE_COMPLETE_TASK_SHOW }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompleteTaskList);