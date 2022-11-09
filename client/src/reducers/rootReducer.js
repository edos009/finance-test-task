import { combineReducers } from "@reduxjs/toolkit";
import tickersReducers from "./tickersReducers.js";

const rootReducer = combineReducers({
  tickers: tickersReducers,
});

export default rootReducer;
