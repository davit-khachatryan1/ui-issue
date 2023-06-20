import React from "react";
import style from "./AboutVision.module.scss";
import cl from "classnames";
import AboutVisionImage from "../../../assets/imgs/AboutVisionImage.png";



export const AboutVision = ({ data }: { data: any }) => {
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
            <div className={style.AboutVision}>
                {widthWindow == null ? "" : widthWindow <= 1024 ?
                    <h2 className={style.AboutVision__title}>Vision</h2>
                    : null
                }
                <div className={style.AboutVision__img}>
                    <img src={AboutVisionImage.src} alt="Performance real estate vs. others" />
                </div>
                <div className={style.AboutVision__content}>
                    {widthWindow == null ? "" : widthWindow > 1024 ?
                        <h2 className={style.AboutVision__title}>Vision</h2>
                        : null
                    }
                    <p className={style.AboutVision__text1}>Miami-Dade County single-family home median prices increased 9.4% year-over-year in November 2022 have risen for 132 consecutive months (11&nbsp;years), the longest running-streak on record</p>
                </div>

            </div>
        </>
    );
};



export default AboutVision;
