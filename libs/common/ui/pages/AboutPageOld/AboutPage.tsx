import React from "react";
import Vector1 from "../../assets/imgs/about-icons/Vector1.svg";
import Donate from "../../assets/imgs/about-icons/donate-coin2.svg";
import Vector3 from "../../assets/imgs/about-icons/Vector3.svg";
import Vector4 from "../../assets/imgs/about-icons/Vector4.svg";
import Vector5 from "../../assets/imgs/about-icons/Vector5.svg";
import Vector6 from "../../assets/imgs/about-icons/Vector6.svg";
import Shokunin from "../../assets/imgs/shokunin_World_Map.svg";
import dynamic from 'next/dynamic';


// import { MemoizedAnimText } from "../../widgets/MemoizedAnimText";
const MemoizedAnimText = dynamic(() => import('../../widgets/MemoizedAnimText/MomoizedAnimText'));
import { useSelector, useDispatch } from "react-redux";
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestAboutFetchAction, setHomeFetchLoadingAction} from "@/src/store/actions/app";
import type { RootState } from "@/src/store/store";
import cl from "classnames";
import AboutDequity from "@/libs/common/ui/pages/AboutPage/AboutDequity/AboutDequity";
import AboutVision from "@/libs/common/ui/pages/AboutPage/AboutVision/AboutVision";
import AboutWhyDequity from "@/libs/common/ui/pages/AboutPage/AboutWhyDequity/AboutWhyDequity";

