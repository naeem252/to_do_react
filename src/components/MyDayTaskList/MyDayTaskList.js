import React from 'react';
import TaskItem from './MyDayTaskListItem/MyDayTaskListItem';
import { connect } from 'react-redux';
import * as action from '../../store/actions/actionTypes';

function MyDayTaskList(props) {
  const style = {
    listStyle: 'none',
    marginTop: '1rem',
  };
  return (
    <ul style={style} className="MyDayTaskList">
      {props.allTask.map((task, index) => {
        return (
          <TaskItem
            isImp={task.isImportant}
            onCompleted={props.onCompleteTask.bind(this, index)}
            key={index}
            text={task.name}
            onImportant={props.onMakeImportant.bind(this, index)}
            onModalDelete={props.onDeleteModalShow.bind(this, task.name, index, 'incomplete')}
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
    onDeleteModalShow: (content, index, place) =>
      dispatch({ type: action.TOGGLE_MODAL, content: content, index: index, deletePlace: place }),
    onMakeImportant: (index) => dispatch({ type: action.TOGGLE_TASK_IMPORTANT, index: index }),
    onCompleteTask: (index) => dispatch({ type: action.ON_TASK_COMPLETE, index: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDayTaskList);

//onDeleteTask: (index) => dispatch({ type: action.DELETE_TASK, index: index, deleteTaskArr: 'dayTask' }),
//
