import React from "react";
import style from "./ResearchInvestmentClass.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import MaskGroup from "@/libs/common/ui/assets/imgs/Mask group.png";
//import MaskGroup from "../../../assets/imgs/NewClassResearch.png" //смотрит вправо
import Image from "next/image";





export const ResearchInvestmentClass = ({data} : {data : any} ) => {


    const [skewActive, setSkewActive] = React.useState("style.ResearchInvestmentClass_bg"|| null);



    return (
        <>

            <div className={style.ResearchInvestmentClass}>


                <Image
                    src={MaskGroup.src}
                    alt="Background"
                    layout="fill"
                    className={style.ResearchInvestmentClass_bg}


                />
                <div className={style.ResearchInvestmentClass}> <p className={style.ResearchInvestmentClass__OneClickTitle}> 
                  {/* New investment class  */}
                  {data?.data?.attributes?.ric_title}
                </p>  </div>
                <div className={style.ResearchInvestmentClass__OneClickText__size} > <p className={style.ResearchInvestmentClass__OneClickText}>
                  {/* dEquity brings a new investment class to the market.
                    Investors can now invest in a portion of an entire building.
                    This makes the market more transparent and accessible for everyone. */}
                    {data?.data?.attributes?.ric_text}
                </p>

            </div>
            </div>
        </>
    );
};

export default ResearchInvestmentClass;

