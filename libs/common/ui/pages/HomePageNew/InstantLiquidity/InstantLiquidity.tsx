import React from "react";
import { useRouter } from "next/router";

import style from "./InstantLiquidity.module.scss";
import cl from "classnames";
import image from "../../../assets/imgs/instantLiquidity/InstantLiquidity-en.png";
import imageMob from "../../../assets/imgs/instantLiquidity/InstantLiquidity-mob-en.png";
import Image from "next/dist/client/image";

export const InstantLiquidity = ({data} : {data : any}) => {
   const { locale } = useRouter();

   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event : any) => {
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
      <div className={style.instant}>
         <div className={style.instant__content}>
            <div className={style.instant__title}>
               {/* Instant liquidity */}
               {data?.data?.attributes?.il_title}
            </div>
            {/* <div className={style.instant__subTitle}> */}
               {/* No holding periods, no lock-ups, 24/7 available */}
               {/* {data?.data?.attributes?.il_subtitle} */}
            {/* </div> */}
         </div>
            <ul className={cl(
                  style.instant__list,
                  locale === 'ar' && style.instant__list_ar
               )}>
               <li className={style.instant__item}>
                  <div className={style.instant__item_title}>
                    {/* Liquidity */}
                    {data?.data?.attributes?.il_list1_title}
                  </div>
                  <div className={style.instant__item_text}>
                     {/* Buy and sell your holdings at any time */}
                     {data?.data?.attributes?.il_list1_text}
                  </div>
               </li>               
               <li className={style.instant__item}>
                  <div className={style.instant__item_title}>
                     {/* Flexibility */}
                     {data?.data?.attributes?.il_list2_title}
                  </div>
                  <div className={style.instant__item_text}>
                     {/* No lockups, no holding periods */}
                     {data?.data?.attributes?.il_list2_text}
                  </div>
               </li>
               <li className={style.instant__item}>
                  <div className={style.instant__item_title}>
                     {/* Control */}
                     {data?.data?.attributes?.il_list3_title}
                  </div>
                  <div className={style.instant__item_text}>
                     {/* You're always in control of your assets, as all units are stored securely in a non-custodial way */}
                     {data?.data?.attributes?.il_list3_text}
                  </div>
               </li>
            </ul>
         <div className={style.instant__img}>
            { widthWindow == null ? "" : widthWindow < 575 ? 
            <img src={imageMob.src} alt="Instant liquidity" /> :
            <img src={image.src} alt="Instant liquidity" />
            
            }
            </div>
         <div className={style.instant__decor1}></div>
         <div className={style.instant__decor2}></div>
      </div>
    </>
  );
};



export default InstantLiquidity;
