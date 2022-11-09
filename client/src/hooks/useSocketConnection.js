import { useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";

import { updateTickers } from "../reducers/tickersReducers";

const useSocketConnection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", () => {
      socket.emit("start");
    });

    socket.on("ticker", (tickers) => {
      dispatch(updateTickers({ tickers }));
    });
    // eslint-disable-next-line
  }, []);
};

export default useSocketConnection;
