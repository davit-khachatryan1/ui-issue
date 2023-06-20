import { FC } from "react";
import cl from "classnames";
import styles from "./ComingSoonCard.module.scss";

interface ComingSoonCard {
  propertyName: string;
  propertyLocation: string;
  income: number;
}
export const ComingSoonCard: FC<ComingSoonCard> = ({
  income,
  propertyLocation,
  propertyName,
}) => {
  const percent = Math.abs(income) + "%";
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <div className={styles.card__top}>
           <div>
              <h6 className={styles.card__name}>{propertyName}</h6>
              <p className={styles.card__location}>{propertyLocation}</p>
           </div>
            <p
               className={cl(
                  styles.card__percent,
                  income < 0
                  ? styles["card__percent--neg"]
                  : styles["card__percent--pos"]
                  )}
            >          
               {percent}
            </p>
        </div>
        <div className={styles.card__item}>
           <p className={styles.card__item_name}>Ticker</p>
           <p className={styles.card__currency}>EXR</p>
        </div>
        <div className={styles.card__item}>
           <p className={styles.card__item_name}>Asset Class</p>
           <p className={styles.card__currency}>Multifamily</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
