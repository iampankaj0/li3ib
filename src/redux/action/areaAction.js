import axios from "axios";
import {
  AREA_FAIL,
  AREA_REQUEST,
  AREA_SUCCESS,
} from "../constant/commonConstants";

export const getAreas = () => async (dispatch) => {
  try {
    dispatch({
      type: AREA_REQUEST,
    });
    const { data } = await axios.get("https://api2.li3ib.com/api/home/areas");
    dispatch({
      type: AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AREA_FAIL,
      payload: error.response.data.message,
    });
  }
};
