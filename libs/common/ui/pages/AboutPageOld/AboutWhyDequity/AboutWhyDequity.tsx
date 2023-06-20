import React from "react";
import style from "./AboutWhyDequity.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import AboutPaper from "../../../assets/imgs/AboutPage/AboutPaper.svg"
import AboutDollar from "../../../assets/imgs/AboutPage/AboutDollar.svg"
import AboutHouse from "../../../assets/imgs/AboutPage/AboutHouse.svg"
import AboutStcok from "../../../assets/imgs/AboutPage/AboutStock.svg"
import AboutSupport from "../../../assets/imgs/AboutPage/AboutSupport.svg"
import AboutBook from "../../../assets/imgs/AboutPage/AboutBook.svg"
import AboutPageBackgrounBlocks from "../../../assets/imgs/AboutPage/BackgroundAboutPageBlocks.png"
export const AboutWhyDequity = () => {
    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
    const [windowWidth, setWindowWidth] = React.useState(0);

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


    const data = [
        { imgSrc: AboutPaper.src, text: 'Customized client performance reporting online' },
        { imgSrc: AboutHouse.src, text: 'Best-in-class property management with regular updates' },
        { imgSrc: AboutDollar.src, text: 'Automated proceeds distribution — right to your wallet' },
        { imgSrc: AboutSupport.src, text: 'Easy access to our Customer Support' },
        { imgSrc: AboutStcok.src, text: 'Power of data analysis and blockchain to all our products' },
        { imgSrc: AboutBook.src , text: 'Learn while you earn with free access to blogs, webinars & more' },
    ];

    const rows = [];
    for (let i = 0; i < 6; i += 2) {
        const row = (
            <div className={style.AboutWhyDequity__GridBlocks} key={i} >
                <div  style={{width:"382px",height:"135px"}} >
                   <div style={{backgroundImage: `url(${AboutPageBackgrounBlocks.src})`,backgroundRepeat:"no-repeat",display:"flex",flexDirection: "row-reverse",width:"100%",height:"100%",padding:"10px"}}>
                        <img src={data[i].imgSrc} alt="mkar" className={style.AboutWhyDequity__GridBlocks__text} style={{margin:"auto"}} />
                        <p className={style.AboutWhyDequity__GridBlocks__text}>{data[i].text}</p>
                   </div>
                   </div>
                <div  style={{paddingTop:"30px",width:"382px",height:"170px"}} >
                    <div style={{backgroundImage: `url(${AboutPageBackgrounBlocks.src})`,backgroundRepeat:"no-repeat",display:"flex",flexDirection: "row-reverse",width:"100%",height:"100%",padding:"10px"}}>
                        <img src={data[i + 1].imgSrc} alt="nkar" style={{margin:"auto"}}  />
                        <p className={style.AboutWhyDequity__GridBlocks__text}>{data[i + 1].text}</p>
                    </div>

                </div>
            </div>
        );
        rows.push(row);
    }
    const coloumns =[]

    return (
        <>
            <div className={style.AboutWhyDequity__TitleandText}>
                <div className={style.AboutWhyDequity__TitleandText__Title}> <p>Why dEquity?</p>  </div>
                <div className={style.AboutWhyDequity__TitleandText__TitleText}> <p style={{color:"#D1D5D8"}}>
                    dEquity offers to save time and money by fundamentally changing the mechanics and logistics of the investing experience to make your journey as successful as possible
                </p> </div>
                <div className={style.AboutWhyDequity}>
                    {windowWidth > 1024 ? (
                        <div className={style.AboutWhyDequity}>
                            {rows}
                        </div>
                    ) : null}
                </div>
                <div className={style.AboutWhyDequity}>
                    {windowWidth <= 1024 ? (
                        <div className="column-map">
                            {data.map((item, index) => (
                                <div key={index} className="column">
                                    <div className="left-text" style={{backgroundImage: `url(${AboutPageBackgrounBlocks.src})`,display:"flex",width:"380px",height:"140px",padding:"10px",backgroundRepeat:"no-repeat"}}>

                                        <div style={{fontSize:"16px",alignItems:"center",display:"flex"}}>{item.text}</div>
                                        <img src={item.imgSrc} alt="nkar" style={{margin:"auto"}}  />
                                    </div>

                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>

        </>
    );
};

export default AboutWhyDequity;
