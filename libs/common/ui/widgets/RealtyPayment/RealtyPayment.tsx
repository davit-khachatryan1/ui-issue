import React, { useState } from "react";
import { Breadcrumbs, Button, Counter } from "../../components";
import { Tooltip } from "../../shared";
import styles from "./RealtyPayment.module.scss";
import cl from 'classnames';
import Link from 'next/link'

export const RealtyPayment = ({propertyData} : {propertyData : any}) => {
  const [count, setCount] = useState(1);

  const counterHandler = (method: 'incr' | 'decr') => {
    if (count <= 1 && method === 'decr') return;
    if (method === 'incr') {
      setCount(c => c + 1)
    } else {
      setCount(c => c - 1)
    }
  }

  const breadcrumbsItems = [
    {
      // title: 'Properties',
      title: propertyData.data?.attributes.breadcrumb_1,
      link: '/'
    },
    '100 Ocean Drive'
  ]
  return (
    <div className={styles.payment}>
      <Breadcrumbs items={breadcrumbsItems} />
      {/* <ul className={styles.payment__breadcrumbs}>
        <li>Properties</li>
        <li>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.55859 5.16602L10.2253 8.49935L7.55859 11.8327"
              stroke="#B2BCC6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li>100 Coming Soon</li>
      </ul> */}
      <div className={styles.payment__property}>
        <p>100 Ocean Drive, Miami, FL 33259</p>
        <p>
          {/* Ticker */}
          {propertyData.data?.attributes.RealtyPayment_ticker}
          : { }           
          <span>EXR</span>
        </p>
      </div>
      <div className={styles.payment__preliminary}>
        <div className={styles.payment__preliminaryItem}>
          <div className={styles.payment__preliminaryName}>
            <p>
               {/* Yield */}
               {propertyData.data?.attributes.RealtyPayment_yield}
            </p>
            <Tooltip className={styles.payment__tooltipIcon} />
          </div>
          <p className={styles.payment__preliminaryValue}>14.2%</p>
          <p className={styles.payment__preliminaryTip}>
            {/* min yield */}
            {propertyData.data?.attributes.RealtyPayment_minYield}
            : 
          12.1%</p>
        </div>
        <div className={styles.payment__preliminaryItem}>
          <div className={styles.payment__preliminaryName}>
            <p>
               {/* Estimated Price */}
               {propertyData.data?.attributes.RealtyPayment_estimatedPrice}
            </p>
            <Tooltip className={styles.payment__tooltipIcon} />
          </div>
          <p className={styles.payment__preliminaryValue}>$100.00</p>
          <p className={styles.payment__preliminaryTip}>
            {/* per unit */}
            {propertyData.data?.attributes.RealtyPayment_perUnit}
          </p>
        </div>
      </div>
      <ul className={styles.payment__info}>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Available units */}
            {propertyData.data?.attributes.RealtyPayment_availableUnits}
          </p>
          <p className={styles.payment__infoNum}>12,929</p>
        </li>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Units quantity */}
            {propertyData.data?.attributes.RealtyPayment_unitsQuantity}
          </p>
          <Counter count={count} counterHandler={counterHandler} />
        </li>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Yield limit */}
            {propertyData.data?.attributes.RealtyPayment_yieldLimit}
          </p>
          <p className={cl(styles.payment__infoNum, styles.payment__yieldLimit)}>13.0<span>%</span></p>
        </li>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Price per unit */}
            {propertyData.data?.attributes.RealtyPayment_PricePerUnit}
          </p>
          <p className={styles.payment__infoNum}>$100.00</p>
        </li>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Estimated Price */}
            {propertyData.data?.attributes.RealtyPayment_estimatedPrice}
          </p>
          <p className={styles.payment__infoNum}>{(100.00 * count).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        </li>
      </ul>
      <Link href="/payment">
        <Button className={styles.payment__btn} type="regular" width="wide">
            {/* Go to Payment */}
            {propertyData.data?.attributes.btn}
        </Button>
      </Link>

    </div>
  );
};

export default RealtyPayment;
