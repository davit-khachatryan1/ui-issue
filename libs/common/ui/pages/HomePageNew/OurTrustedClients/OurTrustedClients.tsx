import React, { useEffect } from "react";
import { useRouter } from "next/router";

import style from "./OurTrustedClients.module.scss";
import cl from "classnames";
import trustBG from "../../../assets/imgs/trustedBG.png";
import Image from "next/dist/client/image";
// import LogoLight from "../../assets/imgs/logo-light.svg";


export const OurTrustedClients = ({data} : {data : any}) => {

  const list = data?.data?.attributes?.trusted_clients_list?.split(",");

  let animation_values = data?.data?.attributes?.trusted_clients_list?.split(",");

  const [animationText, setAnimationText] = React.useState(null);

  const [animationIndex, setAnimationIndex] = React.useState(0);

  const { locale } = useRouter();

  useEffect(() => {
    changeTextTitle();
  }, [data]);

  async function changeTextTitle() {

    if (animation_values) {

      let tempIndex = animationIndex;

      if (animationIndex >= animation_values.length) {
        tempIndex = 0;
      }
      setAnimationText(animation_values[tempIndex]);
      tempIndex++;

      setAnimationIndex(tempIndex);
    }
  }

  return (
    <>

      <div className={style.trusted}>
        {/* <img src={trustBG.src} alt="Handshake" /> */}
        <Image src={trustBG.src} fill objectPosition='center' object-fit="contain" objectFit="contain" alt="Handshake"/> {/*  width={639} height={602} layout="fill" objectFit="cover" */}
        <div className={cl(style.trusted_text,
         locale == 'pt' && style.trusted_text_pt,
         locale == 'es' && style.trusted_text_es
         )}>
          {/* Our trusted clients are from */}
          {data?.data?.attributes?.trusted_clients_title}
          <span onAnimationIteration={changeTextTitle}>
            {/* Argentina */}
            {/* {list[0]} */}
            {animationText == null ? data?.data?.attributes?.trusted_clients_list?.split(",")[data?.data?.attributes?.trusted_clients_list?.split(",").length - 1] : animationText}
          </span>
        </div>

        <div className={style.trusted__decor1}></div>
        <div className={style.trusted__decor2}></div>
      </div>

    </>
  );
};



export default OurTrustedClients;
