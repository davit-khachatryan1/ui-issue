import React from "react";
import cl from "classnames";
import style from "./Opportunities.module.scss";

export const Opportunities = ({data} : {data : any}) => {

   return (
      <>
         <section className={style.opportunities}>
            <h2 className={style.opportunities__title}>
               {/* Opportunities */}
               {data?.data?.attributes?.opportunities_title}
            </h2>
            <div className={style.opportunities__list}>
               <div className={style.opportunities__item}>
                  <div className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__content, style.opportunities__content_es) : style.opportunities__content}>
                     <h3 className={ data?.data?.attributes?.locale === "es" ? cl(style.opportunities__name, style.opportunities__name_es) : style.opportunities__name}>
                        {/* Passive Income */}
                        {data?.data?.attributes?.opportunities_section1_title}
                     </h3>
                     <p className={ data?.data?.attributes?.locale === "es" ? cl(style.opportunities__text, style.opportunities__text_es) : style.opportunities__text } dangerouslySetInnerHTML={{__html: data?.data?.attributes?.opportunities_section1_text}}>
                        {/* Investing in income-producing properties is designed to <span>generate cash flow with stable assets</span> */}
                        {/* {data?.data?.attributes?.opportunities_section1_text} */}

                     </p>
                  </div>
               </div>
               <div className={style.opportunities__item}>
                  <div className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__content, style.opportunities__content_es) : style.opportunities__content}>
                     <h3 className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__name, style.opportunities__name_es) : style.opportunities__name}>
                        {/* Appreciation */}
                        {data?.data?.attributes?.opportunities_section2_title}
                     </h3>
                     <p className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__text, style.opportunities__text_es) : style.opportunities__text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.opportunities_section2_text}}>
                        {/* Combining physical real world assets and digital art, we have created an <span>innovative product that helps hedge against inflation and potentially grow your capital</span> */}
                        {/* {data?.data?.attributes?.opportunities_section2_text} */}
                     </p>
                  </div>
               </div>
               <div className={style.opportunities__item}>
                  <div  className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__content, style.opportunities__content_es) : style.opportunities__content}>
                     <h3 className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__name, style.opportunities__name_es) : style.opportunities__name}>
                        {/* Hedge against inflation */}
                        {data?.data?.attributes?.opportunities_section3_title}
                     </h3>
                     <p className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__text, style.opportunities__text_es) : style.opportunities__text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.opportunities_section3_text}}>
                        {/* U.S. property prices and income have <span>historically outpaced inflation</span> */}
                        {/* {data?.data?.attributes?.opportunities_section3_text} */}
                     </p>
                  </div>
               </div>
               <div className={style.opportunities__item}>
                  <div  className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__content, style.opportunities__content_es) : style.opportunities__content}>
                     <h3 className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__name, style.opportunities__name_es) : style.opportunities__name}>
                        {/* Capital preservation with instant liquidity */}
                        {data?.data?.attributes?.opportunities_section4_title}
                     </h3>
                     <p className={data?.data?.attributes?.locale === "es" ? cl(style.opportunities__text, style.opportunities__text_es) : style.opportunities__text} dangerouslySetInnerHTML={{__html: data?.data?.attributes?.opportunities_section4_text}}>
                        {/* <span>Your investment grows as the property value increases,</span> which can help you reach your financial goals */}
                        {/* {data?.data?.attributes?.opportunities_section4_text} */}
                     </p>
                  </div>
               </div>
            </div>
            <div className={style.opportunities__decor1}></div>
            <div className={style.opportunities__decor2}></div>
         </section>
      </>
   );
};



export default Opportunities;
