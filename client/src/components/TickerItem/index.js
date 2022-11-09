import React from "react";
import cx from "classnames";

import styles from "./TickerItem.module.scss";

const TickerItem = ({
  item: { ticker, price, change, change_percent },
  revItem,
}) => {
  const stylesClChange = {
    [styles.change_up_cl]: price > revItem?.price,
    [styles.change_down_cl]: price < revItem?.price,
  };
  const stylesBgChange = {
    [styles.change_up_bg]: price > revItem?.price,
    [styles.change_down_bg]: price < revItem?.price,
  };

  const stylesChange = cx(styles.change, stylesClChange);
  const stylesChangePercent = cx(
    styles.change_percent,
    stylesClChange,
    stylesBgChange
  );

  return (
    <li className={styles.item}>
      <h2 className={styles.title}>{ticker}</h2>
      <p className={styles.price}>{`${price}$`}</p>
      <p className={stylesChange}>{`${change}$`}</p>
      <p className={stylesChangePercent}>{`${change_percent}%`}</p>
    </li>
  );
};

export default TickerItem;
