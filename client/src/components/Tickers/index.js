import React from "react";
import TickersList from "../TickersList";

import styles from "./Tickers.module.scss";

const Tickers = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}> price ticker service</h1>
          <TickersList />
        </div>
      </div>
    </section>
  );
};

export default Tickers;
