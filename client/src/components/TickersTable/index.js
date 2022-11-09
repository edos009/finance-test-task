import React from "react";
import { useSelector } from "react-redux";
import usePrevious from "../../hooks/usePrevius";
import useSocketConnection from "../../hooks/useSocketConnection";

const TickersTable = () => {
  useSocketConnection();

  const { tickers } = useSelector((state) => state.tickers);

  const prevTickers = usePrevious(tickers);

  return (
    <>
      <section>
        <div>
          <ul>
            {tickers.map(({ ticker, price, change_percent, change }) => (
              <li key={ticker}>
                <h2>{ticker}</h2>
                <p>{price}</p>
                <p>{change}</p>
                <p>{change_percent}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TickersTable;
