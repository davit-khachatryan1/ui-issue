import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
// import { toggleModalEmailShow, toggleModalThanksShow, toggleScrollToHow } from '@/src/store/AppSlice';
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

import style from "./Header.module.scss";
import cl from "classnames";
import LogoDark from "../../assets/imgs/Logo.svg";
import CloseIcon from "../../assets/imgs/close_icon.png";
import BackIcon from "../../assets/imgs/back_icon.svg";
import Link from "next/link";
import type { RootState } from "@/src/store/store";
// import LogoLight from "../../assets/imgs/logo-light.svg";

export const HeaderNew = ({
  data,
  closeMenu,
}: {
  data: any;
  closeMenu?: any;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const mobSelector = useSelector((state: RootState) => state.app.appReducer.mobileMenuShow);

  // const [langMenyActive, setLangMenuActive] = useState(false);

  const list = data?.data?.attributes?.Navigation?.split(",");

  const [langMenuShow, setLangMenuShow] = React.useState(false);

  const refLangBtn = useRef<HTMLDivElement>(null);
  const refLangGlobe = useRef<HTMLImageElement>(null);
  const refLangGlobeActive = useRef<HTMLImageElement>(null);

  function toogleLangMenu() {
    setLangMenuShow(!langMenuShow);
  }

  function showEmailModal() {
    dispatch(toggleModalEmailShowAction());
    closeMenu ? closeMenu() : null;
  }

  function changeLang(lang: string) {
    dispatch(changeAppLanguageAction(lang));
    toogleLangMenu();
    handlerToggleMenu(false);
  }

  React.useEffect(() => {
    if (langMenuShow) {
      document.addEventListener("click", closeLangMenu);
    }
    // document.addEventListener('click', closeLangMenu);

    return () => document.removeEventListener("click", closeLangMenu);
  }, [langMenuShow]);

  function closeLangMenu(e: any) {
    let tempShow = false;

    const iterator = e.target.classList.values();

    for (const value of iterator) {
      if (
        value == refLangBtn?.current?.className ||
        value == refLangGlobe?.current?.className ||
        value == refLangGlobeActive?.current?.className
      ) {
        tempShow = true;
      }
    }

    if (!tempShow) {
      setLangMenuShow(false);
      setMobileMenuLangShow(false);
    }
  }

  const navList = [
    {
      title: list ? list[0] : "",
      link: "/market",
      activeColor: false,
    },
    {
      title: list ? list[1] : "",
      link: "/research",
      activeColor: true,
    },
    {
      title: list ? list[2] : "",
      link: "/about",
      activeColor: true,
    },
    {
      title: list ? list[3] : "",
      link: "/learn",
      activeColor: true,
    },
    //  {
    //    title: list ? list[4] : "",
    //    link: "/faq",
    //    activeColor: true
    // },
    //  {
    //     title: list ? list[5] : "",
    //     link: "/faq",
    //     activeColor: true
    // },
  ];
  const langList = new Map([
    ["ar", "Arabic"],
    ["en", "English"],
    ["es", "Spanish"],
    ["pt", "Portuguese"],
    ["ja", "Japanese"],
    ["zh", "Chinese"],
    ["ko", "Korean"],
  ]);
  const { locale } = useRouter();

  React.useEffect(()=>{
    console.log(mobSelector);
  },[mobSelector]);

  function handlerToggleMenu(value : boolean) {
    dispatch(toggleMenu(value));
  }

  const [mobileMenuLangShow, setMobileMenuLangShow] = useState(false);

  function handlerClick() {
   const toStart = document.querySelector('.container-fluid'); 
   smoothScroll(toStart);
   handlerToggleMenu(false);
}

function smoothScroll(elem: any) {
   return new Promise<void>((resolve) => {
     if (!(elem instanceof Element)) {
       throw new TypeError('Argument 1 must be an Element');
     }
     let same = 0; // a counter
     let lastPos: any = null; // last known Y position
     // pass the user defined options along with our default
     const scrollOptions = Object.assign({ behavior: 'smooth' });

     // let's begin
     elem.scrollIntoView(scrollOptions);
     requestAnimationFrame(check);

     // this function will be called every painting frame
     // for the duration of the smooth scroll operation
     function check() {
       // check our current position
       const newPos = elem.getBoundingClientRect().top;

       if (newPos === lastPos) { // same as previous
         if (same++ > 2 || Math.floor(lastPos) == 0) { // if it's more than two frames
           /* @todo: verify it succeeded
           * if(isAtCorrectPosition(elem, options) {
           *   resolve();
           * } else {
           *   reject();
           * }
           * return;
           */
           if (lastPos < 0) {
            smoothScroll(elem);
          }
           return resolve(); // we've come to an halt
         }
       }
       else {
         same = 0; // reset our counter
         lastPos = newPos; // remember our current position
       }
       // check again next painting frame
       requestAnimationFrame(check);
     }
   });
 }

 function checkActiveBtn(link: string) {
   // var pageActive = ["/property", "/payment"].includes(router.asPath)
   //   ? "/market"
   //   : router.asPath;
   var pageActive = router.asPath;

   return pageActive === link;
 }

  return (
    <>
      <header
        className={
          locale === 'es' ? 
          cl(
            style.header,
            style.header_es
          ) :
            style.header
      }
      >
        <div className={style.header__navigation}>
          <Link className={style.header__logo} href="/">
            {" "}
            <img src={LogoDark.src} alt="dequity.io logo dark" />{" "}
          </Link>
          <div
            className={cl(
              style.header__nav,
              langMenuShow && style.header__lang_menu_active
            )}
          >
            {navList?.map((el, i) => {
              return (
                <Link href={el.link} key={i}>
                  <div className={cl(style.header__nav_item,
                     checkActiveBtn(el.link) && style["header__nav_item--active"]
                     )}>{el.title}</div>
                </Link>
              );
            })}

            <div
              // className={cl(
              //   style.header__nav_item,
              //   !langMenuShow && style.header__lang_menu_active
              // )}
              className={style.header__nav_item}
              onClick={() => {
                setLangMenuShow((prev) => !prev);
              }}
              ref={refLangBtn}
            >
              {/* <img onClick={()=>{setLangMenuShow((prev)=>!prev)}} ref={refLangGlobe} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_noactive)}  src={GlobeIcon.src} alt="globe"/>
            <img onClick={()=>{setLangMenuShow((prev)=>!prev)}} ref={refLangGlobeActive} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_active)}  src={GlobeIconActive.src} alt="globe"/> */}
              {/* EN */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="6.5" stroke="#A8B3BC" />
                <path d="M0.777344 7H13.2218" stroke="#A8B3BC" />
                <path
                  d="M6.22266 0.77771C6.22266 0.77771 4.27821 3.11104 4.27821 6.99993C4.27821 10.8888 6.22266 13.2222 6.22266 13.2222"
                  stroke="#A8B3BC"
                />
                <path
                  d="M7.77734 0.77771C7.77734 0.77771 9.72179 3.11104 9.72179 6.99993C9.72179 10.8888 7.77734 13.2222 7.77734 13.2222"
                  stroke="#A8B3BC"
                />
              </svg>
              {router.locale?.toUpperCase()}

              <div
                className={style.header__lang_menu}
                style={
                  langMenuShow ? { display: "block" } : { display: "none" }
                }
              >
                <Link href={router.pathname} locale={"en"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("EN");
                    }}
                  >
                    English
                  </div>
                </Link>
                <Link href={router.pathname} locale={"es"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("ES");
                    }}
                  >
                    Spanish
                  </div>
                </Link>
                <Link href={router.pathname} locale={"pt"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("POR");
                    }}
                  >
                    Portuguese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ja"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("JP");
                    }}
                  >
                    Japanese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"zh"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("CH");
                    }}
                  >
                    Chinese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ar"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("AR");
                    }}
                  >
                    Arabic
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ko"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("KOR");
                    }}
                  >
                    Korean
                  </div>
                </Link>

                {/* <div className={style.header__lang_menu_item} onClick={() => {changeLang('AR')}}>Arabic</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('EN')}}>English</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('ES')}}>Spanish</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('POR')}}>Portuguese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('JP')}}>Japanese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('CH')}}>Chinese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('KOR')}}>Korean</div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="header__invest">
          <div className={style.header__invest_btn} onClick={showEmailModal}>
            {/* Invest in your wealth */}
            {data?.data?.attributes?.ModalBtn}
          </div>
        </div>
      </header>

      {/* <div
        className={style.header_mobile_btn}
        style={locale === "ar" ? { left: 0 } : {}}
        onClick={() => {
          setMobileMenuShow((prev) => !prev);
        }}
      >
        <div className={style.header_mobile_btn_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}

      <div
        className={cl(style.header_mobile_menu,
         mobSelector && style.header_mobile_menu_open
         )}
      >
        <Link
          className={style.header_mobile_menu_logo}
          href="/"
          onClick={() => handlerClick()}
        >
          <img src={LogoDark.src} alt="dequity.io logo dark" />
        </Link>
        <div className={style.header_mobile_menu_nav}>
          {navList?.map((el, i) => {
            return (
              <Link
                href={el.link}
                key={i}
                onClick={() => handlerClick()}
              >
                <div className={cl(style.header_mobile_menu_nav_item,
                  checkActiveBtn(el.link) && style["header_mobile_menu_nav_item--active"]
                )}>
                  <div style={{ width: "100%" }}>{el.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={style.header_mobile_menu_setting}>
          <div
            className={style.header_mobile_menu_lang}
            onClick={() => setMobileMenuLangShow((prev) => !prev)}
          >
            {/* <img  ref={refLangGlobe} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_noactive)}  src={GlobeIcon.src} alt="globe"/> */}

            <svg
              width="22"
              height="22"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="6.5" stroke="#A8B3BC" />
              <path d="M0.777344 7H13.2218" stroke="#A8B3BC" />
              <path
                d="M6.22266 0.77771C6.22266 0.77771 4.27821 3.11104 4.27821 6.99993C4.27821 10.8888 6.22266 13.2222 6.22266 13.2222"
                stroke="#A8B3BC"
              />
              <path
                d="M7.77734 0.77771C7.77734 0.77771 9.72179 3.11104 9.72179 6.99993C9.72179 10.8888 7.77734 13.2222 7.77734 13.2222"
                stroke="#A8B3BC"
              />
            </svg>

            {/* EN */}
            {/* {router.locale?.toUpperCase()} */}
            {langList.get(locale ?? "en")}
          </div>
          <div className={style.header_mobile_menu_theme}>
            <div className={style.header_mobile_menu_theme_day}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70118 0.0659916C8.56055 0.150382 8.45156 0.276967 8.40586 0.396519C8.38125 0.459811 8.36719 0.885278 8.36719 1.5393C8.36719 2.73834 8.38125 2.79812 8.65196 2.97745C8.96838 3.1849 9.41136 3.06535 9.56605 2.73131C9.62582 2.59769 9.63285 2.48869 9.63285 1.5393C9.63285 0.885278 9.61879 0.459811 9.59418 0.396519C9.54847 0.276967 9.40081 0.115219 9.27424 0.0484104C9.13713 -0.0219147 8.82775 -0.0148821 8.70118 0.0659916Z"
                  fill="white"
                />
                <path
                  d="M2.7176 2.5484C2.46799 2.6996 2.359 3.0442 2.47502 3.31495C2.54533 3.47669 4.036 4.94649 4.15905 4.97813C4.31374 5.0133 4.60203 4.97462 4.70399 4.89726C4.92899 4.732 5.02392 4.46828 4.95712 4.21159C4.92196 4.08149 4.80594 3.94787 4.17311 3.30791C3.76177 2.89651 3.37856 2.53786 3.31528 2.50973C3.13597 2.43237 2.88636 2.44643 2.7176 2.5484Z"
                  fill="white"
                />
                <path
                  d="M14.6773 2.50975C14.6211 2.53788 14.2379 2.89654 13.8265 3.30794C13.1937 3.9479 13.0777 4.08152 13.0425 4.21162C12.9722 4.48237 13.0777 4.74961 13.3203 4.91135C13.4504 4.99926 13.7035 5.02036 13.8758 4.95706C14.0058 4.90784 15.4614 3.45914 15.5246 3.31498C15.6442 3.04422 15.5317 2.69612 15.2785 2.54843C15.1063 2.44998 14.8496 2.4324 14.6773 2.50975Z"
                  fill="white"
                />
                <path
                  d="M8.27899 4.5138C8.14539 4.53841 7.91335 4.59116 7.76921 4.63335C6.15198 5.08695 4.91093 6.42664 4.54529 8.12147C4.4574 8.53991 4.4574 9.46116 4.54529 9.8796C4.93202 11.6764 6.30315 13.0583 8.08562 13.4486C8.45829 13.5295 9.21769 13.5576 9.59387 13.5013C11.0881 13.2868 12.3361 12.4043 13.0217 11.0751C13.3487 10.4457 13.4928 9.90069 13.5245 9.17986C13.5737 8.0617 13.2432 7.0455 12.5365 6.16644C11.8967 5.36825 10.9404 4.78104 9.9138 4.55248C9.56574 4.47512 8.61298 4.45402 8.27899 4.5138ZM9.53059 5.78317C10.7505 5.99414 11.6928 6.78881 12.083 7.92808C12.4205 8.91614 12.2799 9.97102 11.6998 10.8466C11.3271 11.4021 10.7294 11.8592 10.072 12.0843C9.53762 12.2636 8.9962 12.3128 8.46884 12.2179C7.74812 12.0913 7.15747 11.7889 6.67582 11.2966C6.18713 10.8009 5.90588 10.2418 5.78282 9.53149C5.6879 9.00405 5.73712 8.46255 5.91642 7.92808C6.42972 6.43016 7.97664 5.5089 9.53059 5.78317Z"
                  fill="white"
                />
                <path
                  d="M0.386486 8.40662C0.273982 8.45233 0.112259 8.60353 0.048976 8.7266C0.0208502 8.77934 -0.000244141 8.90593 -0.000244141 9.0079C-0.000244141 9.25755 0.108743 9.44391 0.312655 9.55292C0.463832 9.63379 0.484926 9.63379 1.52558 9.63379C2.48889 9.63379 2.59788 9.62676 2.73147 9.56698C3.19203 9.35601 3.19203 8.64572 2.73147 8.43475C2.59788 8.37497 2.4924 8.36794 1.5291 8.37146C0.91736 8.37146 0.439222 8.38552 0.386486 8.40662Z"
                  fill="white"
                />
                <path
                  d="M15.2683 8.43475C15.1769 8.47694 15.0855 8.55782 15.0222 8.65276C14.8147 8.96922 14.9343 9.41227 15.2683 9.56698C15.4019 9.62676 15.5109 9.63379 16.4601 9.63379C17.114 9.63379 17.5394 9.61972 17.6027 9.59511C17.7222 9.5494 17.884 9.40172 17.9508 9.27513C17.9789 9.22239 18 9.09932 18 9.00086C18 8.90241 17.9789 8.77934 17.9508 8.7266C17.884 8.60001 17.7222 8.45233 17.6027 8.40662C17.5394 8.382 17.114 8.36794 16.4601 8.36794C15.5109 8.36794 15.4019 8.37497 15.2683 8.43475Z"
                  fill="white"
                />
                <path
                  d="M4.09551 13.0584C3.95488 13.1252 2.50991 14.5809 2.46069 14.7075C2.36225 14.9783 2.47827 15.3088 2.72086 15.453C2.89313 15.5549 3.13571 15.569 3.31502 15.4917C3.3783 15.4635 3.76151 15.1049 4.17285 14.6935C4.80568 14.0535 4.9217 13.9199 4.95686 13.7898C5.02717 13.519 4.9217 13.2518 4.67912 13.0901C4.542 12.9951 4.26778 12.9811 4.09551 13.0584Z"
                  fill="white"
                />
                <path
                  d="M13.3426 13.0656C13.2863 13.0938 13.209 13.1465 13.1703 13.1781C13.0051 13.3258 12.9594 13.688 13.0754 13.9166C13.1633 14.0818 14.4957 15.4074 14.6575 15.4883C14.8157 15.5692 15.1532 15.5481 15.2833 15.4496C15.452 15.3231 15.5153 15.2035 15.5329 14.9855C15.5434 14.8273 15.5329 14.7499 15.4766 14.6409C15.3887 14.4686 14.0106 13.0973 13.877 13.048C13.7328 12.9918 13.4656 13.0023 13.3426 13.0656Z"
                  fill="white"
                />
                <path
                  d="M8.79259 14.9431C8.62735 15.0134 8.49727 15.133 8.43399 15.2736C8.37422 15.4037 8.36719 15.5198 8.36719 16.4621C8.36719 17.1162 8.38125 17.5416 8.40586 17.6049C8.45156 17.7245 8.59923 17.8862 8.72579 17.953C8.84884 18.0163 9.15119 18.0163 9.27424 17.953C9.40081 17.8862 9.54847 17.7245 9.59418 17.6049C9.61879 17.5416 9.63285 17.1162 9.63285 16.4621C9.63285 15.2666 9.61879 15.2033 9.35511 15.0275C9.1969 14.922 8.93322 14.8833 8.79259 14.9431Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={style.header_mobile_menu_theme_night}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.67169 12.3685C8.0272 12.3685 12.3687 8.02696 12.3687 2.67144C12.3687 2.03572 12.3075 1.41381 12.1904 0.811456C12.1887 0.802657 12.1893 0.795808 12.1908 0.790133C15.3119 2.11144 17.5001 5.20216 17.5001 8.80279C17.5001 13.606 13.6063 17.4998 8.80303 17.4998C5.2024 17.4998 2.11169 15.3116 0.790378 12.1905C0.796054 12.189 0.802901 12.1885 0.811701 12.1902C1.41406 12.3072 2.03596 12.3685 2.67169 12.3685Z"
                  stroke="white"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={style.header_mobile_menu_invest}>
          <div
            className={style.header_mobile_menu_invest_btn}
            onClick={showEmailModal}
          >
            Invest in your wealth
          </div>
          <div
            className={style.header_mobile_menu_invest_close}
            onClick={() => {
              // setMobileMenuShow((prev) => !prev);
              handlerToggleMenu(false);
            }}
          >
            <img src={CloseIcon.src} alt="close" />
          </div>
        </div>
         <div
            style={mobileMenuLangShow ? { left: 0, right: 0 } : { left: "100%", right: 0 }}
            className={style.header_mobile_lang}
         >
         <div className={style.header_mobile_lang_title}>Select language</div>

         <div className={style.header_mobile_lang_langs}>
            <Link href={router.pathname} locale={"en"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("EN");
               }}
               >
               English
               </div>
            </Link>
            <Link href={router.pathname} locale={"es"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("ES");
               }}
               >
               Spanish
               </div>
            </Link>
            <Link href={router.pathname} locale={"pt"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("POR");
               }}
               >
               Portuguese
               </div>
            </Link>
            <Link href={router.pathname} locale={"ja"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("JP");
               }}
               >
               Japanese
               </div>
            </Link>
            <Link href={router.pathname} locale={"zh"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("CH");
               }}
               >
               Chinese
               </div>
            </Link>
            <Link href={router.pathname} locale={"ar"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("AR");
               }}
               >
               Arabic
               </div>
            </Link>
            <Link href={router.pathname} locale={"ko"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("KOR");
               }}
               >
               Korean
               </div>
            </Link>
         </div>

         <div className={style.header_mobile_lang_back}>
            <img
               src={BackIcon.src}
               alt="back"
               onClick={() => setMobileMenuLangShow((prev) => !prev)}
            />
         </div>
         </div>
      </div>

    </>
  );
};

export default HeaderNew;
