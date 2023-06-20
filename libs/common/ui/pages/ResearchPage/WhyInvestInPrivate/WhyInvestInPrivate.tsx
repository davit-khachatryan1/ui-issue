import React from "react";

import style from "./WhyInvestInPrivate.module.scss";
import cl from "classnames";
// import gragic from "../../../assets/imgs/WhyInvestInPrivate.svg";
import gragic from "../../../assets/imgs/WhyInvestInPrivate.png";



export const WhyInvestInPrivate = ({ data }: { data: any }) => {
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
         <div className={style.whyInvestInPrivate}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.whyInvestInPrivate__title}>
                  {/* Why invest in private real estate? */}
                  {data?.data?.attributes?.whyiip_title}
               </h2>
               : null
            }
            <div className={style.whyInvestInPrivate__content}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.whyInvestInPrivate__title}>
                     {/* Why invest in private real estate? */}
                     {data?.data?.attributes?.whyiip_title}
                  </h2>
                  : null
               }
               <p className={style.whyInvestInPrivate__text1}>
                  {/* Private real estate, especially in fractional ownership structure, can provide great portfolio diversification, low public market correlation, less volatility, an inflation hedge, cash flow and long-term appreciation over time */}
                  {data?.data?.attributes?.whyiip_text}
               </p>

            </div>
            <div className={style.whyInvestInPrivate__img}><img src={gragic.src} alt={data?.data?.attributes?.whyiip_title} /></div>

            <div className={style.whyInvestInPrivate__decor1}></div>
         </div>
      </>
   );
};



export default WhyInvestInPrivate;
