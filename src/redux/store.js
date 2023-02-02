import { getAllAreas } from "./reducer/areaReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllVenues } from "./reducer/venueReducer";

const reducers = combineReducers({
  area: getAllAreas,
  venues: getAllVenues,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
