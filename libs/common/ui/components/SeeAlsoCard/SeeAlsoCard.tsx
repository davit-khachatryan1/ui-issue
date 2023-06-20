import { FC } from "react";
import cl from "classnames";
import styles from "./SeeAlsoCard.module.scss";
import { Graph } from "../../shared";

interface ISeeAlsoCard {
  propertyName: string;
  propertyLocation: string;
  income: number;
}
export const SeeAlsoCard: FC<ISeeAlsoCard> = ({
  income,
  propertyLocation,
  propertyName,
}) => {
  const percent = Math.abs(income) + "%";
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <div className={styles.card__item}>
           <h6 className={styles.card__name}>{propertyName}</h6>
           <p
             className={cl(
               styles.card__percent,
               income < 0
                 ? styles["card__percent--neg"]
                 : styles["card__percent--pos"]
             )}
           >
             <svg
               className={styles.card__percentTip}
               width="10"
               height="7"
               viewBox="0 0 10 7"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M9.08464 7L0.917969 7L5.0013 2.98349e-07L9.08464 7Z"
                 fill="white"
               />
             </svg>
             {percent}
           </p>
        </div>
        <div className={styles.card__item}>
           <p className={styles.card__location}>{propertyLocation}</p>
           <p className={styles.card__currency}>EXR</p>
        </div>
      </div>
      <Graph
      idGraph={0}
        className={cl(
          styles.card__graph,
          income < 0 && styles["card__graph--neg"]
        )}
      />
    </div>
  );
};

export default SeeAlsoCard;
