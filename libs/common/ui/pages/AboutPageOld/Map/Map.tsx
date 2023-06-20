import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";

import style from "./Map.module.scss";
import cl from "classnames";

export const NewInvestmentClass = ({data} : {data : any}) => {

   const dispatch = useDispatch();
   const { locale } = useRouter();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

   return (
      <>
         <div className={style.map}>
            <div className={style.map__content}>
               <div className={style.map__title}>
                  We believe that democracy is the strongest when everyone has ownership
               </div>
               <div className={style.map__text2}>
                  {/* Join real estate investing (R)evolution */}
                  {data?.data?.attributes?.map_subtitle}
               </div>
               <a className={cl(style.map__link 
                  )} onClick={handleToggleModal}>
                  Build your future
               </a>
            </div>
         </div>
      </>
   );
};



export default NewInvestmentClass;
