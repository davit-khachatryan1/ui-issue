import React, { useState } from "react";
import cl from "classnames";
import Shokunin from "../../assets/imgs/shokunin_World_Map.svg";
import { toggleMenu, toggleModalEmailShowAction, toggleModalThanksShowAction, requestFAQsMenuFetchAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestFAQsFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import { useSelector, useDispatch } from "react-redux";
import dynamic from 'next/dynamic';
// import { MemoizedAnimText } from "../../widgets/MemoizedAnimText";
const MemoizedAnimText = dynamic(() => import('../../widgets/MemoizedAnimText/MomoizedAnimText'));
import style from "./LearnPage.module.scss"
import type { RootState } from "@/src/store/store";
import ArrowIcon from "../../assets/imgs/Arrow_Learn.svg";
import HouseMobImg from "../../assets/imgs/Pic + animation_mob.png";
import Image from "next/image";

export const LearnPage = ({FAQsData, FAQsMenuData} : {FAQsData : any, FAQsMenuData : any}) => {

  const locale = FAQsData?.data?.attributes?.locale;

  const [widthWindow, setWidthWindow] = useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    tempFAQsMenuDataFull(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const currentLang = useSelector((state: RootState) => state.app.appReducer.appLanguage);

  const [fetchLanguage, setFetchLanguage] = React.useState("en");

  React.useEffect(() => {

    if (currentLang == "EN") {
      setFetchLanguage("en");
    } else if (currentLang == "AR") {
      setFetchLanguage("ar");
    } else if (currentLang == "ES") {
      setFetchLanguage("es");
    } else if (currentLang == "POR") {
      setFetchLanguage("pt");
    } else if (currentLang == "VIE") {
      setFetchLanguage("vi");
    } else if (currentLang == "JP") {
      setFetchLanguage("ja");
    } else if (currentLang == "CH") {
      setFetchLanguage("zh");
    } else if (currentLang == "KOR") {
      setFetchLanguage("ko");
    }


  }, [currentLang]);

  React.useEffect(() => {
    dispatch(requestFAQsFetchAction({ lang: fetchLanguage }));
    dispatch(requestFAQsMenuFetchAction({ lang: fetchLanguage }));
  }, [fetchLanguage]);

  const [openMenu, setOpenMenu] = useState<string>("0");
  

  let tempFAQsMenuData: any[] = [];
function tempFAQsMenuDataFull (winSize: any) {
   for (let i = 0; i < FAQsMenuData.data?.length; i++) {
     if( i == 0 && winSize > 992) { 
       tempFAQsMenuData.push({show:true, questions: []});
     } else {
       tempFAQsMenuData.push({show:false, questions: []});
     }
 
     // tempFAQsMenuData.push({show:false, questions: []});
     for(let j = 0; j < FAQsMenuData.data[i].attributes.questions.data.length; j++) {
       tempFAQsMenuData[i].questions.push({show: false});
     }
    }
}


  React.useEffect(()=>{
    if(tempFAQsMenuData.length > 0) {
      setFAQMenuDataShow(tempFAQsMenuData);
    }
    
    
  },[FAQsMenuData])

  const [FAQMenuDataShow, setFAQMenuDataShow] = useState(tempFAQsMenuData);

  
  const acc2Ref = React.useRef<HTMLDivElement>(null);

  function openCity(tab: string) {
   setOpenMenu(tab);
    let tempAccordion: Array<any> = [];

    for (let i = 0; i < FAQMenuDataShow.length; i++) {
      tempAccordion.push(FAQMenuDataShow[i]);
    }

    for (let i = 0; i < tempAccordion.length; i++) {
      if (i.toString() == tab) {
        tempAccordion[i].show = true;
      } else {
        tempAccordion[i].show = false;
      }

    }

    setFAQMenuDataShow(tempAccordion);

    // acc2Ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function toggleQuestion(tab: number, id: number) {
    let tempAccordion: Array<any> = [];

    for (let i = 0; i < FAQMenuDataShow.length; i++) {
      tempAccordion.push(FAQMenuDataShow[i]);
    }

    tempAccordion[tab].questions[id].show = !tempAccordion[tab].questions[id].show;

    // let curTab = tempAccordion.find((el) => el.tab == tab);
    // curTab.questions[id].show = !curTab.questions[id].show;

    setFAQMenuDataShow(tempAccordion); 
  }
  function toggleQuestionsMob(tab: string) {
    if (openMenu == tab) {
      openCity('null');
    }
    else openCity(tab);
  }
  //Тестовый вариант удалить
  function toggleQuestions1(tab: number) {
    let tempAccordion: Array<any> = [];
    for (let i = 0; i < FAQMenuDataShow.length; i++) {
      tempAccordion.push(FAQMenuDataShow[i]);
    }    
    tempAccordion[tab].show = !tempAccordion[tab].show;
    setFAQMenuDataShow(tempAccordion); 
  }
  return (
    <>


      <div className={style.learn}>

          {widthWindow == null ? ( "" ) :  widthWindow < 922 ? (
            <div className={style.house_img}>
              <img src={HouseMobImg.src} alt="House"/>
            </div>
            
          ) : null}


        <div className={style.container}>

          

          <h1 className={style.title}>
            {/* Learning center */}
            {FAQsData.data?.attributes?.title}
         </h1>
          <div className={style.subtitle}>
            {/* Everything you need to know about real estate investing */}
            {FAQsData.data?.attributes?.subTitle}
         </div>

          <div className={style.learn_wrapper}>

              <div className={style.learn_line}></div>

              <div
                className={style.learn_header_mobile_btn}
                style={locale === "ar" ? { left: 0 } : {}}
                onClick={() => {
                  dispatch(toggleMenu(true));
                }}
              >
                <div className={style.learn_header_mobile_btn_btn}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
          </div>

          <div className={style.content}>
            <div className={style.content__questions}>

              {FAQsMenuData.data?.map((el : any, index : any) => {
                return (
                  <><div key={index} 
                    onClick={() => widthWindow == null ? ( "" ) :  widthWindow > 992 ? openCity(index) : toggleQuestionsMob(index)} 
                    className={cl(style.content__questions__item,
                     widthWindow != null && widthWindow > 992 && openMenu == index && style.content__questions__item_active,
                      widthWindow != null && widthWindow <= 992 && FAQMenuDataShow[index]?.show && style.content__questions__item_active
                    )}
                >
                    {el.attributes.title}
                                       
                        </div>
                        {widthWindow == null ? ( "" ) :  widthWindow <= 992 ? (                     
                     FAQsMenuData.data?.map((el : any, indexI : any) => {
                        return (
                        <div key={indexI} className={cl("panel tabcontent",
                              !FAQMenuDataShow[index]?.show && "closeTab"
                           )}>

                           <div id={"tab-"+el.id} className={FAQMenuDataShow[indexI]?.show ? "panel tabcontent text-5" : "panel tabcontent text-5 closeTab"}>

                              {el.attributes.questions?.data?.map((elem : any, indexJ : any) => {
                              return (
                                 <React.Fragment key={indexJ}>

                                    <div className={(FAQMenuDataShow[indexI] ? FAQMenuDataShow[indexI].questions[indexJ]?.show : false ) ? cl(style.content__answers__item, style.content__answers__item_active) : cl(style.content__answers__item)}  onClick={() => toggleQuestion(indexI, indexJ)}>
                                    <div className={style.content__answers__item__question}>
                                       {elem.attributes.title}
                                       <Image className={style.content__answers__item__question__arrow} src={ArrowIcon.src} width={19} height={9.5} alt={"arrow"}/>
                                    </div>
                                    <div className={style.content__answers__item__answer}>
                                       <div className={style.content__answers__item__answer__text} dangerouslySetInnerHTML={{ __html: elem.attributes.answer }}></div>
                                    </div>
                                    </div>
                                 
                                 </React.Fragment>
                              )
                              })}

                           </div>
                        </div>
                        )
                     })
                        ) : null}
                     </>
                     )
                  })}
            </div>
            <div className={style.content__answers}>

            {widthWindow == null ? ( "" ) :  widthWindow > 992 ? (
               FAQsMenuData.data?.map((el : any, indexI : any) => {
                  return (
                    <React.Fragment key={indexI}>

                      <div id={"tab-"+el.id} className={FAQMenuDataShow[indexI]?.show ? "panel tabcontent text-5" : "panel tabcontent text-5 closeTab"}>

                        {el.attributes.questions?.data?.map((elem : any, indexJ : any) => {
                          return (
                            <React.Fragment key={indexJ}>

                              <div className={(FAQMenuDataShow[indexI] ? FAQMenuDataShow[indexI].questions[indexJ]?.show : false ) ? cl(style.content__answers__item, style.content__answers__item_active) : cl(style.content__answers__item)}  onClick={() => toggleQuestion(indexI, indexJ)}>
                                <div className={style.content__answers__item__question}>
                                  {elem.attributes.title}
                                  <Image className={style.content__answers__item__question__arrow} src={ArrowIcon.src} width={19} height={9.5} alt={"arrow"}/>
                                </div>
                                <div className={style.content__answers__item__answer}>
                                  <div className={style.content__answers__item__answer__text} dangerouslySetInnerHTML={{ __html: elem.attributes.answer }}></div>
                                </div>
                              </div>
                            
                            </React.Fragment>
                          )
                        })}

                      </div>
                    </React.Fragment>
                  )
                })
          ) : null}
            </div>
          </div>

          


          </div>

          <div className={style.learn__decor1}></div>
          <div className={style.learn__decor2}></div>
      </div>

      {/* <div className="row section-1">
        
        <div className="row" style={{ minWidth: "100%", maxWidth: "100%" }}>
          <div className="col-12 col-lg-4  accordion-wrapper">

            {FAQsMenuData.data?.map((el : any, index : any) => {
              return (
                <div key={index} 
                  onClick={() => openCity(index)} 
                  className={cl("accordion text-4",
                     openMenu == index && "active"
                  )}
               >
                  {el.attributes.title}
                </div>
              )
            })}

          </div>
          <div className="col-12 col-lg-8 accordion-wrapper2" ref={acc2Ref}>

            {
              FAQsMenuData.data?.map((el : any, indexI : any) => {
                return (
                  <React.Fragment key={indexI}>
                 
                    <div id={"tab-"+el.id} className={FAQMenuDataShow[indexI]?.show ? "panel tabcontent text-5" : "panel tabcontent text-5 closeTab"}>
                      {el.attributes.questions?.data?.map((elem : any, indexJ : any) => {
                        return (
                          <React.Fragment key={indexJ}>
                          
                            <h4 className={(FAQMenuDataShow[indexI] ? FAQMenuDataShow[indexI].questions[indexJ]?.show : false ) ? "active" : ""} style={{ display: "block" }} onClick={() => toggleQuestion(indexI, indexJ)}>{elem.attributes.title}</h4>
                            <div style={(FAQMenuDataShow[indexI] ? FAQMenuDataShow[indexI].questions[indexJ]?.show : false ) ? { display: "block", marginBottom: "30px" } : { display: "none" }} dangerouslySetInnerHTML={{ __html: elem.attributes.answer }} className="p op-5 questionBlock"></div>
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </React.Fragment>
                )
              })
            }


          </div>
        </div>
      </div> */}
      

    </>
  );
};

export default LearnPage;


