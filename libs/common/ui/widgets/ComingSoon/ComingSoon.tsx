import React from "react";
import { ComingSoonCard } from "../../components/ComingSoonCard";
import styles from "./ComingSoon.module.scss";

export const ComingSoon = () => {
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
    <div className={styles.comingSoon}>
      <h2 className={styles.comingSoon__title}>Coming Soon</h2>
      <div className={styles.comingSoon__cards}>
        {cardsInfo.map((card, i) => (
          <ComingSoonCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
