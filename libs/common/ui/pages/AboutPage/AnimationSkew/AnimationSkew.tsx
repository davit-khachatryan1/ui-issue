import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  toggleMenu,
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";

import style from "./AnimationSkew.module.scss";
import cl from "classnames";
import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
import ArrowIcon from "../../../assets/imgs/Arrow (Stroke).png";
import Image from "next/image";

import HouseImg from "../../../assets/imgs/Pic + animation_mob_about.png";
import Balc1Img from "../../../assets/imgs/animationBalc1.png";
import Balc2Img from "../../../assets/imgs/animationBalc2.png";
import Balc3Img from "../../../assets/imgs/animationBalc3.png";
import Balc4Img from "../../../assets/imgs/animationBalc4.png";
import BalconMobile4 from "../../../assets/imgs/BalconMobile4.png";
import BalconMobile3 from "../../../assets/imgs/BalconMobile3.png";

import HouseMobImg from "../../../assets/imgs/Pic + animation_mob.png";

import BalconText1 from "../../../assets/1.png";
import BalconText2 from "../../../assets/2.png";
import BalconText3 from "../../../assets/3.png";
import BalconText4 from "../../../assets/4.png";
import BalconTextMobile1 from "../../../assets/imgs/BalconTextMobile1.png";
import BalconTextMobile2 from "../../../assets/imgs/BalconTextMobile2.png";
import BalconTextMobile3 from "../../../assets/imgs/BalconTextMobile3.png";
import BalconTextMobile4 from "../../../assets/imgs/BalconTextMobile4.png";

// import Skew from "../../../assets/imgs/SkewBlockBig.png";
import Skew from "../../../assets/imgs/Form (2).png";

