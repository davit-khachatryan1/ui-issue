import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";

import style from "./Map.module.scss";
import cl from "classnames";

import ArrowRightIcon from "../../../assets/imgs/Group 21.png";

export const NewInvestmentClass = ({data} : {data : any}) => {

   const dispatch = useDispatch();
   const { locale } = useRouter();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

   return (
      <>
         <div className={style.wrapper}>
            <div className={style.map}>
               <div className={style.map__content}>
                  <div className={style.map__title}>
                     {/* We believe that democracy is the strongest when everyone has ownership */}
                     {data?.data?.attributes?.map_title}
                  </div>
                  <a className={cl(style.map__link,
                     locale === 'ar' && style.map__link_ar
                     )} onClick={handleToggleModal}>
                     {/* Join real estate investing (R)evolution */}
                     {data?.data?.attributes?.map_subtitle}
                     <span className={style.map__link_arrow}></span>
                     {/* <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9.29053H27.592" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" />
                        <path d="M22.9492 2.1582L30.5009 9.29039L22.9492 16.8421" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                     </svg> */}
                  </a>
                  <div>
                     <a className={cl(style.map__btn
                        )} onClick={handleToggleModal}>
                        {/* Build your future */}
                        {data?.data?.attributes?.map_btn}
                        <img src={ArrowRightIcon.src} alt="Arrow" />
                     </a>
                  </div>
               </div>
            </div>
            <div className={style.decor1}></div>
            <div className={style.decor2}></div>
         </div>
      </>
   );
};



export default NewInvestmentClass;
