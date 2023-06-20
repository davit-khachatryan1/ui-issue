import { useRouter } from "next/router";
import React, { useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import styles from "./LogoText.module.scss";
import Link from 'next/link';


import LogoDark from "../../assets/imgs/dark_logo.svg";
import LogoLight from "../../assets/imgs/logo-light.svg";

export const LogoText = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [theme, setTheme] = useState("");

    const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

    React.useEffect(()=>{
        if(themeSelector) {
            setTheme(themeSelector);
        }
    },[themeSelector]);

  return(
    <Link className="navbar-brand" href="/"><div className="logo-image "> {theme == "theme-dark" ? <img src={LogoDark.src} alt="dequity.io logo dark" />: <img src={LogoLight.src} alt="dequity.io logo light" />}  </div></Link>
  );
};

export default LogoText;
