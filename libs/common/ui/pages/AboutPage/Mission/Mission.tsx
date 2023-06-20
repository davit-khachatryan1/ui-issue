import React from "react";

import style from "./Mission.module.scss";
import cl from "classnames";
import imgHome from "../../../assets/imgs/mission.png";

export const Mission = ({ data }: { data: any }) => {   
   return (
      <div className={style.wrapper}>
        <section className={style.vision}>

            <div dir="ltr" className={style.vision__img}>
               {/* <img src={imgHome.src} alt="New vision class" /> */}
               <img src={imgHome.src} alt="New vision class" />
            </div>

            <div className={style.vision__content}>
               <h2 className={style.vision__title}>
                  {/* Mission */}
                  {data?.data?.attributes?.mission_title}
               </h2>
               <p className={style.vision__text}>
                  {/* Our mission is to streamline and simplify the global investing process and ensure equality of opportunity by combining Real Estate and DeFi with pioneering NFT technology, (r)evolutionizing how real estate is bought, sold and managed */}
                  {data?.data?.attributes?.mission_text}
               </p>

            </div>
            
            

            
         </section>

         <div className={style.decor1}></div>
         <div className={style.decor2}></div>
      </div>
   );
};



export default Mission;
