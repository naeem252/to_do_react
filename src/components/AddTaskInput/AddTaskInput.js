import React, { useState } from "react";
import "./AddTaskInput.css";

import * as actions from "../../store/actions/actionTypes";

import { connect } from "react-redux";

function AddTaskInput(props) {
  const [taskString, setTaskString] = useState("");

  const submittedTaskHandler = (e) => {
    e.preventDefault();
    if (taskString.trim()) {
      setTaskString("");
      props.taskSubmitted(taskString);
    }
  };

  let output = (
    <div className="AddTaskInput__content">
      <span className="AddTaskInput__content-icon">
        <ion-icon name="add-outline"></ion-icon>
      </span>
      <p className="AddTaskInput__content_text">Add a Task</p>
    </div>
  );
  if (props.isAddTaskOn) {
    output = (
      <div className="form-group">
        <div className="circle"></div>
        <input
          onBlur={props.addTaskDeactive}
          autoFocus
          type="text"
          className="form-control"
          value={taskString}
          onChange={(e) => setTaskString(e.target.value)}
        />
      </div>
    );
  }
  return (
    <form
      onSubmit={submittedTaskHandler}
      onClick={props.addTaskActive}
      className="AddTaskInput"
    >
      {output}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    isAddTaskOn: state.ui.addTaskOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskSubmitted: (taskName) =>
      dispatch({ type: actions.ON_TASK_SUBMIT, taskName: taskName }),
    addTaskActive: () => dispatch({ type: actions.ACTIVE_ADD_TASK }),
    addTaskDeactive: () => dispatch({ type: actions.DEACTIVE_ADD_TASK }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskInput);
