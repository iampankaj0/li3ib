import {
  SPORTS_FAIL,
  SPORTS_REQUEST,
  SPORTS_SUCCESS,
} from "../constant/commonConstants";

export const getAllSports = (state = { sports: [] }, action) => {
  switch (action.type) {
    case SPORTS_REQUEST:
      return {
        loading: true,
        sports: [],
      };
    case SPORTS_SUCCESS:
      return {
        loading: false,
        sports: action.payload,
      };
    case SPORTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
