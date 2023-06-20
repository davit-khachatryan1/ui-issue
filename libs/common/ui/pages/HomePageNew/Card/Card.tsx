import React from "react";
import style from "./Card.module.scss";
import cl from "classnames";
import card from "../../../assets/imgs/Card.svg";

export const Accessible = ({ data }: { data: any }) => {
  return (
    <>
      <section className={style.card}>
        <div className={style.card__img}>
          <img src={card.src} alt="card" />
        </div>
        <div className={style.card__content}>
          <h2 className={style.card__title}>
            {/* The card is designed for those who invest */}
            {data?.data?.attributes?.card_title}
          </h2>
          <p className={style.card__text}>
            {/* dEquity® launches a financial solution so you can invest and have your capital handy */}
            {data?.data?.attributes?.card_text}
          </p>
          <span className={style.card__soon}>
            {/* Coming soon 2023 */}
            {data?.data?.attributes?.card_btn}
          </span>
        </div>
        <div className={style.card__decor1}></div>
        <div className={style.card__decor2}></div>
        <div className={style.card__decor3}></div>
      </section>
    </>
  );
};

export default Accessible;