export const AnimationSkew = ({ data }: { data: any }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const list = data?.data?.attributes?.animation_list?.split(",");

  const locale = data?.data?.attributes?.locale;

  let animation_values = data?.data?.attributes?.animation_list?.split(",");

  const [animationText, setAnimationText] = React.useState(null);

  const [animationIndex, setAnimationIndex] = React.useState(0);

  // useEffect(() => {
  //   changeTextTitle();
  // }, [data]);

  async function changeTextTitle() {
    if (animation_values) {
      let tempIndex = animationIndex;

      if (animationIndex >= animation_values.length) {
        tempIndex = 0;
      }else if (widthWindow != null && widthWindow < 575 && animationIndex == animation_values.length-1) {
         tempIndex = 0;
      }

      setAnimationText(animation_values[tempIndex]);
      tempIndex++;

      setAnimationIndex(tempIndex);
    }
  }

  const [widthWindow, setWidthWindow] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationTimeSec = 24;
  const animationTimeWordSec = 6;

  const [balcon1State, setBalcon1State] = useState<any>();
  const [balcon2State, setBalcon2State] = useState<any>();
  const [balcon3State, setBalcon3State] = useState<any>();
  const [balcon4State, setBalcon4State] = useState<any>();

  const [HouseImgState, setHouseImgState] = useState<any>();
  const [imageSrc, setImageSrc] = useState("");

  const [textState, setTextState] = useState<any>();
  const [textStateMob, setTextStateMob] = useState<any>();
  const [textStateMobPercent, setTextStateMobPercent] = useState<any>("12.5%");
  const [textStateMobDirection, setTextStateMobDirection] =
    useState<any>("right");

  const [animationEnd, setAnimationEnd] = useState(true);
  const [firstPlayEnd, setFirstPlayEnd] = useState(false);

  const [wordAnimationEnd, setWordAnimationEnd] = useState(true);
  const [firstPlayWordEnd, setFirstPlayWordEnd] = useState(false);
  const [wordState, setWordState] = useState<any>();

  useEffect(() => {
    if (!wordAnimationEnd) {
      return;
    }

    setWordAnimationEnd(false);

    let tempMsTime = animationTimeWordSec * 1000;

    function animWord() {
      setTimeout(() => {
        setWordState({ top: "100px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-100px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animWordMob() {
      setTimeout(() => {
        setWordState({ top: "40px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-40px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    if (!firstPlayWordEnd) {
      setTimeout(() => {
        if (window.innerWidth > 1370) {
          animWord();
        } else {
          animWordMob();
          // animWord()
        }
      }, 1000);
    } else {
      if (window.innerWidth > 1370) {
        animWord();
      } else {
        animWordMob();
        // animWord()
      }
    }
  }, [wordAnimationEnd]);

  useEffect(() => {
    if (!animationEnd) {
      return;
    }

    setAnimationEnd(false);

    function animDesktop() {
      //DESKTOP ANIM
      //step1

      setTimeout(() => {
        setBalcon1State({ opacity: 1, top: "138px" });
        setTextState({ top: "100px", right: "200px", opacity: 1 });
        setImageSrc(BalconText1.src);
      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {
        setTextState({ top: "0px", right: "200px", opacity: 0 });
        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextState({
          top: "478px",
          right: "475px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 25);

      // step2

      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "391px" });
        setTextState({ top: "378px", right: "475px", opacity: 1 });
        setImageSrc(BalconText2.src);
      }, (tempMsTime / 100) * 27.5);

      setTimeout(() => {
        setTextState({ top: "278px", right: "475px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextState({
          top: "202px",
          right: "326px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 50);

      // step3

      setTimeout(() => {
        setBalcon3State({ opacity: 1, top: "206px" });
        setTextState({ top: "102px", right: "326px", opacity: 1 });
        setImageSrc(BalconText3.src);
      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        setTextState({ top: "2px", right: "326px", opacity: 0 });
        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextState({
          top: "303px",
          right: "164px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 75);

      // step4
      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "341px" });
        setTextState({ top: "203px", right: "164px", opacity: 1 });
        setImageSrc(BalconText4.src);
      }, (tempMsTime / 100) * 77.5);

      setTimeout(() => {
        setBalcon2State(null);
        setTextState({ top: "103px", right: "164px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextState({
          top: "200px",
          right: "200px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 99.9);

      //   //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animMobile() {
      //MOBILE ANIM
      // 1
      setTimeout(() => {
        setBalcon1State({ opacity: 1, top: "230px" });
        setTextStateMob({ top: "50px", right: "150px", opacity: 1 });
        setImageSrc(BalconTextMobile1.src);
        setTextStateMobPercent("12.5%");
      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {
        setTextStateMob({ top: "-50px", right: "150px", opacity: 0 });
        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextStateMob({
          top: "170px",
          right: "100px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("13.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 25);

      //2
      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "421px" });
        setTextStateMob({ top: "70px", right: "100px", opacity: 1 });
        setImageSrc(BalconTextMobile2.src);
      }, (tempMsTime / 100) * 27.5);

      //
      setTimeout(() => {
        setTextStateMob({ top: "-30px", right: "100px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextStateMob({
          top: "110px",
          right: "140px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("14.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 50);

      //3
      setTimeout(() => {
        setBalcon3State({ opacity: 1, top: "274px" });
        setTextStateMob({ top: "10px", right: "140px", opacity: 1 });
        setImageSrc(BalconTextMobile2.src);
      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        setTextStateMob({ top: "-90px", right: "140px", opacity: 0 });
        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextStateMob({
          top: "125px",
          right: "90px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("15.5%");
        setTextStateMobDirection("left");
      }, (tempMsTime / 100) * 75);
      //4

      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "395px", left: "508px" });
        setTextStateMob({ top: "25px", right: "90px", opacity: 1 });
        setImageSrc(BalconTextMobile4.src);
      }, (tempMsTime / 100) * 77.5);
      //
      setTimeout(() => {
        setBalcon2State(null);
        setTextStateMob({ top: "-75px", right: "90px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextStateMob({
          top: "150px",
          right: "150px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("12.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 99.9);

      //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    let tempMsTime = animationTimeSec * 1000;

    if (!firstPlayEnd) {
      setTimeout(() => {
        if (window.innerWidth > 1370) {
          animDesktop();
        } else {
          animMobile();
        }
      }, 1000);
    } else {
      if (window.innerWidth > 1370) {
        animDesktop();
      } else {
        animMobile();
      }
    }
  }, [animationEnd]);

  useEffect(() => {
    if (locale === "ar" && window.innerWidth > 1370) {
      setHouseImgState({
        transform: "scaleX(-1)",
      });
    }
  }, [locale]);

  return (
    <>
      <div
        style={HouseImgState ? { paddingLeft: 0 } : {}}
        className={style.invest_screen}
      >
        <div className={style.invest_screen__text}>
          <div className={cl(style.invest_screen__title, style.invest_screen__title_nowrap)} >
            {/* dEquity is <br/> re- */}
            {/* {data?.data?.attributes?.animation_text1} {"  "} */}
            <div className={style.invest_screen__title_inner} dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.animation_text1}}>

            </div>
            <span
              style={wordState ? wordState : {}}
              className={
                style.invest_screen__title__testClass
                // locale === "ar" ? style.invest_screen__title__testClass : ""
              }
            >
                {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      (widthWindow != null && widthWindow < 575 ? 2 : 1)
                  ]
                : animationText}
              {/* {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      1
                  ]
                : animationText} */}
            </span>
          </div>
          <div className={cl(style.invest_screen__subtitle,
               locale === 'es' && style.invest_screen__subtitle_es,
               locale === 'pt' && style.invest_screen__subtitle_pt
            )}>
            {/* real estate investing for you */}
            {data?.data?.attributes?.animation_text2}
          </div>
          
          
        </div>

        <div
          style={HouseImgState ? HouseImgState : {}}
          className={style.invest_screen__img}
        >
          <div className={style.invest_screen__img_bg}>
            {widthWindow == null ? (
              ""
            ) : widthWindow < 1370 ? (
              <div className={style.invest_screen__img_bg_test}>
                <img
                  className={style.invest_screen__img_bg_test_house}
                  src={HouseMobImg.src}
                  alt="House"
                />
                
              </div>
            ) : (
              <>
                <div className={style.invest_screen__img_bg_test}>
                  <img
                    className={style.invest_screen__img_bg_test_house}
                    src={HouseImg.src}
                    alt="House"
                  />
                  
                </div>
                {/* <img className={style.invest_screen__img_bg_house} src={HouseImg.src} alt="House"/>
              <img className={style.invest_screen__img_bg_balcon1} src={Balc2Img.src} alt="House"/> */}
              </>
            )}

            
           
          </div>

          {/* <div className={style.invest_screen__img_text}>
            <div className={style.invest_screen__img_text__subtitle}>Miami, FL</div>
            <div className={style.invest_screen__img_text__title}>Biscayne Blvd</div>

            <div className={style.invest_screen__img_text__numbers}>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Unit price</div>
                <div className={style.invest_screen__img_text__number_number}>$100</div>
              </div>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Yield</div>
                <div className={style.invest_screen__img_text__number_number}>12.5%</div>
              </div>

            </div>
          </div> */}
        </div>

        <div className={style.invest_screen_wrapper}>

            <div className={style.invest_screen_line}></div>

            <div
              className={style.invest_screen_header_mobile_btn}
              style={locale === "ar" ? { left: 0 } : {}}
              onClick={() => {
                dispatch(toggleMenu(true));
              }}
            >
              <div className={style.invest_screen_header_mobile_btn_btn}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>

        <div className={style.invest_screen__decor1}></div>
        <div className={style.invest_screen__decor2}></div>
      </div>
      

      <div className={style.invest_screen_skew}>
      <div className={  style.invest_screen_skew_wrapper}>
        <img className={style.invest_screen_skew_bg} src={Skew.src} alt="Background" />
      </div>

        <div className={style.invest_screen_skew_position}>
          <div className={style.invest_screen_skew_position_title}>
            {/* Who We Are */}
            {data?.data?.attributes?.section1_item1_title}
          </div>
          <div className={style.invest_screen_skew_position_text}>
            {/* We are a hard-working team of technologists, programmers, real estate professionals and attorneys who have managed thousands of home sale transactions for consumers, banks, and investors */}
            {data?.data?.attributes?.section1_item1_text}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationSkew;
