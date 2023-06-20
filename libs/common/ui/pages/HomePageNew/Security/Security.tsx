import React from "react";

import style from "./Security.module.scss";
import cl from "classnames";
import lock from "../../../assets/imgs/security/lock.svg";
import save from "../../../assets/imgs/security/save.svg";
import Image from "next/image";

export const Security = ({data} : {data : any}) => {

  return (
    <>
      <section className={style.security}>
         <div className={style.security__img}>
            <h2 className={style.security__title}>
               {/* Security */}
               {data?.data?.attributes?.security_title}
            </h2>
            <p className={style.security__text}>
               {/* Cutting-edge technology to provide maximum protection for non-custodial ownership */}
               {data?.data?.attributes?.security_subtitle}
            </p>
         </div>
         <div className={style.security__list}>
            <div className={style.security__item}>
               <div className={style.security__item_icon}>
                  {/* <img src={lock.src} alt="lock" /> */}
                  <Image src={lock.src} width={97} height={111} alt="lock"/>
               </div>
               <div className={style.security__item_content}>
                  <h3 className={style.security__item_title}>
                     {/* Secure and transparent */}
                     {data?.data?.attributes?.security_list1_title}
                  </h3>
                  <p className={style.security__item_text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.security_list1_text}}>
                     {/* All necessary documentation, licenses, and transactions are stored on the blockchain and can be verified by anyone */}
                     {/* {data?.data?.attributes?.security_list1_text} */}
                  </p>
               </div>
            </div>
            <div className={style.security__item}>
               <div className={style.security__item_icon}>
                  {/* <img src={save.src} alt="save" /> */}
                  <Image src={save.src} width={97} height={104} alt="save"/>
               </div>
               <div className={style.security__item_content}>
                  <h3 className={style.security__item_title}>
                     {/* Trustless and intermediary-free */}
                     {data?.data?.attributes?.security_list2_title}
                  </h3>
                  <p className={style.security__item_text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.security_list2_text}}>
                     {/* Meaning that no one except of <br/> owner has access to assets */}
                  </p>
               </div>
            </div>
         </div>
         <div className={style.security__decor1}></div>
      </section>

    </>
  );
};



export default Security;
