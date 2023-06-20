import { FC } from "react";
import { Apartment, Area, Bath, Bed } from "../../shared";
import styles from "./RealtyInfoCard.module.scss";

interface IRealtyInfoCard {
  type: "bed" | "bath" | "area" | "apartment";
  text: string;
  value: string | number;
}
export const RealtyInfoCard: FC<IRealtyInfoCard> = ({ text, type, value }) => {
  const respectiveLogos = {
    bed: <Bed />,
    bath: <Bath />,
    area: <Area />,
    apartment: <Apartment />,
  };
  return (
    <div className={styles.card}>
      {respectiveLogos[type]}
      <p className={styles.card__text}>{value} {text}</p>
    </div>
  );
};

export default RealtyInfoCard;
