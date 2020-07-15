import React from "react";
import TaskItem from "./MyDayTaskListItem/MyDayTaskListItem";
import { connect } from "react-redux";
import * as action from "../../store/actions/actionTypes";

function MyDayTaskList(props) {
  const style = {
    listStyle: "none",
    marginTop: "1rem",
  };
  return (
    <ul style={style} className="MyDayTaskList">
      {props.allTask.map((task, index) => {
        return (
          <TaskItem
            onCompleted={props.onCompleteTask.bind(this, index)}
            key={index}
            text={task}
          />
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    allTask: state.myDay.myDayTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCompleteTask: (index) =>
      dispatch({ type: action.ON_TASK_COMPLETE, index: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDayTaskList);
