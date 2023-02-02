import axios from "axios";
import {
  SPORTS_FAIL,
  SPORTS_REQUEST,
  SPORTS_SUCCESS,
} from "../constant/commonConstants";

export const getSports = () => async (dispatch) => {
  try {
    dispatch({
      type: SPORTS_REQUEST,
    });
    const { data } = await axios.get("https://api2.li3ib.com/api/home/sports");
    dispatch({
      type: SPORTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPORTS_FAIL,
      payload: error.response.data.message,
    });
  }
};
