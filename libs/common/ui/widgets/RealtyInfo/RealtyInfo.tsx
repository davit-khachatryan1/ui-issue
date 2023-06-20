import { FC, useState } from "react";
import { RealtyInfoCard } from "../../components";
import styles from "./RealtyInfo.module.scss";
import cl from "classnames";
import { DownloadIcon } from "../../shared";
import { Tooltip } from "../../shared";

import homeValueImg from "../../assets/imgs/market Analysis/homeValueIndex.svg";
import rentImg from "../../assets/imgs/market Analysis/rentIndex.svg";

interface IRealtyInfo {
  text: string[];
  year: number;
  address: string;
  propertyType: string;
  ticker: string;
  dues: number;
  distribution: string;
  downloads: string[];
  propertyData : any;
}

export const RealtyInfo: FC<IRealtyInfo> = ({
  address,
  dues,
  propertyType,
  text,
  ticker,
  year,
  distribution,
  downloads,
  propertyData 
}) => {
  const cardsData = [
    { type: "bed", value: "5", text: propertyData.data?.attributes.RealtyInfo_cards_bed },
    { type: "bath", value: "3", text: propertyData.data?.attributes.RealtyInfo_cards_bath },
    { type: "area", value: "3692", text: propertyData.data?.attributes.RealtyInfo_cards_area },
    { type: "apartment", value: "Mixed-use", text: propertyData.data?.attributes.RealtyInfo_cards_apartment },
  ] as const;

  const Information = () => {
    return (
      <>
        <div className={styles.realtyInfo__cards}>
          {cardsData.map((card) => (
            <RealtyInfoCard key={card.type} {...card} />
          ))}
        </div>
        <div>
          {text.map((textItem, i) => (
            <p className={styles.realtyInfo__text} key={i}>
              {textItem}
            </p>
          ))}
        </div>
        <ul className={styles.realtyInfo__list}>
          <li className={styles.realtyInfo__item}>
            <p className={styles.realtyInfo__itemTitle}>
               {/* Address */}
               {propertyData.data?.attributes.address}
            </p>
            <p className={styles.realtyInfo__itemValue}>{address}</p>
          </li>
          <li className={styles.realtyInfo__item}>
            <p className={styles.realtyInfo__itemTitle}>
               {/* Year built */}
               {propertyData.data?.attributes.yearBuilt}
            </p>
            <p className={styles.realtyInfo__itemValue}>{year}</p>
          </li>
          <li className={styles.realtyInfo__item}>
            <p className={styles.realtyInfo__itemTitle}>
               {/* Property type */}
               {propertyData.data?.attributes.propertyType}
            </p>
            <p className={styles.realtyInfo__itemValue}>{propertyType}</p>
          </li>
          <li className={styles.realtyInfo__item}>
            <p className={styles.realtyInfo__itemTitle}>
               {/* Ticker */}
               {propertyData.data?.attributes.ticker}
            </p>
            <p className={styles.realtyInfo__itemValue}>{ticker}</p>
          </li>
          <li className={styles.realtyInfo__item}>
            <p className={styles.realtyInfo__itemTitle}>
               {/* Monthly dues/HOA */}
               {propertyData.data?.attributes.monthlyDues}
            </p>
            <p className={styles.realtyInfo__itemValue}>
              {dues.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </li>
        </ul>
      </>
    );
  };
  const KeyStats = () => {
    return (
      <ul
        className={cl(
          styles.realtyInfo__list,
          styles["realtyInfo__list--keystats"]
        )}
      >
        <li className={styles.realtyInfo__item}>
          <p className={styles.realtyInfo__itemTitle}>
            {/* Year built */}
            {propertyData.data?.attributes.yearBuilt}
         </p>
          <p className={styles.realtyInfo__itemValue}>{year}</p>
        </li>
        <li className={styles.realtyInfo__item}>
          <p className={styles.realtyInfo__itemTitle}>
            {/* Property type */}
            {propertyData.data?.attributes.propertyType}
          </p>
          <p className={styles.realtyInfo__itemValue}>{propertyType}</p>
        </li>
        <li className={styles.realtyInfo__item}>
          <p className={styles.realtyInfo__itemTitle}>
            {/* Ticker */}
            {propertyData.data?.attributes.ticker}
          </p>
          <p className={styles.realtyInfo__itemValue}>{ticker}</p>
        </li>
        <li className={styles.realtyInfo__item}>
          <p className={styles.realtyInfo__itemTitle}>
            {/* Distribution */}
            {propertyData.data?.attributes.distribution}
          </p>
          <p className={styles.realtyInfo__itemValue}>{distribution}</p>
        </li>
      </ul>
    );
  };
  const Documents = () => {
    return (
      <ul
        className={cl(
          styles.realtyInfo__list,
          styles["realtyInfo__list--documents"]
        )}
      >
        <li
          className={cl(
            styles.realtyInfo__item,
            styles["realtyInfo__item--documents"],
            styles["realtyInfo__item--documentsHeader"]
          )}
        >
          <p className={styles.realtyInfo__itemTitle}>
            {/* Name */}
            {propertyData.data?.attributes.Documents_name}
          </p>
          <p className={styles.realtyInfo__itemTitle}>
            {/* Download */}
            {propertyData.data?.attributes.Documents_download}
          </p>
        </li>
        {downloads.map((d) => (
          <li
            className={cl(
              styles.realtyInfo__item,
              styles["realtyInfo__item--documents"]
            )}
            key={d}
          >
            <p className={styles.realtyInfo__itemValue}>{d}</p>
            <DownloadIcon className={styles.realtyInfo__download} />
          </li>
        ))}
      </ul>
    );
  };
  const MarketAnalysis  = () => {
    return (
      <div className={styles.realtyInfo__analysis}>
         <div className={styles.realtyInfo__analysis_item}>
            <div className={styles.realtyInfo__analysis_name}>
               {/* Home Value Index */}
               {propertyData.data?.attributes.marketAnalysisHome}
               <Tooltip className={styles.realtyInfo__analysis_tooltipIcon} />
            </div>
            <div className={styles.realtyInfo__analysis_graf}><img src={ homeValueImg.src } alt={propertyData.data?.attributes.marketAnalysisHome} /></div>
            <div className={styles.realtyInfo__analysis_link}>Source: www.zillow.com</div>
         </div>
         <div className={styles.realtyInfo__analysis_item}>
            <div className={styles.realtyInfo__analysis_name}>
               {/* Rent Index  */}
               {propertyData.data?.attributes.marketAnalysisRent}
               <Tooltip className={styles.realtyInfo__analysis_tooltipIcon} />
            </div>
            <div className={styles.realtyInfo__analysis_graf}><img src={ rentImg.src } alt={propertyData.data?.attributes.marketAnalysisRent} /></div>
            <div className={styles.realtyInfo__analysis_link}>Source: www.zillow.com</div>
         </div>
      </div>
    );
  };
  const tabsComponents = {
    1: <Information />,
    2: <KeyStats />,
    3: <Documents />,
    4: <Information />,
    5: <MarketAnalysis />,
  } as const;

  const [curTab, setCurTab] =
    useState<keyof typeof tabsComponents>(1);

  return (
    <div className={styles.realtyInfo}>
      <div className={styles.realtyInfo__tabsWrapper}>
        <div className={styles.realtyInfo__tabs}>
          {propertyData.data?.attributes.RealtyInfo_tabs?.split("\n").map((tab : any, i : any) => (
            <button
              onClick={() => setCurTab(i+1)}
              className={cl(
                styles.realtyInfo__tab,
                i+1 === curTab && styles["realtyInfo__tab--active"]
              )}
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div></div>
      {tabsComponents[curTab]}
    </div>
  );
};

export default RealtyInfo;
