import React, { useEffect, useRef, useState } from "react";
import style from "./HowDoesItWork.module.scss";
import cl from "classnames";

import Arrow1 from "../../../assets/imgs/Arrows.png";
import Arrow2 from "../../../assets/imgs/Arrows1.png";
import Arrow3 from "../../../assets/imgs/Arrows2.png";
import Arrow4 from "../../../assets/imgs/Arrows3.png";
import Arrow5 from "../../../assets/imgs/Arrows4.png";

import Icon1 from "../../../assets/imgs/HowDoesItWorkIcon.svg";
import Icon2 from "../../../assets/imgs/HowDoesItWorkIcon1.svg";
import Icon3 from "../../../assets/imgs/HowDoesItWorkIcon2.svg";
import Icon4 from "../../../assets/imgs/HowDoesItWorkIcon3.svg";
import Icon5 from "../../../assets/imgs/HowDoesItWorkIcon4.svg";

export const HowDoesItWork = ({ data }: { data: any }) => {
  const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let circleRef = useRef<HTMLDivElement>(null);

  let [scrollToCircle, setScrollToCircle] = useState(false);

  const [stylePosition1, setStylePosition1] = useState<any>();
  const [styleNumber1, setStyleNumber1] = useState<any>();
  const [styleArrow1, setStyleArrow1] = useState<any>();

  const [stylePosition2, setStylePosition2] = useState<any>();
  const [styleNumber2, setStyleNumber2] = useState<any>();
  const [styleArrow2, setStyleArrow2] = useState<any>();

  const [stylePosition3, setStylePosition3] = useState<any>();
  const [styleNumber3, setStyleNumber3] = useState<any>();
  const [styleArrow3, setStyleArrow3] = useState<any>();

  const [stylePosition4, setStylePosition4] = useState<any>();
  const [styleNumber4, setStyleNumber4] = useState<any>();
  const [styleArrow4, setStyleArrow4] = useState<any>();

  const [stylePosition5, setStylePosition5] = useState<any>();
  const [styleNumber5, setStyleNumber5] = useState<any>();
  const [styleArrow5, setStyleArrow5] = useState<any>();

  const [stylePosition6, setStylePosition6] = useState<any>();
  const [styleNumber6, setStyleNumber6] = useState<any>();
  const [styleArrow6, setStyleArrow6] = useState<any>();

  const circleAnimationTimeSec = 11;

  //   const handleScroll = (e:any) => {
  //     let circlePos = circleRef?.current?.getBoundingClientRect()?.top ? circleRef?.current?.getBoundingClientRect()?.top : 0 ; //circleRef?.current?.offsetTop
  //     let circleHeight = circleRef?.current?.clientHeight ? circleRef?.current?.clientHeight : 0;
  //     // console.log(circlePos + circleHeight <= window.innerHeight && circlePos >= 0);
  //     if(circlePos + circleHeight <= window.innerHeight && circlePos >= 0) {
  //         setScrollToCircle(true);
  //     }
  //   };
  //   useEffect(() => {
  //     document.body.addEventListener('scroll', handleScroll);
  //     return () => document.body.removeEventListener('scroll', handleScroll);
  //   }, []);

  const [animationEnd, setAnimationEnd] = useState(true);

  useEffect(() => {
    console.log("TESTCIRCLE");

    if (!animationEnd) {
      return;
    }

    setAnimationEnd(false);

    // if(scrollToCircle) {

    // let circlePos = circleRef?.current?.getBoundingClientRect()?.top ? circleRef?.current?.getBoundingClientRect()?.top : 0 ; //circleRef?.current?.offsetTop
    // let circleHeight = circleRef?.current?.clientHeight ? circleRef?.current?.clientHeight : 0;

    // console.log(circlePos, circleHeight);

    // if(circlePos + circleHeight <= window.innerHeight && circlePos >= 0) {

    let tempTimeMs = circleAnimationTimeSec * 1000;

    setTimeout(() => {
      setStylePosition1({ opacity: 1, top: "-40px", bottom: "auto" });
    }, (tempTimeMs / 100) * 5);

    setTimeout(() => {
      setStyleNumber1({ opacity: 0, bottom: "-100%" });
      setStyleArrow1({
        opacity: 1,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition2({ opacity: 1, top: "13%", bottom: "auto" });
    }, (tempTimeMs / 100) * 24);

    setTimeout(() => {
      setStyleNumber2({ opacity: 0, bottom: "-100%" });
      setStyleArrow1({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });
      setStyleArrow2({
        opacity: 1,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition3({ opacity: 1, bottom: "13%" });
    }, (tempTimeMs / 100) * 43);

    setTimeout(() => {
      setStyleNumber3({ opacity: 0, bottom: "-100%" });
      setStyleArrow2({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });
      setStyleArrow3({
        opacity: 1,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition4({ opacity: 1, bottom: "-52px" });
    }, (tempTimeMs / 100) * 62);

    setTimeout(() => {
      setStyleNumber4({ opacity: 0, bottom: "-100%" });
      setStyleArrow3({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });
      setStyleArrow4({
        opacity: 1,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition5({ opacity: 1, bottom: "15%" });
    }, (tempTimeMs / 100) * 81);

    setTimeout(() => {
      setStyleNumber5({ opacity: 0, bottom: "-100%" });
      setStyleArrow4({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });
      setStyleArrow5({
        opacity: 1,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition6({ opacity: 1, top: "10%", bottom: "auto" });
    }, (tempTimeMs / 100) * 100);

    setTimeout(() => {
      setStyleNumber5({ opacity: 0 });
      setStyleNumber6({ opacity: 0 });
      setStyleArrow4({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });
      setStyleArrow5({
        opacity: 0,
        transform: "translate(-50%,-50%) rotateZ(0deg)",
      });

      setStylePosition1({ opacity: 0, top: "-40px", bottom: "auto" });
      setStylePosition2({ opacity: 0, top: "13%", bottom: "auto" });
      setStylePosition3({ opacity: 0, bottom: "13%" });
      setStylePosition4({ opacity: 0, bottom: "-52px" });
      setStylePosition5({ opacity: 0, bottom: "15%" });
      setStylePosition6({ opacity: 0, top: "10%", bottom: "auto" });
    }, (tempTimeMs / 100) * 129);

    setTimeout(() => {
      setAnimationEnd(true);
    }, (tempTimeMs / 100) * 145);

    // }

    // }
  }, [animationEnd]); //scrollToCircle

  return (
    <>
      <div className={style.circle_wrapper}>
        <div className={style.circle} ref={circleRef}>
          <img
            style={styleArrow1 ? styleArrow1 : {}}
            className={cl(style.circle_arrow, style.circle_arrow1)}
            src={Arrow1.src}
            alt="arrow"
          />
          <img
            style={styleArrow2 ? styleArrow2 : {}}
            className={cl(style.circle_arrow, style.circle_arrow2)}
            src={Arrow2.src}
            alt="arrow"
          />
          <img
            style={styleArrow3 ? styleArrow3 : {}}
            className={cl(style.circle_arrow, style.circle_arrow3)}
            src={Arrow3.src}
            alt="arrow"
          />
          <img
            style={styleArrow4 ? styleArrow4 : {}}
            className={cl(style.circle_arrow, style.circle_arrow4)}
            src={Arrow4.src}
            alt="arrow"
          />
          <img
            style={styleArrow5 ? styleArrow5 : {}}
            className={cl(style.circle_arrow, style.circle_arrow5)}
            src={Arrow5.src}
            alt="arrow"
          />

          <div
            style={stylePosition1 ? stylePosition1 : {}}
            className={cl(style.circle_position, style.circle_position_top)}
          >
            <img src={Icon1.src} alt="building" />
            <span
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.hdw_section1,
              }}
            >
              {/* You invest in a <br/> rental property */}
            </span>
            {/*<div*/}
            {/*  style={styleNumber1 ? styleNumber1 : {}}*/}
            {/*  className={cl(*/}
            {/*    style.circle_position_number,*/}
            {/*    style.circle_position_number1*/}
            {/*  )}*/}
            {/*>*/}
            {/*  1*/}
            {/*</div>*/}
          </div>

          <div
            style={stylePosition2 ? stylePosition2 : {}}
            className={cl(
              style.circle_position,
              style.circle_position_top_right
            )}
          >
            <img src={Icon2.src} alt="dollar" />
            <span>
              <div
                  className={
                    data?.data?.attributes?.locale === "ar"
                        ? style.circle__forArabian
                        : ""
                  }
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.hdw_section2,
                }}
              ></div>
              {/* Tenant <br/> pays rent */}
              {/*<div*/}
              {/*  style={styleNumber2 ? styleNumber2 : {}}*/}
              {/*  className={cl(*/}
              {/*    style.circle_position_number,*/}
              {/*    style.circle_position_number2*/}
              {/*  )}*/}
              {/*>*/}
              {/*  2*/}
              {/*</div>*/}
            </span>
          </div>

          <div
            style={stylePosition3 ? stylePosition3 : {}}
            className={cl(
              style.circle_position,
              style.circle_position_bottom_right
            )}
          >
            <img src={Icon3.src} alt="graphic" />
             <span > {/*style={{ left: "110%" }} */}
              <div
                  className={
                    data?.data?.attributes?.locale === "ar"
                        ? style.circle__forArabian2
                        : ""
                  }
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.hdw_section3,
                }}
              ></div>
              {/* Management <br/> company */}
              {/*<div*/}
              {/*  style={styleNumber3 ? styleNumber3 : {}}*/}
              {/*  className={cl(*/}
              {/*    style.circle_position_number,*/}
              {/*    style.circle_position_number3*/}
              {/*  )}*/}
              {/*>*/}
              {/*  3*/}
              {/*</div>*/}
            </span>
          </div>

          <div
            style={stylePosition4 ? stylePosition4 : {}}
            className={cl(style.circle_position, style.circle_position_bottom)}
          >
            <img src={Icon4.src} alt="bank" />
            <span>
              {/*<div*/}
              {/*  style={styleNumber4 ? styleNumber4 : {}}*/}
              {/*  className={cl(*/}
              {/*    style.circle_position_number,*/}
              {/*    style.circle_position_number4*/}
              {/*  )}*/}
              {/*>*/}
              {/*  4*/}
              {/*</div>*/}
              {/* Bank */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.hdw_section4,
                }}
              ></div>
            </span>
          </div>

          <div
            style={stylePosition5 ? stylePosition5 : {}}
            className={
              data?.data?.attributes?.locale === "es" ?
              cl(
                style.circle_position,
                style.circle_position_bottom_left,
                style.circle_position_bottom_left_es
              ) :
              cl(
                style.circle_position,
                style.circle_position_bottom_left
              )
          }
          >
            <span>
              {/* Deposit to <br/> your wallet */}
              <div
                className={
                  data?.data?.attributes?.locale === "ar"
                    ? style.circle_position_bottom_left_section_text
                    : ""
                }
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.hdw_section5,
                }}
              ></div>
              {/*<div*/}
              {/*  style={styleNumber5 ? styleNumber5 : {}}*/}
              {/*  className={cl(*/}
              {/*    style.circle_position_number,*/}
              {/*    style.circle_position_number5*/}
              {/*  )}*/}
              {/*>*/}
              {/*  5*/}
              {/*</div>*/}
            </span>
            <img src={Icon5.src} alt="wallet logo" />
          </div>

          <div
            style={stylePosition6 ? stylePosition6 : {}}
            className={cl(
              style.circle_position,
              style.circle_position_top_left
            )}
          >
            <span>
              {/* Reinvest */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.hdw_section6,
                }}
              ></div>
              {/*<div*/}
              {/*  style={styleNumber6 ? styleNumber6 : {}}*/}
              {/*  className={cl(*/}
              {/*    style.circle_position_number,*/}
              {/*    style.circle_position_number6*/}
              {/*  )}*/}
              {/*>*/}
              {/*  6*/}
              {/*</div>*/}
            </span>
            <div className={style.circle_position_top_left_pseudo_img}></div>
          </div>

          <div
            className={style.circle_text}
          >
            <div className={style.circle_text_title}>
              {/* How does it work? */}
              {data?.data?.attributes?.hdw_title}
            </div>
            {widthWindow == null ? (
              ""
            ) : widthWindow > 1024 ? (
              <div className={style.circle_text_subtitle}>
                {/* You invest in cash-flow rental properties with existing tenants who pay rent, which then deposit to your wallet. */}
                {data?.data?.attributes?.hdw_text}
              </div>
            ) : null}
          </div>
        </div>
        {widthWindow == null ? (
          ""
        ) : widthWindow <= 1024 ? (
          <div className={style.circle_text_subtitle} style={{}}>
            {/* You invest in cash-flow rental properties with existing tenants who pay rent, which then deposit to your wallet. */}
            {data?.data?.attributes?.hdw_text}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HowDoesItWork;
