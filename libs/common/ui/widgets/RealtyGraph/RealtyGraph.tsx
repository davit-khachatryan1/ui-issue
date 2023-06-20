import { FC, useState } from "react";
import { MarketArrow, RealtyGraphExample } from "../../shared";
import styles from "./RealtyGraph.module.scss";
import cl from "classnames";

interface IRealtyGraph {
  address: string;
  price: number;
  preMarket: number;
  percent: number;
  preMarketName: string;
}

export const RealtyGraph: FC<IRealtyGraph> = ({
  address,
  preMarket,
  price,
  percent,
  preMarketName,
}) => {
  const [selected, setSelected] = useState("1D");
  const dateInterval = ["1D", "1W", "1M", "3M", "6M", "1Y", "3Y"];
  return (
    <div className={styles.realtyGraph}>
      <div className={styles.realtyGraph__salesInfo}>
        <p className={styles.realtyGraph__salesAddress}>{address}</p>
        <p className={styles.realtyGraph__currency}>EXR</p>
        <p className={styles.realtyGraph__salesPrice}>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className={styles.realtyGraph__salesPremarket}>
          <p>
            {/* Pre-market */}
            {preMarketName}
          </p>
          <span>
            <MarketArrow />
            {preMarket.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            ({percent + "%"})
          </span>
        </div>
        
      </div>
      <div className={styles.realtyGraph__updateTime}>Last Update $21.20 Dec 01 at 12:00 AM</div>
      <div className={styles.realtyGraph__graph}>
        <RealtyGraphExample className={styles.realtyGraph__graphExample} />
      </div>
      <div className={styles.realtyGraph__controls}>
        <ul className={styles.realtyGraph__controlsDates}>
          {dateInterval.map((date) => (
            <li key={date}>
              <button
                onClick={() => setSelected(date)}
                className={cl(
                  styles.realtyGraph__controlsDate,
                  date === selected &&
                    styles["realtyGraph__controlsDate--selected"]
                )}
              >
                {date}
              </button>
            </li>
          ))}
        </ul>        
      </div>
    </div>
  );
};

export default RealtyGraph;
