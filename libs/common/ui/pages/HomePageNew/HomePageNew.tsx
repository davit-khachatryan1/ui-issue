import React from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

import style from "./HomePageNew.module.scss";
import DollarIcon from "../../assets/imgs/dollarIcon.svg";
import PaintIcon from "../../assets/imgs/PaintIcon.svg";
import NftIcon from "../../assets/imgs/NftIcon.svg";
import SkewTitleLogo from "../../assets/imgs/SkewTitleLogo.png";
import QualityImg from "../../assets/imgs/Quality.png";
import cl from "classnames";

// import InvestInYourScreen from "./InvestInYourScreen/InvestInYourScreen";
const InvestInYourScreen = dynamic(() => import('./InvestInYourScreen/InvestInYourScreen'));
// import Started from "./Started/Started";
const Started = dynamic(() => import('./Started/Started'));
// import SkewBlock from "./SkewBlock/SkewBlock";
const SkewBlock = dynamic(() => import('./SkewBlock/SkewBlock'));
// import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
const HowDoesItWork = dynamic(() => import('./HowDoesItWork/HowDoesItWork'));
// import OurTrustedClients from "./OurTrustedClients/OurTrustedClients";
const OurTrustedClients = dynamic(() => import('./OurTrustedClients/OurTrustedClients'));
// import Card from "./Card/Card";
const Card = dynamic(() => import('./Card/Card'));
// import Opportunities from "./Opportunities/Opportunities";
const Opportunities = dynamic(() => import('./Opportunities/Opportunities'));
// import Accessible from "./Accessible/Accessible";
const Accessible = dynamic(() => import('./Accessible/Accessible'));
// import InstantLiquidity from "./InstantLiquidity/InstantLiquidity";
const InstantLiquidity = dynamic(() => import('./InstantLiquidity/InstantLiquidity'));
// import Security from "./Security/Security";
const Security = dynamic(() => import('./Security/Security'));
// import NewInvestmentClass from "./NewInvestmentClass/NewInvestmentClass";
const NewInvestmentClass = dynamic(() => import('./NewInvestmentClass/NewInvestmentClass'));
// import Map from "./Map/Map";
const Map = dynamic(() => import('./Map/Map'));

import { MenuButton } from "../../shared";


