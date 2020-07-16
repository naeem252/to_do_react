import * as actionTypes from '../actions/actionTypes';
import { act } from 'react-dom/test-utils';

const initState = {
  completedTask: [],
  myDayTask: [],
};

const myDayReducer = (state = initState, action) => {
  const updatedMyDayTask = [...state.myDayTask];
  const updatedCompletedTask = [...state.completedTask];

  switch (action.type) {
    case actionTypes.ON_TASK_SUBMIT:
      const updatedDayTask = [...state.myDayTask];
      updatedDayTask.unshift({ name: action.taskName, isImportant: false });
      return {
        ...state,
        myDayTask: updatedDayTask,
      };

    case actionTypes.ON_TASK_COMPLETE:
      const newCompleteTask = updatedMyDayTask[action.index];
      updatedMyDayTask.splice(action.index, 1);
      updatedCompletedTask.unshift(newCompleteTask);
      return {
        ...state,
        completedTask: updatedCompletedTask,
        myDayTask: updatedMyDayTask,
      };

    case actionTypes.ON_TASK_UNCOMPLETE:
      const unComplete = updatedCompletedTask[action.index];
      updatedCompletedTask.splice(action.index, 1);
      updatedMyDayTask.unshift(unComplete);
      return {
        ...state,
        completedTask: updatedCompletedTask,
        myDayTask: updatedMyDayTask,
      };

    case actionTypes.TOGGLE_TASK_IMPORTANT:
      updatedMyDayTask[action.index].isImportant = !updatedMyDayTask[action.index].isImportant;

      return {
        ...state,
        completedTask: updatedCompletedTask,
        myDayTask: updatedMyDayTask,
      };
    case actionTypes.DELETE_TASK:
      if (action.deleteTaskArr === 'dayTask') {
        updatedMyDayTask.splice(action.index, 1);
      } else {
        updatedCompletedTask.splice(action.index, 1);
      }

      return {
        ...state,
        completedTask: updatedCompletedTask,
        myDayTask: updatedMyDayTask,
      };
  }
  return {
    ...state,
  };
};

export default myDayReducer;
