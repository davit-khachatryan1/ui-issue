import React, { useState } from "react";
import { FilterGridIcon, FilterListIcon, FilterParamsIcon } from "../../shared";
import styles from "./FilterBtns.module.scss";
import cl from "classnames";

export const FilterBtns = ({visible, setVisible, filterName} : {visible : any, setVisible : any, filterName: string}) => {
   const [active, setActive] = useState<"grid" | "list">("list");
   return (
    <div className={styles.filterBtns}>
      {visible || true ? (
        <div className={styles.filterBtns__view}>
          <button
            onClick={() => setActive("grid")}
            className={cl(
              styles.filterBtns__viewButton,
              active === "grid" && styles["filterBtns__viewButton--active"],
              visible && styles["filterBtns__viewButton--active-filter"]
            )}
          >
            <FilterGridIcon
              className={styles.filterBtns__viewGrid}
            />
          </button>
          <button
            onClick={() => setActive("list")}
            className={cl(
              styles.filterBtns__viewButton,
              active === "list" && styles["filterBtns__viewButton--active"],
              visible && styles["filterBtns__viewButton--active-filter"]
            )}
          >
            <FilterListIcon
              className={styles.filterBtns__viewList}
            />
          </button>
        </div>
      )
        :
        (null)
      }
      <div
        className={cl(styles.filterBtns__params
         , visible && styles["filterBtns__params--active"]
         )}
        onClick={() => setVisible(!visible)}
      >
        <FilterParamsIcon />
        <p className={styles.filterBtns__paramsText}>
         {/* Filters */}
         {filterName}
        </p>
      </div>
    </div>
  );
};

export default FilterBtns;
