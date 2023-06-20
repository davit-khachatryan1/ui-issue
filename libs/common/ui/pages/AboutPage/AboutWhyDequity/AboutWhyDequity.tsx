import React from "react";
import { useRouter } from "next/router";
import style from "./AboutWhyDequity.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import AboutPaper from "../../../assets/imgs/AboutPage/AboutPaper.svg"
import AboutDollar from "../../../assets/imgs/AboutPage/AboutDollar.svg";
// import AboutDollar from "../../../assets/imgs/AboutPage/AboutDollar.png";

import AboutHouse from "../../../assets/imgs/AboutPage/AboutHouse.svg"
import AboutStcok from "../../../assets/imgs/AboutPage/AboutStock.svg"
import AboutSupport from "../../../assets/imgs/AboutPage/AboutSupport.svg"
import AboutBook from "../../../assets/imgs/AboutPage/AboutBook.svg"
import AboutPageBackgrounBlocks from "../../../assets/imgs/AboutPage/BackgroundAboutPageBlocks.png";
import cl from "classnames";

export const AboutWhyDequity = ({ data }: { data: any }) => {
    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const { locale } = useRouter();

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Initial width on component mount
        setWindowWidth(window.innerWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const list = [
        { imgSrc: AboutPaper.src, text: data?.data?.attributes?.section7_item1 },
        { imgSrc: AboutDollar.src, text: data?.data?.attributes?.section7_item2 },
        { imgSrc: AboutStcok.src, text: data?.data?.attributes?.section7_item3 },
        { imgSrc: AboutHouse.src, text: data?.data?.attributes?.section7_item4 },
        { imgSrc: AboutSupport.src, text: data?.data?.attributes?.section7_item5 },
        { imgSrc: AboutBook.src , text: data?.data?.attributes?.section7_item6 },
    ];

    const rows = [];
    for (let i = 0; i < 6; i += 2) {
        const row = (
            <div className={style.AboutWhyDequity__GridBlocks} key={i} >
                <div  style={{width:"382px",height:"135px"}} >
                   <div style={{backgroundImage: `url(${AboutPageBackgrounBlocks.src})`,backgroundRepeat:"no-repeat",display:"flex",flexDirection: "row-reverse",width:"100%",height:"100%",padding:"25px"}}>
                        <img  src={list[i].imgSrc} alt="mkar" className={cl(style.AboutWhyDequity__GridBlocks__text, style.AboutWhyDequity__GridBlocks__icon)} style={{ position: "relative", top: "50%", transform: "translateY(-50%)"}} />
                        <p className={style.AboutWhyDequity__GridBlocks__text} style={{display: "flex", alignItems: "center", paddingRight: "10px",paddingBottom: "0px"}}>{list[i].text}</p>
                   </div>
                   </div>
                <div  style={{marginTop:"30px", paddingTop: "30px",width:"382px",height:"170px"}} >
                    <div style={{backgroundImage: `url(${AboutPageBackgrounBlocks.src})`,backgroundRepeat:"no-repeat",display:"flex",flexDirection: "row-reverse",width:"100%",height:"100%",padding:"25px"}}>
                        <img src={list[i + 1].imgSrc} alt="nkar"  className={cl(style.AboutWhyDequity__GridBlocks__icon)} style={{ position: "relative", top: "50%", transform: "translateY(-50%)"}}  />
                        <p className={style.AboutWhyDequity__GridBlocks__text} style={{display: "flex", alignItems: "center", paddingRight: "10px",paddingBottom: "0px"}}>{list[i + 1].text}</p>
                    </div>

                </div>
            </div>
        );
        rows.push(row);
    }
    const coloumns =[]

    return (
        <div className={style.wrapper}>
            <div className={style.AboutWhyDequity}>
                <h2 className={style.AboutWhyDequity__title}>
                  {/* Why dEquity? */}
                  {data?.data?.attributes?.section7_title}
                </h2>
                <div className={style.AboutWhyDequity__text}>
                    {/* dEquity offers to save time and money by fundamentally changing the mechanics and logistics of the investing experience to make your journey as successful as possible */}
                    {data?.data?.attributes?.section7_text}
                </div>
                <div className={style.AboutWhyDequity__list}>
                  {list.map((item, i) => 
                    <div className={cl(style.AboutWhyDequity__item, style['AboutWhyDequity__item--' + locale])}>
                        <div className={style.AboutWhyDequity__item_text}>{item.text}</div>
                        <div className={style.AboutWhyDequity__item_img}><img src={item.imgSrc} alt="decor" /></div>
                    </div>
                    )}
                </div>
            </div>

            <div className={style.decor}></div>

        </div>
    );
};

export default AboutWhyDequity;
