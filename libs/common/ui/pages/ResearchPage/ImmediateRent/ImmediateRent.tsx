import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./ImmediateRent.module.scss";
import cl from "classnames";
import grafic from "../../../assets/imgs/ImmediateRent.svg";
import ReactSwipe from 'react-swipe';



export const ImmediateRent = ({ data }: { data: any }) => {
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
         <div className={style.ImmediateRent}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.ImmediateRent__title}>
                  {/* Immediate rent and dividends */}
                  {data?.data?.attributes?.iRent_title}
               </h2>
               : null
            }
            <div className={style.ImmediateRent__content}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.ImmediateRent__title}>
                     {/* Immediate rent and dividends */}
                     {data?.data?.attributes?.iRent_title}
                  </h2>
                  : null
               }
               <p className={style.ImmediateRent__text2}>
                  {/* A combined yield of 11+ %* for an average investment property in the US offers a decent return */}
                  {data?.data?.attributes?.iRent_text1}
               </p>
               <p className={style.ImmediateRent__text1}>
                  {/* *Comprising rental fees and annual property appreciation. This is the sum of Expected Income (derived from rent) plus Capital return on Investment (derived from the increase in unit value) */}
                  {data?.data?.attributes?.iRent_text2}
               </p>
            </div>
            <div className={style.ImmediateRent__img}><img src={grafic.src} alt={data?.data?.attributes?.iRent_title} /></div>
            <div className={style.ImmediateRent__decor2}></div>
            <div className={style.ImmediateRent__decor1}></div>
         </div>
      </>
   );
};



export default ImmediateRent;
