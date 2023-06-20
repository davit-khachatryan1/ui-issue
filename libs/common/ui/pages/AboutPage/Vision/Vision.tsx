import React from "react";

import style from "./Vision.module.scss";
import cl from "classnames";
import imgHome from "../../../assets/imgs/new-investment-class.png";

export const Vision = ({ data }: { data: any }) => {   
   return (
      <div className={style.wrapper}>
         <section className={style.vision}>
            <div className={style.vision__content}>
               <h2 className={style.vision__title}>
                  {/* Vision */}
                  {data?.data?.attributes?.vision_title}
               </h2>
               <p className={style.vision__text}>
                  {/* Real estate investment must be fast, transparent and accessible to everyone. Bridging the industry with blockchain technology will pave the way for retail investors to access borderless Investment worldwide with higher potential liquidity through the secondary market */}
                  {data?.data?.attributes?.vision_text}
               </p>

            </div>
            

            <div dir="ltr" className={style.vision__img}>
               {/* <img src={imgHome.src} alt="New vision class" /> */}
               <img src={imgHome.src} alt={data?.data?.attributes?.vision_title} />
            </div>
         </section>

         <div className={style.decor}></div>
      </div>
   );
};



export default Vision;
