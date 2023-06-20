import React, { useState } from "react";

import style from "./SkewBlock.module.scss";
import cl from "classnames";
import SkewBG from "../../../assets/imgs/SkewBlock.png";
import SkewBGActive from "../../../assets/imgs/SkewBlockActive.png";
import SkewBGBig from "../../../assets/imgs/SkewBlockBig.png";
import SkewBGBigMob from "../../../assets/imgs/SkewBlockBig-mob.png";
import SkewBGBigActive from "../../../assets/imgs/SkewBlockBigActive.png";
import Image from "next/image";

export const SkewBlock = (props : any) => {

   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event : any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [skewActive, setSkewActive] = useState(false);

  return (
    <>
       <div className={style.skew} onMouseEnter={()=>{setSkewActive(true)}} onMouseLeave={()=>{setSkewActive(false)}} >{/*  onMouseEnter={()=>{setSkewActive(true)}} onMouseLeave={()=>{setSkewActive(false)}} */}

       <div className={ props.size == "big" ? style.skew_bg_wrapper_big : style.skew_bg_wrapper}>

         { widthWindow == null ? "" : widthWindow < 575 && props.size == "big" ? 
            <img className={style.skew_bg} src={SkewBGBigMob.src} alt="Background" /> :
            <img className={style.skew_bg} src={SkewBGBig.src} alt="Background" />            
         }  

       </div>

      
       {/* width={180} height={22} layout="fill" objectFit="cover" */}

    <div className={style.skew__position}>
        {props.children}
    </div>

    </div>

      
    </>
  );
};



export default SkewBlock;
