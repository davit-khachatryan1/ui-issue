import React from "react";
import style from "./ResearchBeOwner.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import ResearchBeOwnerBg from "@/libs/common/ui/assets/imgs/Mask group.png";
import bgMob   from "@/libs/common/ui/assets/imgs/ResearchSkewMobile2.png";
import Image from "next/legacy/image";





export const ResearchBeOwner = ({data} : {data : any} ) => {

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
            <div className={style.ResearchBeOwner}>

                {widthWindow == null ? "" : widthWindow <= 500 ?
                    <Image
                        src={bgMob.src}
                        alt="Background"
                        layout="fill"
                        style={{margin:"0 auto",}}
                        className={style.ResearchBeOwner_bg}
                    />  : null
                }


                {widthWindow == null ? "" : widthWindow > 500 ?
                    <Image
                        src={ResearchBeOwnerBg.src}
                        alt="Background"
                        layout="fill"
                        style={{margin:"0 auto",}}
                        className={style.ResearchBeOwner_bg}
                    />
                    : null
                }

                {/* <Image
                    src={ResearchBeOwnerBg.src}
                    alt="Background"
                    layout="fill"
                    style={{margin:"0 auto",}}
                    className={style.ResearchBeOwner_bg}
                /> */}
                <div className={style.ResearchBeOwner}> <p className={style.ResearchBeOwner__BeOwnerTitle}> 
                  {/* Become an owner today!  */}
                  {data?.data?.attributes?.beOwner_title}
                </p>  </div>
                <div className={style.ResearchBeOwner__BeOwnerText__size} > <p className={style.ResearchBeOwner__BeOwnerText} dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.beOwner_text1}}>
                    {/* Own real estate minus the hassle. No maintenance fee. No annual fee. No membership fee. No utility bills. No admin fee */}
                    {/* {data?.data?.attributes?.beOwner_text1} */}
                    </p>
                    <div className={style.ResearchBeOwner__BeOwnerText__size} > <p className={style.ResearchBeOwner__BeownerLittletxt}>
                        {/* It's your property. Let us take care of the details. Accounts are audited, profit sharing is made transparent, and your yield is transferred to your NFT */}
                        {data?.data?.attributes?.beOwner_text2}
                    </p> </div></div>

            </div>
        </>
    );
};

export default ResearchBeOwner;

