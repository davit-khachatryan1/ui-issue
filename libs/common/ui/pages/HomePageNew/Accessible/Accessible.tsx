import React, { useRef} from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./Accessible.module.scss";
import cl from "classnames";
import apartment1 from "../../../assets/imgs/apartment1.jpg";
import apartment2 from "../../../assets/imgs/apartment2.jpg";
import apartment3 from "../../../assets/imgs/apartment3.jpg";
import ReactSwipe from 'react-swipe';



export const Accessible = ({data} : {data : any}) => {
   const dispatch = useDispatch();
   const handleToggleModal = () => dispatch(toggleModalEmailShowAction());
   const { locale } = useRouter();

   // const [slideArr, setSliderArr] = useState([{Yield : "14.3%"}, {Yield : "15.3%"}, {Yield : "16.3%"}]);
   const slideArr = [{Yield : "14.3%", key: 0}, {Yield : "15.3%", key: 1}, {Yield : "16.3%", key: 2}];


   const refTest = useRef<any>(null);
   const toSea = data?.data?.attributes?.accessible_card_street?.split(",");

   function SliderItem({slideProps} : {slideProps : any}) {
      return (
         <>
             <div className={style.slider__item}> {/*//slideProps?.active ? {opacity : 1, height: "auto"} : {opacity : 0, height: 0} */}
               <div className={style.slider__img}><img src={
                  slideProps.img == 1 ? apartment1.src :
                  slideProps.img == 2 ? apartment2.src :
                  apartment3.src
                  } alt="apartment" /></div>
               <div className={style.slider__content}>
                  <div className={style.slider__location}>
                     <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path opacity="0.35" d="M5.05986 0.484762C4.12719 0.631357 3.35964 0.918685 2.6135 1.39659C1.3414 2.21166 0.457652 3.47824 0.13351 4.94419C0.0356558 5.37811 -0.0010395 6.25182 0.0570614 6.7092C0.225248 8.0139 0.940807 9.60299 2.12423 11.2947C2.65937 12.057 3.50336 13.1008 4.18223 13.8425C4.56447 14.2559 5.3626 15.0769 5.57359 15.2733C5.75401 15.4375 5.78459 15.4551 5.90691 15.4551C6.03534 15.4551 6.04452 15.4492 6.44205 15.0622C7.92821 13.605 9.33487 11.8957 10.2186 10.4738C11.0626 9.1163 11.5611 7.90542 11.7292 6.80595C11.8026 6.30753 11.7751 5.42502 11.6681 4.94419C11.1757 2.71301 9.40826 1.01837 7.0781 0.5434C6.75702 0.475966 6.62247 0.46424 6.00782 0.458376C5.52467 0.44958 5.22805 0.458375 5.05986 0.484762ZM6.57354 3.59552C6.87628 3.66881 7.35638 3.90337 7.59795 4.0998C8.79667 5.06733 8.89452 6.76784 7.81507 7.85558C7.02612 8.65012 5.69897 8.85829 4.68373 8.3452C3.98346 7.99044 3.48196 7.37768 3.30154 6.65936C3.21898 6.31926 3.21898 5.8267 3.30154 5.4866C3.43303 4.96472 3.77552 4.4399 4.21281 4.09101C4.44521 3.9063 4.93448 3.66588 5.22805 3.59258C5.62864 3.4929 6.16378 3.4929 6.57354 3.59552Z" fill="#A8B3BC" />
                  </svg>
                     {/* Miami, FL */}
                     {data?.data?.attributes?.accessible_card_address} {slideProps.address}
                     </div>
                  <div className={style.slider__toSea}>
                     {/* 100 Ocean Drive */}
                     {toSea[(slideProps.img)-1]}
                  </div>
                  <div className={style.slider__conditions}>
                     <div>
                        {/* 14.3%  */}
                        {/* {data?.data?.attributes?.accessible_card_number1_title} */}
                        {slideProps.Yield}
                        <span>
                           {/* Yield */}
                           {data?.data?.attributes?.accessible_card_number1_text}
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.25">
                                 <path d="M5.21653 0.0355721C4 0.19261 2.83504 0.736385 1.92792 1.57314C0.859068 2.55991 0.17697 3.90294 0.0246118 5.32332C-0.00820393 5.6163 -0.00820393 6.3804 0.0246118 6.67338C0.301201 9.22819 2.24905 11.3705 4.76179 11.8838C5.54234 12.0408 6.51275 12.0408 7.26282 11.8791C8.68561 11.572 9.93964 10.7658 10.8163 9.59617C11.4468 8.75473 11.8359 7.7914 11.9648 6.74838C12.0117 6.36868 12.0117 5.63036 11.9648 5.24831C11.8617 4.40921 11.5711 3.57714 11.1374 2.87164C10.1717 1.29891 8.56373 0.258238 6.74949 0.0332279C6.38617 -0.0113058 5.57281 -0.00896168 5.21653 0.0355721ZM6.84559 0.92155C8.87782 1.2661 10.5139 2.78726 11.0015 4.78189C11.196 5.5788 11.196 6.4179 11.0015 7.21481C10.746 8.25548 10.1412 9.23522 9.32786 9.91962C8.71374 10.4353 7.97773 10.8126 7.21594 11.0001C6.42836 11.1923 5.57984 11.1923 4.78289 11.0001C4.0797 10.8267 3.36009 10.4751 2.79285 10.0204C1.91386 9.3196 1.26458 8.3047 0.997363 7.21481C0.802813 6.4179 0.802813 5.5788 0.997363 4.78189C1.22239 3.86544 1.68415 3.04743 2.36625 2.36537C3.25461 1.47705 4.34456 0.975459 5.64782 0.855922C5.90565 0.832483 6.51743 0.865297 6.84559 0.92155Z" fill="white" />
                                 <path d="M5.75664 3.17115C5.34645 3.3235 5.21518 3.75477 5.48474 4.06182C5.83868 4.46496 6.57469 4.27745 6.64501 3.76649C6.67548 3.55086 6.53016 3.31178 6.30279 3.19459C6.19262 3.14068 5.87853 3.12662 5.75664 3.17115Z" fill="white" />
                                 <path d="M5.69769 5.02942C5.62033 5.05286 5.5383 5.09974 5.48204 5.15365L5.39062 5.24037V6.86466V8.48896L5.49142 8.5874C5.62502 8.721 5.79379 8.77256 6.05632 8.7585C6.3329 8.74444 6.54855 8.62959 6.61184 8.46318C6.62356 8.43271 6.63293 7.71783 6.63293 6.87404C6.63293 5.18646 6.63762 5.23568 6.48995 5.12318C6.31884 4.99427 5.96021 4.95208 5.69769 5.02942Z" fill="white" />
                              </g>
                           </svg>
                        </span>
                     </div>
                     <div>
                        {/* $100  */}
                        {data?.data?.attributes?.accessible_card_number2_title}
                        <span>
                           {/* Estimated Price */}
                           {data?.data?.attributes?.accessible_card_number2_text}
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.25">
                                 <path d="M5.21653 0.0355721C4 0.19261 2.83504 0.736385 1.92792 1.57314C0.859068 2.55991 0.17697 3.90294 0.0246118 5.32332C-0.00820393 5.6163 -0.00820393 6.3804 0.0246118 6.67338C0.301201 9.22819 2.24905 11.3705 4.76179 11.8838C5.54234 12.0408 6.51275 12.0408 7.26282 11.8791C8.68561 11.572 9.93964 10.7658 10.8163 9.59617C11.4468 8.75473 11.8359 7.7914 11.9648 6.74838C12.0117 6.36868 12.0117 5.63036 11.9648 5.24831C11.8617 4.40921 11.5711 3.57714 11.1374 2.87164C10.1717 1.29891 8.56373 0.258238 6.74949 0.0332279C6.38617 -0.0113058 5.57281 -0.00896168 5.21653 0.0355721ZM6.84559 0.92155C8.87782 1.2661 10.5139 2.78726 11.0015 4.78189C11.196 5.5788 11.196 6.4179 11.0015 7.21481C10.746 8.25548 10.1412 9.23522 9.32786 9.91962C8.71374 10.4353 7.97773 10.8126 7.21594 11.0001C6.42836 11.1923 5.57984 11.1923 4.78289 11.0001C4.0797 10.8267 3.36009 10.4751 2.79285 10.0204C1.91386 9.3196 1.26458 8.3047 0.997363 7.21481C0.802813 6.4179 0.802813 5.5788 0.997363 4.78189C1.22239 3.86544 1.68415 3.04743 2.36625 2.36537C3.25461 1.47705 4.34456 0.975459 5.64782 0.855922C5.90565 0.832483 6.51743 0.865297 6.84559 0.92155Z" fill="white" />
                                 <path d="M5.75664 3.17115C5.34645 3.3235 5.21518 3.75477 5.48474 4.06182C5.83868 4.46496 6.57469 4.27745 6.64501 3.76649C6.67548 3.55086 6.53016 3.31178 6.30279 3.19459C6.19262 3.14068 5.87853 3.12662 5.75664 3.17115Z" fill="white" />
                                 <path d="M5.69769 5.02942C5.62033 5.05286 5.5383 5.09974 5.48204 5.15365L5.39062 5.24037V6.86466V8.48896L5.49142 8.5874C5.62502 8.721 5.79379 8.77256 6.05632 8.7585C6.3329 8.74444 6.54855 8.62959 6.61184 8.46318C6.62356 8.43271 6.63293 7.71783 6.63293 6.87404C6.63293 5.18646 6.63762 5.23568 6.48995 5.12318C6.31884 4.99427 5.96021 4.95208 5.69769 5.02942Z" fill="white" />
                              </g>
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
               <Link href="/market" className={style.slider__btn}>
                  {data?.data?.attributes?.accessible_card_btn}
                  {/* <span className={style.slider__btn_pc}>Go to payment</span>   
                  <span className={style.slider__btn_mob}>Go to market</span>    */}
               </Link>
            </div>
         </> 
         
      )
   }

   return (
      <>
         <div className={style.accessible}>
            <div className={cl(style.accessible__slider, style.slider)}>
               <div className={style.slider__list}>

                  
                  
                  <ReactSwipe
                  className="carousel"
                  swipeOptions={{ continuous: true }}
                  ref={refTest}
                  >
                     <div><SliderItem  slideProps={ {
                        Yield: "14.5%", 
                        img: 1, 
                        location: "gs",
                        address: 33259,
                     } } /></div>
                     <div><SliderItem  slideProps={ {
                        Yield: "13.2%", 
                        img: 2, 
                        location: "gs",
                        address: 33139,
                     } } /></div>
                     <div><SliderItem  slideProps={ {
                        Yield: "16.5%", 
                        img: 3, 
                        location: "gs",
                        address: 33137,
                     } } /></div>
                     
                  </ReactSwipe>
                  
                  
               </div>
               <div className={cl(style.slider__arrow, style.slider__arrow_prev)} onClick={async ()=>{

                     refTest?.current?.prev()

                  
               }} ></div>
               <div className={cl(style.slider__arrow, style.slider__arrow_next)} onClick={async ()=>{

                     refTest?.current?.next()
                  
               }} ></div>
            </div>
            <div className={style.accessible__content}>
               <div className={style.accessible__title}>
                  {/* Real estate */}
                  {/* investments have finally become accessible! */}
                  {data?.data?.attributes?.accessible_title} <br />
                  {data?.data?.attributes?.accessible_subtitle}
               </div>
               <ul className={cl(
                  style.accessible__list,
                  locale === 'ar' && style.accessible__list_ar
                  )}>
                  <li className={style.accessible__item} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.accessible_list1}}>
                     {/* Now, investors can collectively own the <br /> entire building or unit */}
                  </li>
                  <li className={style.accessible__item} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.accessible_list2}}>
                     {/* Invest in cash flow rental properties, <br />
                     receive weekly proceeds deposit to your wallet */}
                  </li>
                  <li className={style.accessible__item} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.accessible_list3}}>
                     {/* Miami is one of the largest US markets where rent increases the fastest YoY */}
                  </li>
               </ul>
               <a className={cl(style.accessible__link,
                     locale === 'ar' && style.accessible__link_ar
                  )} onClick={handleToggleModal}>
                  {/* Own a piece of rental property today  */}
                  {data?.data?.attributes?.accessible_btn}
                  <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.29053H27.592" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22.9492 2.1582L30.5009 9.29039L22.9492 16.8421" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               </a>
            </div>
            <div className={style.accessible__decor1}></div>
         </div>
      </>
   );
};



export default Accessible;
