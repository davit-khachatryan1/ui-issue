import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "./Footer.module.scss";
import cl from "classnames";
import LogoDequity from "../../assets/imgs/Logo_dequity.png";
import Link from "next/link";
import Image from "next/image";


export const FooterNew = ({data} : {data : any}) => {

  const [langMenyActive, setLangMenuActive] = useState(false);

  const list = data?.data?.attributes?.nav_list?.split(",");

  const navList = [
    {
       title: list[0] ?? null,
       link: "/market"
    },
    {
       title: list[1] ?? null,
       link: "/about"
    },
    {
       title: list[2] ?? null,
       link: "/research"
    },
    {
        title: list[3] ?? null,
        link: "/learn"
     },
 ];

 function handlerClick() {
   const toStart = document.querySelector('.container-fluid'); 
   smoothScroll(toStart);
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

  return (
    <>

        <div className={style.footer}>
           <div className={style.footer__wrapper}>
               <div className={style.footer__info}>
                   <div className={style.footer__info_logo}>
                       <div className={style.footer__info_logo_img}>
                           {/* <img src={LogoDequity.src} alt="Dequity"/> */}
                           <Image src={LogoDequity.src} fill objectPosition='left' object-fit="contain" objectFit="contain" alt="Dequity"/> {/* width={180} height={22} layout="fill" objectFit="cover" */}
                       </div>
                       <div className={style.footer__info_logo_copy}>
                           {/* © Copyright 2023 dEquity. All Rights Reserved */}
                           {data?.data?.attributes?.copyright_text}
                       </div>
                   </div>
                   <div className={style.footer__info_nav}>
                       {navList?.map((el : any, index : any)=>{
                           return(
                               <div key={index} className={style.footer__info_nav_link}>
                                  <Link key={index} href={el.link}>
                                      <div className={style.footer__info_nav_item} onClick={handlerClick}>{el.title}</div>
                                  </Link>
                               </div>
           
                           )
                       })}
                       {/* <div className={style.footer__info_nav_item}>About Us</div>
                       <div className={style.footer__info_nav_item}>FAQs</div>
                       <div className={style.footer__info_nav_item}>info@dequity.io</div> */}
                   </div>
                   <div className={style.footer__info_item}>
                      <div className={style.footer__info_soc}>
                          <div className={style.footer__info_soc_item}>
                           {/* див удалить. вместо него Link */}
                           <div className={style.footer__info_soc_item_link}>
                              {/* <Link target="_blank" href="https://twitter.com/dEquity_io" className={style.footer__info_soc_item_link}> */}
                                  {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                                  <svg width="20" height="20" viewBox="0 0 56.693 56.693" fill="currentColor"><path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path></svg>
                              {/* </Link> */}
                              </div>
                          </div>
                          <div className={style.footer__info_soc_item}>
                              {/* див удалить. вместо него Link */}
                              <div className={style.footer__info_soc_item_link}>
                              {/* <Link target="_blank" href="https://t.me/dEquity_io" className={style.footer__info_soc_item_link}> */}
                                  {/* <img src={TwitterIcon.src} alt="Twitter"/> */}
                                  <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path></svg>
                              {/* </Link> */}
                              </div>
                          </div>
                      </div>
                      <Link href="mailto:info@dEquity.io">
                        <div className={style.footer__info_nav_item}>info@dEquity.io</div>
                     </Link>
                   </div>
               </div>
               <div className={style.footer__text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.test_site_text}}>
               {/* Please be aware that the site is currently in a testing phase, and no services are provided. The sole functionality of the site at present is to collect user-provided email contact details to contact persons who may have an interest in the services in the future. The Content is for informational purposes only, and you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by dEquity or any third-party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction. dEquity isn't available for US investors., */}
               </div>
           </div>
        </div>
      

    </>
  );
};



export default FooterNew;
