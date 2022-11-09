import { useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";

import { updateTickers } from "../reducers/tickersReducers";
import CONSTANTS from "../constants";

const {BASE_URL, SOCKET_EVENTS} = CONSTANTS;

const useSocketConnection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(BASE_URL);

    socket.on("connect", () => {
      socket.emit(SOCKET_EVENTS.START);
    });

    socket.on(SOCKET_EVENTS.TICKER, (tickers) => {
      dispatch(updateTickers({ tickers }));
    });
    // eslint-disable-next-line
  }, []);
};

export default useSocketConnection;
