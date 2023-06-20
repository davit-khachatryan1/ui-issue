import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./AboutDequity.module.scss";
import cl from "classnames";
import AboutDequityImage from "../../../assets/imgs/AboutDequityImage.png";
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
                {widthWindow == null ? "" : widthWindow <= 1024 ?
                    <h2 className={style.ImmediateRent__title}>About dEquity</h2>
                    : null
                }
                <div className={style.ImmediateRent__content}>
                    {widthWindow == null ? "" : widthWindow > 1024 ?
                        <h2 className={style.ImmediateRent__title}>About dEquity</h2>
                        : null
                    }
                    <p className={style.ImmediateRent__text1}>dEquity is a FinTech project that transforms Real World Assets into Web3 financial instruments using blockchain, cryptocurrency and NFTs, creating a more inclusive class of investors</p>
                </div>
                <div className={style.ImmediateRent__img}><img src={AboutDequityImage.src} alt="Immediate rent and dividends" /></div>

            </div>
        </>
    );
};



export default AboutDequity;
