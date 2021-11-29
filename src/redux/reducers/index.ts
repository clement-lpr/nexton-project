import { combineReducers } from "redux";
import offerReducer from "./offerReducer/offerReducer";

const rootReducer = combineReducers({
  offers: offerReducer,
});

export default rootReducer;
