import { FC, useState } from "react";
import { FilterBtns, Filter } from "../../components";
import styles from "./AgentTable.module.scss";
import cl from "classnames";
import { Graph, Tooltip } from "../../shared";
import Link from 'next/link'

export type TableData = {
  property: {
    title: string;
    location: string;
  };
  yield: number[];
  price: number;
  ticker: string;
  isProfit: boolean;
};

interface IAgentTable {
  tableData: TableData[],
  marketData: any;
}
export const AgentTable: FC<IAgentTable> = ({ tableData, marketData }) => {
   const [visibleFilter, setVisibleFilter] = useState(false); 
   return (
    <div className={styles.agentTable}>
      <div className={styles.agentTable__top}>
        <h1 className={styles.agentTable__title}>
         {/* Deal-by-Deal Investing */}
         {marketData.data?.attributes.title}
         </h1>
        <FilterBtns visible={visibleFilter} setVisible={setVisibleFilter} filterName={marketData.data?.attributes.filter_name} />
      </div>
      <Filter visible={visibleFilter} marketData={marketData} />
      <ul className={styles.agentTable__table}>
        <li
          className={cl(
            styles.agentTable__item,
            styles["agentTable__itemHeader"]
          )}
        >
          <p className={styles.agentTable__headerText}>
            {/* Property */}
            {marketData.data?.attributes.table_property}
          </p>
          <p className={styles.agentTable__headerText}>
            {/* Yield Range  */}
            {marketData.data?.attributes.table_yieldRange}
            <Tooltip className={styles.agentTable__tooltip} />
          </p>
          <p className={styles.agentTable__headerText}>
            {/* Price */}
            <span>{marketData.data?.attributes.table_price}</span>
          </p>
          <p className={styles.agentTable__headerText}>
            {/* Ticker */}
            {marketData.data?.attributes.table_ticker}
          </p>
          <p className={styles.agentTable__headerText}>
            {/* Last 30 Days */}
            {marketData.data?.attributes.table_lastDays}
            <Tooltip className={styles.agentTable__tooltip} />
          </p>
          <span className={styles.agentTable__headerText}></span>
        </li>
        {tableData.map((data, i) => (

          <Link key={i} href="/property">
            <li className={styles.agentTable__item}>
              <div className={styles.agentTable__property}>
                <p className={styles.agentTable__propertyTitle}>
                  {data.property.title}
                </p>
                <p className={styles.agentTable__propertyLocation}>
                  {data.property.location}
                </p>
              </div>
              <p className={styles.agentTable__yield}>
                {data.yield[0] + "% — " + data.yield[1] + "%"}
              </p>
              <p className={styles.agentTable__text}>
                {data.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className={cl(styles.agentTable__text, styles.agentTable__ticker)} >{data.ticker}</p>
              <Graph idGraph={i} className={cl(styles.agentTable__graph, !data.isProfit && styles['agentTable__graph--no-profit'])} />
              <span className={styles.agentTable__invest}>
                <div className={cl(styles.navbar__btns_btn)}>
                  <span className={cl(styles.agentTable__invest_btn)}>
                     {/* Invest */}
                     {marketData.data?.attributes.btn}
                  </span>
                </div>
              </span>
            </li>
          </Link>
        ))}
      </ul>
      {/* <Pagination />             */}
    </div>
  );
};

export default AgentTable;
