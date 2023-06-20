import React, { useState } from "react";
import styles from "./Pagination.module.scss";
import cl from "classnames";
export const Pagination = () => {
   const [active, setActive] = useState("1");
   const pages = [
      {
         number: "<",
      },
      {
         number: "1",
      },
      {
         number: "2",
      },
      {
         number: "3",
      },
      {
         number: "4",
      },
      {
         number: "5",
      },
      {
         number: "6",
      },
      {
         number: "...",
      },
      {
         number: "92",
      },
      {
         number: ">",
      }
   ]  


   return (
      <div className={styles.pagi}>
      <div className={styles.pagi__info}>
         Showing 1 - 50 out of 9228
      </div>
      <div className={styles.pagi__nav}>
         {pages.map((data, i) => (
            <button 
            key={i}
               onClick={() => setActive(data.number)}
               className={cl(
                  styles.pagi__btn,
                  active === data.number && styles["pagi__btn--active"]
               )}
            >{data.number}</button>
        ))}
      </div>
      <div className={styles.pagi__action}>
         Show rows
         <div className={styles.pagi__select}>
            <select name="pagi">
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="50">50</option>
               <option value="100">100</option>
            </select>
         </div>
      </div>
   </div>
   );
 };

export default Pagination;
