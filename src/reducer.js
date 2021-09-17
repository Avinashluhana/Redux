import * as actions from "./actions";

export default function reducer(state = [], action) {
  let lastId = 0;
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          descripton: action.playload.descripton,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.playload);

    // case actions.BUG_RESOLVED:
    //     return resolved

    default:
      return state;
  }
}
