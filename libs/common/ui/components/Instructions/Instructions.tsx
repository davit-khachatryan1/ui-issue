import React from "react";
import styles from "./Instructions.module.scss";

export const Instructions = ({propertyData} : {propertyData: any}) => {
  const instructionsList = propertyData.data?.attributes.Instructions_list;
  return (
    <div className={styles.instructions}>
      <h1 className={styles.instructions__title}>
        {/* How to buy Real Estate on dEquity */}
        {propertyData.data?.attributes.Instructions_title}
      </h1>
      <div className={styles.instructions__table}>
        
        <ul className={styles.instructions__list}>
          {instructionsList?.map((item : any, i : number) => {
            
            const curNumber = i + 1;
            return (
              <li className={styles.instructions__item} key={item.title}>
                <p className={styles.instructions__number}>{curNumber}</p>
                <div className={styles.instructions__info}>
                  <p className={styles.instructions__instructionsTitle}>
                    {item.title}
                  </p>
                  <p className={styles.instructions__instructionsInfo} dangerouslySetInnerHTML={{ __html: item.info }}>                  
                  </p>
                </div>
                {curNumber !== instructionsList.length && <p className={styles.instructions__line}></p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
