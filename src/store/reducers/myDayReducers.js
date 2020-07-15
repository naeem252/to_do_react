import * as actionTypes from "../actions/actionTypes";

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
      updatedDayTask.unshift(action.taskName);
      return {
        ...state,
        myDayTask: updatedDayTask,
      };
    case actionTypes.ON_TASK_COMPLETE:
      const newCompleteTaskName = updatedMyDayTask[action.index];
      updatedMyDayTask.splice(action.index, 1);
      updatedCompletedTask.unshift(newCompleteTaskName);
      return {
        ...state,
        completedTask: updatedCompletedTask,
        myDayTask: updatedMyDayTask,
      };
    case actionTypes.ON_TASK_UNCOMPLETE:
      const unCompleteName = updatedCompletedTask[action.index];
      updatedCompletedTask.splice(action.index, 1);
      updatedMyDayTask.unshift(unCompleteName);
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
