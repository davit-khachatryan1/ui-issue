import React from "react";
import { SeeAlsoCard } from "../../components/SeeAlsoCard";
import styles from "./SeeAlso.module.scss";

export const SeeAlso = ({title} : {title : string}) => {
  const cardsInfo = [
    {
      propertyName: "Mixed-use",
      propertyLocation: "Miami, FL",
      income: 12.24,
    },
    {
      propertyName: "Condominium",
      propertyLocation: "Miami, FL",
      income: 11.24,
    },
    {
      propertyName: "Boutique Hotel",
      propertyLocation: "Miami, FL",
      income: -5.14,
    },
    {
      propertyName: "Condominium",
      propertyLocation: "Miami, FL",
      income: 8.24,
    },
    {
      propertyName: "Condominium",
      propertyLocation: "Miami, FL",
      income: 10.24,
    },
  ];
  return (
    <div className={styles.seeAlso}>
      <h2 className={styles.seeAlso__title}>
         {/* See Also */}
         {title}
      </h2>
      <div className={styles.seeAlso__cards}>
        {cardsInfo.map((card, i) => (
          <SeeAlsoCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SeeAlso;
