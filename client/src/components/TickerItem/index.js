import React from "react";
import cx from "classnames";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

import styles from "./TickerItem.module.scss";

const TickerItem = ({
  item: { ticker, price, change, change_percent },
  prevItem,
}) => {
  const isPercentUp = change_percent > prevItem?.change_percent;
  const isPercentDown = change_percent < prevItem?.change_percent;

  const stylesClChange = {
    [styles.change_up_cl]: isPercentUp,
    [styles.change_down_cl]: isPercentDown,
  };
  const stylesBgChange = {
    [styles.change_up_bg]: isPercentUp,
    [styles.change_down_bg]: isPercentDown,
  };

  const stylesChange = cx(styles.change, stylesClChange);
  const stylesChangePercent = cx(
    styles.change_percent_box,
    stylesClChange,
    stylesBgChange
  );

  return (
    <li className={styles.item}>
      <h2 className={styles.title}>{ticker}</h2>
      <p className={styles.price}>{`${price} $`}</p>
      <p className={stylesChange}>{`${change} $`}</p>
      <div className={stylesChangePercent}>
        {prevItem?.change_percent &&
          change_percent !== prevItem?.change_percent &&
          (isPercentUp ? <IoArrowUpOutline /> : <IoArrowDownOutline />)}
        <p className={styles.change_percent}>{`${change_percent} %`}</p>
      </div>
    </li>
  );
};

export default TickerItem;
