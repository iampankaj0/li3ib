import {
  VENUE_FAIL,
  VENUE_REQUEST,
  VENUE_SUCCESS,
} from "../constant/commonConstants";

export const getAllVenues = (state = { venue: [] }, action) => {
  switch (action.type) {
    case VENUE_REQUEST:
      return {
        loading: true,
        venue: [],
      };
    case VENUE_SUCCESS:
      return {
        loading: false,
        venue: action.payload,
      };
    case VENUE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
