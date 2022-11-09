import { createSlice } from "@reduxjs/toolkit";

const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    tickers: [],
  },
  reducers: {
    updateTickers(state, { payload: { tickers } }) {
      state.tickers = tickers;
    }
  },
});

export const { updateTickers } = tickersSlice.actions;

export default tickersSlice.reducer;