export const HomePageNew = ({strapiData, strapiDataHeader, strapiDataFooter} : {strapiData : any, strapiDataHeader : any, strapiDataFooter : any}) => {
   const { locale } = useRouter();

  

  
  return (
    <>
    {/* data?.data?.attributes? */}


      <div className={style.wrapper_bg}>      
        <div className={style.wrapper}>

          {/* <div>
          Dapibus justo quam, sed cursus venenatis sodales dictumst. Et. Pulvinar imperdiet dapibus consectetur malesuada quis, eleifend accumsan ultricies. Libero, vulputate molestie vulputate sodales accumsan non sodales ut. Dictum nisi molestie pellentesque ipsum pulvinar sed sit malesuada arcu justo morbi in dictumst. Dapibus nec lacinia justo faucibus. Imperdiet venenatis amet, est. Vitae vestibulum ipsum adipiscing urna est. Ipsum ipsum et. Venenatis venenatis sodales hac cras sed eleifend interdum in vestibulum justo sed nec dictumst. Ornare dictumst. Arcu est. Venenatis ornare ipsum elit. Habitasse integer tortor, et ex. Mauris nunc velit adipiscing ornare non mauris faucibus. Arcu lectus eget venenatis orci, faucibus. Sit pellentesque mollis dictumst. Nunc integer elit. Sed pellentesque interdum tortor, eleifend leo, malesuada sed sit sit morbi ex. Vulputate quam, sit venenatis ornare ornare arcu mauris dictum faucibus. Habitasse mauris sodales vestibulum sed quis, in ultricies. Mauris amet, cursus cras lorem id venenatis elit. Mattis luctus sit id mauris cursus lorem malesuada ipsum dictum sit adipiscing lacinia in tempus lectus nisi vitae augue ornare lorem id elit. Morbi sapien ornare in sit molestie cras vel amet, quis, platea eleifend platea sit urna sapien non morbi lorem consectetur non sodales lorem justo ultricies. Sit ornare cras luctus dui dictumst. Arcu lacinia augue quam, non imperdiet consectetur ut. Id platea nunc morbi interdum malesuada et arcu vel malesuada non amet, mattis molestie mauris nulla mattis est. Et. Vestibulum nec accumsan mollis nunc sapien cursus elit. Urna ex. Amet, quam, lacinia sit ornare urna platea sapien non interdum libero, luctus sit sapien et accumsan sed morbi vulputate efficitur mollis ornare mauris eleifend luctus aenean risus mattis sit mattis odio. Venenatis pulvinar eget platea ornare habitasse habitasse arcu lorem lacinia efficitur nunc dapibus ornare dictumst. Arcu lacinia consectetur platea amet, et. Amet eleifend sap
          Dapibus justo quam, sed cursus venenatis sodales dictumst. Et. Pulvinar imperdiet dapibus consectetur malesuada quis, eleifend accumsan ultricies. Libero, vulputate molestie vulputate sodales accumsan non sodales ut. Dictum nisi molestie pellentesque ipsum pulvinar sed sit malesuada arcu justo morbi in dictumst. Dapibus nec lacinia justo faucibus. Imperdiet venenatis amet, est. Vitae vestibulum ipsum adipiscing urna est. Ipsum ipsum et. Venenatis venenatis sodales hac cras sed eleifend interdum in vestibulum justo sed nec dictumst. Ornare dictumst. Arcu est. Venenatis ornare ipsum elit. Habitasse integer tortor, et ex. Mauris nunc velit adipiscing ornare non mauris faucibus. Arcu lectus eget venenatis orci, faucibus. Sit pellentesque mollis dictumst. Nunc integer elit. Sed pellentesque interdum tortor, eleifend leo, malesuada sed sit sit morbi ex. Vulputate quam, sit venenatis ornare ornare arcu mauris dictum faucibus. Habitasse mauris sodales vestibulum sed quis, in ultricies. Mauris amet, cursus cras lorem id venenatis elit. Mattis luctus sit id mauris cursus lorem malesuada ipsum dictum sit adipiscing lacinia in tempus lectus nisi vitae augue ornare lorem id elit. Morbi sapien ornare in sit molestie cras vel amet, quis, platea eleifend platea sit urna sapien non morbi lorem consectetur non sodales lorem justo ultricies. Sit ornare cras luctus dui dictumst. Arcu lacinia augue quam, non imperdiet consectetur ut. Id platea nunc morbi interdum malesuada et arcu vel malesuada non amet, mattis molestie mauris nulla mattis est. Et. Vestibulum nec accumsan mollis nunc sapien cursus elit. Urna ex. Amet, quam, lacinia sit ornare urna platea sapien non interdum libero, luctus sit sapien et accumsan sed morbi vulputate efficitur mollis ornare mauris eleifend luctus aenean risus mattis sit mattis odio. Venenatis pulvinar eget platea ornare habitasse habitasse arcu lorem lacinia efficitur nunc dapibus ornare dictumst. Arcu lacinia consectetur platea amet, et. Amet eleifend sap
          </div> */}

        </div>

        <InvestInYourScreen data={strapiData} />

        <div className={style.wrapper}>
        <Started data={strapiData} />


        </div>

        <SkewBlock>
        <div className={cl(style.skew__title, style.skew__title_opportunities)}>
        {strapiData?.data?.attributes?.skew1_title}
        </div>
        <div className={style.skew__text} dangerouslySetInnerHTML={{__html: strapiData?.data?.attributes?.skew1_text1 + " <img src="+DollarIcon.src+" alt='Dollar' /> " + strapiData?.data?.attributes?.skew1_text2}}>
        </div>
        </SkewBlock>

        <HowDoesItWork data={strapiData} />

        <Card data={strapiData} />

        <SkewBlock size="big">
        <div className={style.skew__title_img}>
        <img src={SkewTitleLogo.src} alt="Wallet Logo" />
        </div>
        <div className={ 
          locale === 'es' ? cl(style.skew__title, style.skew__title_wallet_es) :  
          style.skew__title
          }>
        {strapiData?.data?.attributes?.skew2_title}
        </div>
        <div className={
          locale === 'es' ? cl(style.skew__text_small, style.skew__text_small_wallet_es) :  
          style.skew__text_small
          } >
        {strapiData?.data?.attributes?.skew2_text1}
        </div>
        <div className={
          locale === 'es' ? cl(style.skew__sub_text, style.skew__sub_text_wallet_es) :  
          style.skew__sub_text
          }>
        {strapiData?.data?.attributes?.skew2_text2}
        </div>
        </SkewBlock>

        <div className={style.wrapper}>

        <Opportunities data={strapiData} />

        <Accessible data={strapiData} />

        <InstantLiquidity data={strapiData} />

        </div>


        <SkewBlock size="big">
        <div className={
          // locale === 'es' ? cl(style.skew__title_white, style.skew__title_white_wallet_es) : 
          locale === 'ar' ? cl(style.skew__title_white, style.skew__title_ar)  : 
          style.skew__title_white
          }>
        <img src={QualityImg.src} alt={"Shield"} />
        {strapiData?.data?.attributes?.skew3_title}
        </div>
        <div className={ 
          // locale === 'es' ? cl(style.skew__text, style.skew__text1, style.skew__text_wallet_es) : 
          cl(style.skew__text, style.skew__text1) }>
        {strapiData?.data?.attributes?.skew3_text1}
        </div>
        <div className={ 
          // locale === 'es' ? cl(style.skew__sub_text_small, style.skew__sub_text_small_wallet_es) : 
          style.skew__sub_text_small 
          }>
        {strapiData?.data?.attributes?.skew3_text2}
        </div>
        </SkewBlock>

        <OurTrustedClients data={strapiData}/>

        <div className={style.wrapper}>         

        <Security data={strapiData}/>

        </div>

        <SkewBlock>
        <div className={style.skew__title}>
        {strapiData?.data?.attributes?.skew4_title}
        </div>
        <div className={  locale === 'es' ? cl(style.skew__text, style.skew__text_nfts_es) : style.skew__text} dangerouslySetInnerHTML={{__html: strapiData?.data?.attributes?.skew4_text1}}>
        
        </div>

        {/* <div className={  locale === 'es' ? cl(style.skew__text, style.skew__text_nfts_es) : style.skew__text} dangerouslySetInnerHTML={{__html: strapiData?.data?.attributes?.skew4_text1 + " <img src="+PaintIcon.src+" alt='Paint' /> " + strapiData?.data?.attributes?.skew4_text2 + " <img src="+NftIcon.src+" alt='NFT' /> "}}>
        
        </div> */}
        </SkewBlock>

        <div className={style.wrapper}>         
        <NewInvestmentClass data={strapiData}/>
        </div>

        <Map data={strapiData}/>

      </div>

    </>
  );
};



export default HomePageNew;
