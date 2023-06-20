import React, { useState } from 'react';
import { NavbarHeader } from "../../components";
import LogoText from "../../components/LogoText/LogoText";
import { MenuButton } from "../../shared";
import cl from "classnames";
import styles from "./Header.module.scss";

export const Header = ({data} : {data : any}) => {

    const [active, setActive] = useState(false);
    const menuRef = React.useRef<HTMLDivElement | null>(null);
    const menuButtonRef = React.useRef<any>(null);
    const closeMenu = (e: any) => {
        
      if (menuRef.current && active && !menuRef.current.contains(e.target) && e.target !== menuButtonRef?.current) {
        setActive(false);
      }
    };
    React.useEffect(() => {
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }, [active]);

    return(
        <header className={cl(styles.container, styles.header)}>
        <LogoText />
        <NavbarHeader translate={data?.data.attributes} className={styles["header__navbar--desktop"]} />
        <MenuButton
        active={active}
        reference={menuButtonRef}
        onClick={() => setActive(!active)}
        className={styles.header__menuButton}
        />
        <div
        ref={menuRef}
        className={cl(
            styles.header__mobileMenu,
            active && styles["header__mobileMenu--active"]
        )}
        >
        <NavbarHeader translate={data?.data.attributes}
            active={active}
            closeMenu={() => setActive(false)}
            className={styles["header__navbar--mobile"]}
        />
        </div>
        </header>
    );
};

export default Header;