export const AboutPage = ({AboutData} : {AboutData : any}) => {

  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const currentLang = useSelector((state: RootState) => state.app.appReducer.appLanguage);

  const [fetchLanguage, setFetchLanguage] = React.useState("en");

  React.useEffect(()=>{

    if(currentLang == "EN") {
      setFetchLanguage("en");
    } else if ( currentLang == "AR") {
      setFetchLanguage("ar");
    } else if ( currentLang == "ES") {
      setFetchLanguage("es");
    } else if ( currentLang == "POR") {
      setFetchLanguage("pt");
    }  else if ( currentLang == "VIE") {
      setFetchLanguage("vi");
    }  else if ( currentLang == "JP") {
      setFetchLanguage("ja");
    }  else if ( currentLang == "CH") {
      setFetchLanguage("zh");
    }   else if ( currentLang == "KOR") {
      setFetchLanguage("ko");
    }

  },[currentLang]);

  React.useEffect(()=>{
    dispatch(requestAboutFetchAction({lang: fetchLanguage}));
  },[fetchLanguage]);

  const parseBreaks = (string: string) => {
   if (string) {
     const array = string.split("<br/>");
     if (array.length > 1) {
       return (array.map((item, i) =>
        <React.Fragment key={i}>
          {item} <br />
        </React.Fragment>
       )
       )
     }
     else {
       return (
         <>{string}</>
       )
     }
   }
   else {
     return null
   }
 }

  const [animationText, setAnimationText] = React.useState(AboutData.data?.attributes.animation_list.split(",")[AboutData.data?.attributes.animation_list.split(",").length - 1]);
  let animation_values = AboutData.data?.attributes.animation_list.split(",");
  const [animationIndex, setAnimationIndex] = React.useState(0);

  async function changeTextTitle() {

    let tempIndex = animationIndex;

    animation_values = animation_values  ? animation_values : [];

    if (animationIndex >= animation_values.length) {
      tempIndex = 0;
    }
    setAnimationText(animation_values[tempIndex]);
    tempIndex++;

    setAnimationIndex(tempIndex);
  }

  return (
    <>

      <div className="row section-1">
        <div className="eclipse_about1"></div>
        <div className="col-lg-12 about-section-1">
          {/* <h1 style={{visibility: "hidden",  height: 0, width: 0}} >real estate investing for you</h1> */}
          <div className="fw-light text-1 m-text-3">

            <span className="animation_text_flipIn">
              {/* <MemoizedAnimText text="dEquity is re-"/> */}
              <MemoizedAnimText text={AboutData.data?.attributes.animation_text1}/>
            </span>

            <span className="animation__container__list" onAnimationIteration={changeTextTitle}>
              <span className={cl("animation__item text-gradient",
                  "animation__item--"+fetchLanguage
              )}>
                {animationText}
              </span>
            </span>


          </div>
             <p className="lead text-2 m-text-2 section-1_subtitle animation_text_flipIn">
             {/* <MemoizedAnimText text="real estate investing for you"/> */}
             <MemoizedAnimText text={AboutData.data?.attributes.animation_text2}/>
             </p>
          <p className="lead text-2 m-text-4" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item1_title}}>
            {/* Who We Are */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item1_title)} */}
          </p>
          <p className="lead text-3 op-7 m-text-5" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item1_text}}>
            {/* We are a hard-working team of technologists, programmers, real estate professionals and attorneys who have managed thousands of home sale transactions for consumers, banks, and investors. */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item1_text)} */}
          </p>
          <p className="lead text-2 m-text-4" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item2_title}}>
            {/* Vision */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item2_title)} */}
          </p>
          <p className="lead text-3 op-7 m-text-5" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item2_text}}>
            {/* We genuinely believe together, we can (re)invent real estate investing for the new world driven by technological (r)evolution and (re)shape the next innovative breakthrough. */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item2_text)} */}
          </p>
          <p className="lead text-2 m-text-4" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item3_title}}>
            {/* Mission */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item3_title)} */}
          </p>
          <p className="lead text-3 op-7 " dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section1_item3_text}}>
            {/* Our mission is to streamline and simplify the global investing process and ensure equality of opportunity by combining Real Estate and DeFi with pioneering NFT technology, revolutionizing how real estate is bought, sold and managed.
            Real estate investment must be fast, transparent and accessible to anyone. */}
            {/* {parseBreaks(AboutData.data?.attributes.section1_item3_text)} */}
          </p>
        </div>
      </div>

      <div className="row section-7 section-7-inverted gradient-center">
        <div className="eclipse_about_section7-1"></div>
        <div className="eclipse_about_section7-2"></div>
        <div className="row col-12 d-flex flex-column ">

          <div className="section7-text">
            <h1 className="fw-light text-center text-1 " dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_title}}>
              {/* Why dEquity? */}
              {/* {parseBreaks(AboutData.data?.attributes.section7_title)} */}
            </h1>
            <div className="row ">
              <div className="col">
              </div>
              <div className="col-lg-8 col-md-12  text-center text-2 op-7 " dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_text}}>
                {/* dEquity offers to save time and money by fundamentally changing the mechanics and logistics of the investing experience to make your journey as successful as possible. */}
                {/* {parseBreaks(AboutData.data?.attributes.section7_text)} */}
              </div>
              <div className="col">
              </div>
            </div>
        </div>
        </div>
        <div className="row col-12">
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert md-text" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item1}}>
                     {/* Customized<br className="br-section-7" /> client performance<br className="br-section-7"/> reporting online. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item1)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Vector1.src} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item2}}>
                     {/* Automated<br className="br-section-7"/> proceeds distribution -<br className="br-section-7"/> right to your wallet. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item2)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Donate.src} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item3}}>
                     {/* Power of data analysis<br className="br-section-7"/> and blockchain to all<br className="br-section-7"/> our products. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item3)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Vector3.src} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item4}}>
                     {/* Best-in-class property<br className="br-section-7"/> management with<br className="br-section-7"/> regular updates. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item4)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Vector4.src} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item5}}>
                     {/* Easy access to our<br className="br-section-7"/> Customer Support. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item5)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Vector5.src} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className=" card-section-7-about">
              <div className="d-flex align-items-start">
                <div className="p-0 w-100">
                  <h4 className="text-5 t-invert" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section7_item6}}>
                     {/* Learn while you earn<br className="br-section-7"/> with free access to<br className="br-section-7"/> blogs, webinars & more. */}
                     {/* {parseBreaks(AboutData.data?.attributes.section7_item6)} */}
                  </h4>
                </div>
                <div className="p-0 flex-shrink-1 card-section-7-icon-about"><img className="" src={Vector6.src} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row section-10 right-gradient">
        <div className="eclipse_about_section10"></div>
        <div className="col-lg-6 col-md-12">
          <h3 className="fw-light text-1" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section10_title}}>
            {/* We believe that democracy is strongest when everyone has ownership. */}
            {/* {parseBreaks(AboutData.data?.attributes.section10_title)} */}
          </h3>
          <h3 className="fw-light text-2 text-gradient" dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section10_text}}>
            {/* Our knowledge and technology <br/> will make it happen! */}
            {/* {parseBreaks(AboutData.data?.attributes.section10_text)} */}
           </h3>
           <p>
            <a href="#" className="btn btn-hov btn-large btn-large-pd btn-outline-primary my-2"  data-toggle="modal" data-target="#exampleModalCenter" onClick={handleToggleModal} dangerouslySetInnerHTML={{ __html: AboutData.data?.attributes.section10_btn}}>
               {/* Build your wealth */}
               {/* {parseBreaks(AboutData.data?.attributes.section10_btn)} */}
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
        {/* <AboutDequity data={AboutData} /> */}
        {/* <AboutVision data={AboutData} />*/}
        {/*<AboutWhyDequity />*/}
      </div>
    </>
  );
};

export default AboutPage;
