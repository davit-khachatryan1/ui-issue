import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./AboutDequity.module.scss";
import cl from "classnames";
import AboutDequityImage from "../../../assets/imgs/AboutDequityImage.png";
import AboutDequityMobImage from "../../../assets/imgs/AboutDequityMobImage.png";
import ReactSwipe from 'react-swipe';



export const AboutDequity = ({ data }: { data: any }) => {
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

                <div className={style.ImmediateRent__img}>
                    {widthWindow == null ? "" : widthWindow <= 1040 ? <img src={AboutDequityMobImage.src} alt="Immediate rent and dividends" /> : <img src={AboutDequityImage.src} alt={data?.data?.attributes?.aboutDequity_title} />}
                    {/* <img src={ widthWindow == null ? AboutDequityImage.src : widthWindow <= 1040 ? AboutDequityMobImage.src : AboutDequityImage.src} alt="Immediate rent and dividends" /> */}
                </div>

                
                <div className={style.ImmediateRent__content}>
                     <h2 className={style.ImmediateRent__title}>
                        {/* About dEquity */}
                        {data?.data?.attributes?.aboutDequity_title}
                     </h2>
                    <p className={style.ImmediateRent__text1}>
                     {/* dEquity is a FinTech project that transforms Real World Assets into Web3 financial instruments using blockchain, cryptocurrency and NFTs, creating a more inclusive class of investors */}
                     {data?.data?.attributes?.aboutDequity_text}
                   </p>
                </div>

                <div className={style.ImmediateRent__circle}></div>

            </div>
        </>
    );
};



export default AboutDequity;
