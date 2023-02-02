import {
  AREA_FAIL,
  AREA_REQUEST,
  AREA_SUCCESS,
} from "../constant/commonConstants";

export const getAllAreas = (state = { area: [] }, action) => {
  switch (action.type) {
    case AREA_REQUEST:
      return {
        loading: true,
        area: [],
      };
    case AREA_SUCCESS:
      return {
        loading: false,
        area: action.payload,
      };
    case AREA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
