import * as actionTypes from "../actions/actionTypes";
const initState = {
  backdropOn: false,
  sidebarOn: false,
  addTaskOn: false,
  showCompleteTask: false,
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOn: !state.sidebarOn,
        backdropOn: !state.backdropOn,
      };
    case actionTypes.ACTIVE_ADD_TASK:
      return {
        ...state,
        addTaskOn: true,
      };
    case actionTypes.DEACTIVE_ADD_TASK:
      return {
        ...state,
        addTaskOn: false,
      };
    case actionTypes.TOOGLE_COMPLETE_TASK_SHOW:
      return {
        ...state,
        showCompleteTask: !state.showCompleteTask,
      };
  }

  return {
    ...state,
  };
};

export default uiReducer;
