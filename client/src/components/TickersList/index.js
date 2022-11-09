import React from "react";
import { useSelector } from "react-redux";

import usePrevious from "../../hooks/usePrevius";
import useSocketConnection from "../../hooks/useSocketConnection";
import TickerItem from "../TickerItem";

import styles from "./TickersList.module.scss";

const TickersList = () => {
  useSocketConnection();

  const { tickers } = useSelector((state) => state.tickers);

  const prevTickers = usePrevious(tickers);

  const showTickers = () =>
    tickers.map((item, index) => (
      <TickerItem item={item} prevItem={prevTickers[index]} key={item.ticker}/>
    ));

  return (
    <>
      <ul className={styles.list}>{showTickers()}</ul>
    </>
  );
};

export default TickersList;
