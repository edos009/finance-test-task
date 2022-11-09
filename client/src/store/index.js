import { configureStore } from "@reduxjs/toolkit";
import tickersReducers from "reducers/tickersReducers";

const store = configureStore({
  reducer: {
    tickers: tickersReducers,
  },
});

export default store;
