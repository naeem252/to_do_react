import * as actionTypes from '../actions/actionTypes';
const initState = {
  backdropOn: false,
  sidebarOn: false,
  addTaskOn: false,
  showCompleteTask: false,
  modalShow: false,
  modalContent: '',
  deletedIndex: null,
  deleteActionPlace: null,
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SIDEBAR:
      return {
        ...state,
        sidebarOn: true,
        backdropOn: true,
      };
    case actionTypes.HIDE_SIDEBAR:
      if (state.modalShow) {
        return {
          ...state,
          sidebarOn: false,
          backdropOn: false,
          modalShow: false,
        };
      }
      return {
        ...state,
        sidebarOn: false,
        backdropOn: false,
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
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalShow: !state.modalShow,
        backdropOn: !state.backdropOn,
        modalContent: action.content,
        deletedIndex: action.index,
        deleteActionPlace: action.deletePlace,
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        modalShow: !state.modalShow,
        backdropOn: !state.backdropOn,
        modalContent: '',
        deletedIndex: null,
      };
  }

  return {
    ...state,
  };
};

export default uiReducer;
