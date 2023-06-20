import React from "react";
import style from "./ResearchPortfolio.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import ResearchPortfolioBg from "@/libs/common/ui/assets/imgs/Mask group.png";
import bgMob   from "@/libs/common/ui/assets/imgs/ResearchSkewMobile.png";
import Image from "next/image";





export const ResearchPortfolio = ({ data }: { data: any }) => {

    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

    React.useEffect(() => {
        const handleResize = (event: any) => {
            setWidthWindow(event.target.innerWidth);
        };
        setWidthWindow(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={style.ResearchPortfolio}>

                {widthWindow == null ? "" : widthWindow <= 500 ?
                    <Image
                        src={bgMob.src}
                        alt="Background"
                        layout="fill"
                        className={style.ResearchPortfolio_bg}
                    />  : null
                }


                {widthWindow == null ? "" : widthWindow > 500 ?
                    <Image
                        src={ResearchPortfolioBg.src}
                        alt="Background"
                        layout="fill"
                        className={style.ResearchPortfolio_bg}
                    />
                    : null
                }


                {/* <Image
                    src={ResearchPortfolioBg.src}
                    alt="Background"
                    layout="fill"
                    style={{margin:"0 auto",}}
                    className={style.ResearchPortfolio_bg}


                /> */}
                <div className={style.ResearchPortfolio}> <p className={style.ResearchPortfolio__BeOwnerTitle}>
                  {/* Hand picked portfolio  */}
                  {data?.data?.attributes?.portf_title}
               </p>  </div>
                 <div className={style.ResearchPortfolio__BeOwnerText__size} >
                    <p className={style.ResearchPortfolio__BeOwnerText}>
                    {/* dEquity empowers consumers to build a portfolio based on yield, location, class, and type of real estate. The platform allows you to identify and target your preferences and select matching offers quickly. */}
                    {data?.data?.attributes?.portf_text1}
                    </p>
                    <div >
                        <p className={style.ResearchPortfolio__BeownerLittletxt}>
                        {/* dEquity allows you to exit your holdings without lockups or holding periods 24/7/365 */}
                        {data?.data?.attributes?.portf_text2}
                    </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ResearchPortfolio;

