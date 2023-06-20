import React, { useState } from "react";
import cl from "classnames";
import Shokunin from "../../assets/imgs/shokunin_World_Map.svg";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, requestFAQsMenuFetchAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestFAQsFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import { useSelector, useDispatch } from "react-redux";
import dynamic from 'next/dynamic';
// import { MemoizedAnimText } from "../../widgets/MemoizedAnimText";
const MemoizedAnimText = dynamic(() => import('../../widgets/MemoizedAnimText/MomoizedAnimText'));
import "./FAQPage.module.scss"
import type { RootState } from "@/src/store/store";

export const FAQPage = ({FAQsData, FAQsMenuData} : {FAQsData : any, FAQsMenuData : any}) => {
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

  const [openMenu, setOpenMenu] = useState<string>();
  

  let tempFAQsMenuData: any[] = [];

  for (let i = 0; i < FAQsMenuData.data?.length; i++) {
    tempFAQsMenuData.push({show:false, questions: []});
    for(let j = 0; j < FAQsMenuData.data[i].attributes.questions.data.length; j++) {
      tempFAQsMenuData[i].questions.push({show: false});
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

    acc2Ref?.current?.scrollIntoView({ behavior: 'smooth' });
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
  return (
    <>

      <div className="row section-1">
        <div className="eclipse_learn"></div>
        <div className="col-lg-12 faqs-section-1">

          <span className="fw-light text-1 m-text-3 animation_text_flipIn" style={{ fontWeight: 600 }}>
            <MemoizedAnimText text={(FAQsData.data?.attributes.animation_text) ? FAQsData.data?.attributes.animation_text : ""} />
            {/* "FAQs" /> */}
          </span>




        </div>
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
      </div>
      <div className="row section-10 right-gradient" style={{ position: "relative" }}>
        <div className="eclipse_about_section10"></div>
        <div className="col-lg-6 col-md-12">
          <h1 className="fw-light text-1" dangerouslySetInnerHTML={{ __html: FAQsData.data?.attributes.map_text1 }}>
            {/* We believe that democracy is strongest when everyone has ownership. */}
          </h1>
          <h3 className="fw-light text-2 text-gradient" dangerouslySetInnerHTML={{ __html: FAQsData.data?.attributes.map_text2 }}>

            {/* Joint real estate<br /> investing (r)evolution */}
          </h3>
          <p>
            <a href="#" className="btn btn-hov btn-large btn-large-pd btn-outline-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onClick={handleToggleModal}>
              {FAQsData.data?.attributes.map_button}
              {/* Build your wealth */}
            </a>
          </p>
        </div>
        <div className="col-lg-6 col-md-12 card-section-10">
          <img
            width="100%"
            className=""
            src={Shokunin.src}
            alt="Card image cap"
          />
        </div>
      </div>

    </>
  );
};

export default FAQPage;


