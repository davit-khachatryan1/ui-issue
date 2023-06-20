import React, { useState, useRef } from "react";
import styles from "./Filter.module.scss";
import cl from "classnames";
import { Select } from "../../components";
export const Filter = ({ visible, marketData }: { visible: any, marketData: any }) => {
   const [active, setActive] = useState<"all" | "new" | "upcoming">("all");
   const assetClass = [
      'All Classes',
      'Single Family',
      'Mixed-use',
      'Boutique Hotel',
      'Condominium'
   ]
   const location = [
      'All Locations',
      'Miami'
   ]

   const [rangeValue, setRangeValue] = useState(2);
   const [rangeValueMin] = useState(2);
   const [rangeValueMax] = useState(48);
   const rangePosLine = React.useRef<HTMLDivElement>(null);
   const rangePosTitle = useRef<HTMLSpanElement>(null);

   function handleChangeRange(event: any) {
      setRangeValue(event.target.value);
   }

   React.useEffect(() => {
      if (!visible) return;
      if (rangeValue < rangeValueMin) setRangeValue(rangeValueMin);
      else if (rangeValue > rangeValueMax) setRangeValue(rangeValueMax);
      else {
         const fullWidth = 100 / (rangeValueMax - rangeValueMin) * (rangeValue - rangeValueMin);
         if (rangePosLine.current !== null && rangePosTitle.current !== null) {
            rangePosLine.current.style.width = `${fullWidth}%`;
            // rangePosTitle.current.style.left = `${fullWidth}%`;
            // rangePosTitle.current.style.transform = `translateX(-${fullWidth}%)`;
         }
      }
   }, [rangeValue, visible]);


   return (
      <div>
         {visible ? (
            <div className={styles.filter}>
               <div className={styles.filter__item}>
                  <div className={styles.filter__name}>
                     {/* Asset Class */}
                     {marketData.data?.attributes.select_assetClass}
                  </div>
                  <Select options={assetClass} val={0} />
               </div>
               <div className={styles.filter__item}>
                  <div className={styles.filter__name}>
                     {/* Location */}
                     {marketData.data?.attributes.select_location}
                  </div>
                  <Select options={location} val={0} />
               </div>
               <div className={styles.filter__item}>
                  <div className={styles.filter__name}>
                     {/* Yield Range */}
                     {marketData.data?.attributes.range}
                  </div>
                  <div className={styles.filter__range_wrapper}>
                     <div className={cl(styles.filter__range, styles.range)}>
                        <div className={styles.range__line_line}>
                           <input className={styles.range__line_range} type="range" min={rangeValueMin} max={rangeValueMax} value={rangeValue} onChange={(ev) => handleChangeRange(ev)} />
                           <div className={styles.range__line_null}></div>
                           <div ref={rangePosLine} className={styles.range__line_full}></div>
                           <span ref={rangePosTitle} className={styles.range__line_value}>{rangeValue}%</span>
                        </div>
                     </div>
                     <div className={styles.filter__info}>
                        <div className={styles.filter__info_min}>{rangeValueMin}%</div>
                        <div className={styles.filter__info_max}>{rangeValueMax}%</div>
                     </div>
                  </div>
               </div>
               <div className={styles.filter__item}>
                  <div className={styles.filter__name}>
                     {/* Properties */}
                     {/* {marketData.data?.attributes.properties} */}
                  </div>
                  <div className={styles.filter__btns}>
                     <div className={styles.filter__btn_list}>
                        <button
                           onClick={() => setActive("all")}
                           className={cl(
                              styles.filter__btn,
                              active === "all" && styles["filter__btn--active"]
                           )}>
                              {/* All */}
                              {marketData.data?.attributes.properties_all}
                        </button>
                        <button
                           onClick={() => setActive("new")}
                           className={cl(
                              styles.filter__btn,
                              active === "new" && styles["filter__btn--active"]
                           )}>
                              {/* New */}
                              {marketData.data?.attributes.properties_new}
                           </button>
                        <button
                           onClick={() => setActive("upcoming")}
                           className={cl(
                              styles.filter__btn,
                              active === "upcoming" && styles["filter__btn--active"]
                           )}>
                              {/* Upcoming */}
                              {marketData.data?.attributes.properties_upcoming}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )
            :
            (null)
         }
      </div>
   );
};

export default Filter;
