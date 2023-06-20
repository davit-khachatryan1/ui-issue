import React from "react";
import dynamic from 'next/dynamic';


// import { MemoizedAnimText } from "../../widgets/MemoizedAnimText";
const MemoizedAnimText = dynamic(() => import('../../widgets/MemoizedAnimText/MomoizedAnimText'));
import { useSelector, useDispatch } from "react-redux";
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestAboutFetchAction, setHomeFetchLoadingAction} from "@/src/store/actions/app";
import type { RootState } from "@/src/store/store";
import cl from "classnames";
import AboutDequity from "@/libs/common/ui/pages/AboutPage/AboutDequity/AboutDequity";
import AnimationSkew from "./AnimationSkew/AnimationSkew"
import AboutVision from "@/libs/common/ui/pages/AboutPage/AboutVision/AboutVision";
import AboutWhyDequity from "@/libs/common/ui/pages/AboutPage/AboutWhyDequity/AboutWhyDequity";
import Vision from "@/libs/common/ui/pages/AboutPage/Vision/Vision";
import Mission from "@/libs/common/ui/pages/AboutPage/Mission/Mission";
import Map from "@/libs/common/ui/pages/AboutPage/Map/Map";
import style from "./AboutPage.module.scss";

export const AboutPage = ({AboutData} : {AboutData : any}) => {

  console.log(AboutData);

  return (
    <>

      <div className={style.wrapper}>

        <AnimationSkew data={AboutData} />
        <AboutDequity data={AboutData} />
        {/* <AboutVision data={AboutData} /> */}
        <Vision data={AboutData} />
        <Mission data={AboutData} />
        <AboutWhyDequity data={AboutData} />
        <Map data={AboutData} />
      </div>
    </>
  );
};

export default AboutPage;
