import React from "react";
import style from "./ResearchOne-click.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import bg   from "@/libs/common/ui/assets/imgs/Mask group.png";
import bgMob   from "@/libs/common/ui/assets/imgs/ResearchSkewMobile.png";
import Image from "next/image";





export const ResearchOneClick = ({data} : {data : any} ) => {

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
            <div className={style.ResearchOneClick}>

                {widthWindow == null ? "" : widthWindow <= 500 ?
                    <Image
                        src={bgMob.src}
                        alt="Background"
                        layout="fill"
                        className={style.ResearchOneClick_bg}
                    />  : null
                }


                {widthWindow == null ? "" : widthWindow > 500 ?
                    <Image
                        src={bg.src}
                        alt="Background"
                        layout="fill"
                        className={style.ResearchOneClick_bg}
                    />
                    : null
                }

                {/* <Image
                    src={bg.src}
                    alt="Background"
                    layout="fill"
                    className={style.ResearchOneClick_bg}
                /> */}
            <div className={style.ResearchOneClick}> <p className={style.ResearchOneClick__OneClickTitle}> 
            {/* One-click access solution  */}
            {data?.data?.attributes?.rOneClick_title}
            </p>  </div>
            <div className={style.ResearchOneClick__OneClickText__size} > <p className={style.ResearchOneClick__OneClickText}>
               {/* dEquity offers one-click access to fractionalized
                & tokenized real-world assets with ownership powered by
                a multi-blockchain solution, creating a more inclusive earning model
                and a faster and more transparent real estate market */}
                {data?.data?.attributes?.rOneClick_text}
            </p> </div>

            </div>
        </>
    );
};

export default ResearchOneClick;

