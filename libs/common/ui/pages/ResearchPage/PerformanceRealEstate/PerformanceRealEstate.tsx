import React from "react";
import style from "./PerformanceRealEstate.module.scss";
import cl from "classnames";
import grafic from "../../../assets/imgs/RealEstate.svg";





export const PerformanceRealEstate = ({ data }: { data: any }) => {
   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

   React.useEffect(() => {
      const handleResize = (event: any) => {
         setWidthWindow(event.target.innerWidth);
      };
      setWidthWindow(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <>
         <div className={style.performanceRealEstate}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.performanceRealEstate__title}>
                  {/* Performance real estate vs. others */}
                  {data?.data?.attributes?.pre_title}
               </h2>
               : null
            }
            <div className={style.performanceRealEstate__img}>
               <img src={grafic.src} alt="Performance real estate vs. others" />

            </div>
            <div className={style.performanceRealEstate__content}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.performanceRealEstate__title}>
                     {/* Performance real estate vs. others */}
                     {data?.data?.attributes?.pre_title}
                  </h2>
                  : null
               }
               <p className={style.performanceRealEstate__text1}>
                  {/* Miami-Dade County single-family home median prices increased 9.4% year-over-year in November 2022 have risen for 132 consecutive months (11&nbsp;years), the longest running-streak on record */}
                  {data?.data?.attributes?.pre_text1}
               </p>
               <p className={style.performanceRealEstate__text2}>
                  {/* Existing condo median prices increased 14.2% year-over-year, have increased in 133 of the last 138 months. (11.5&nbsp;years)* */}
                  {data?.data?.attributes?.pre_text2}
               </p>
            </div>

            <div className={style.performanceRealEstate__decor1}></div>
         </div>
      </>
   );
};



export default PerformanceRealEstate;
