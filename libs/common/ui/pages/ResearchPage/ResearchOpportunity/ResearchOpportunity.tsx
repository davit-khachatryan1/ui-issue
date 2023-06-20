import React from "react";
import style from "./ResearchOpportunity.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import MaskGroup from "@/libs/common/ui/assets/imgs/Mask group.png";
import MobileResearchOpportinity from "../../../assets/imgs/ResearchOpportunity.png"
import Image from "next/image";
import AboutVisionImage from "@/libs/common/ui/assets/imgs/AboutVisionImage.png";
import {width} from "dom-helpers";





export const ResearchOpportunity = ({ data }: { data: any }) => {
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
            <div className={style.ResearchOpportunity}>
                {widthWindow == null ? "" : widthWindow <= 1024 ?
                    <Image
                        src={MobileResearchOpportinity.src}
                        alt="Background"
                        layout="fill"
                        className={style.ResearchOpportunity_bg}
                    />  : null

                }


                    {widthWindow == null ? "" : widthWindow > 1024 ?
                        <Image
                            src={MaskGroup.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchOpportunity_bg}
                        />
                        : null
                    }
                <div className={style.ResearchOpportunity1}> <p className={style.ResearchOpportunity__OneClickTitle}>
                  {/* Equality of opportunity  */}
                  {data?.data?.attributes?.oppor_title}
               </p>  </div>
                <div className={style.ResearchOpportunity__OneClickText__size} > <p className={style.ResearchOpportunity__OneClickText}>
                  {/* Real estate investment must be fast, transparent and accessible to everyone. Bridging the industry with blockchain technology will pave the way for retail investors to access borderless investment worldwide with higher potential liquidity through the secondary market */}
                  {data?.data?.attributes?.oppor_text}
               </p> </div>

            </div>
        </>
    );
};

export default ResearchOpportunity;

