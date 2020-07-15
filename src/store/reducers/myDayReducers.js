import * as actionTypes from "../actions/actionTypes";

const initState = {
  completedTask: [],
  myDayTask: [],
};

const myDayReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ON_TASK_SUBMIT:
      const updatedDayTask = [...state.myDayTask];
      updatedDayTask.unshift(action.taskName);
      return {
        ...state,
        myDayTask: updatedDayTask,
      };
    case actionTypes.ON_TASK_COMPLETE:
      const updatedMyDayTask = [...state.myDayTask];
      const updatedCompletedTask = [...state.completedTask];
      const newCompleteTaskName = updatedMyDayTask[action.index];
      updatedMyDayTask.splice(action.index, 1);
      updatedCompletedTask.unshift(newCompleteTaskName);
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
