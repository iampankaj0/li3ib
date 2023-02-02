import axios from "axios";
import {
  VENUE_FAIL,
  VENUE_REQUEST,
  VENUE_SUCCESS,
} from "../constant/commonConstants";

export const getVenues =
  (page = 1, searchKey) =>
  async (dispatch) => {
    try {
      dispatch({
        type: VENUE_REQUEST,
      });
      const { data } = await axios.get(
        `https://api2.li3ib.com/api/fields?page=${page}&searchKey=${searchKey}`
      );
      dispatch({
        type: VENUE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: VENUE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
