import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./NavbarHeader.module.scss";
import cl from "classnames";
import type { RootState } from "@/src/store/store";
import {
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";
import Link from "next/link";

interface INavbarHeader {
  active?: boolean;
  className: string;
  translate: any;
  closeMenu?: () => void;
}

export const NavbarHeader: React.FC<INavbarHeader> = ({
  active,
  className,
  translate,
  closeMenu,
}) => {
  const dispatch = useDispatch();

  const list = translate?.Navigation.split(",");

  const navList = [
    // {
    //    title: list ? list[10] : "",
    //    link: "/#howItWorks",
    //    func: () => {
    //       if (location.pathname == "/") {
    //          dispatch(toggleScrollToHowAction());
    //       }
    //    },
    //    activeColor: false
    // },
    {
      title: list ? list[0] : "",
      link: "/market",
      activeColor: true,
    },
    {
      title: list ? list[1] : "",
      link: "/research",
      activeColor: true,
    },
    {
      title: list ? list[2] : "",
      link: "/about",
      activeColor: true,
    },
    {
      title: list ? list[3] : "",
      link: "/faq",
      activeColor: true,
    },
  ];

  const router = useRouter();

  const appLang = useSelector(
    (state: RootState) => state.app.appReducer.appLanguage
  );

  const [langMenuShow, setLangMenuShow] = React.useState(false);

  const theme = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );
  const [colorBtn, setColorBtn] = React.useState<boolean>();

  function toogleLangMenu() {
    setLangMenuShow(!langMenuShow);
  }

  function changeLang(lang: string) {
    dispatch(changeAppLanguageAction(lang));
    toogleLangMenu();

    closeMenu ? closeMenu() : null;
  }

  function toggleTheme() {
    dispatch(toggleAppThemeAction());
    closeMenu ? closeMenu() : null;
  }
  function showEmailModal() {
    dispatch(toggleModalEmailShowAction());
    closeMenu ? closeMenu() : null;
  }

  React.useEffect(() => {
    if (langMenuShow) {
      document.addEventListener("click", closeLangMenu);
    }
  }, [langMenuShow]);

  function closeLangMenu(e: any) {
    if (
      !e.target.classList.contains("dropdown-toggle") &&
      !e.target.classList.contains("dropdown-toggle")
    ) {
      setLangMenuShow(false);
      document.removeEventListener("click", closeLangMenu);
    }
  }

  React.useEffect(() => {
    toogleColorBtn();
  }, [theme, router.asPath, appLang]);

  function toogleColorBtn() {
    setColorBtn(
      theme == "theme-dark" &&
        ["/market", "/property", "/payment"].includes(router.asPath ?? "no")
    );
  }
  function checkActiveBtn(link: string) {
    var pageActive = ["/property", "/payment"].includes(router.asPath)
      ? "/market"
      : router.asPath;
    return pageActive === link;
  }

  React.useEffect(() => {
    const toStart = document.querySelector(".container-fluid");
    if (router.asPath != "/#howItWorks") smoothScroll(toStart);
  }, [router.asPath]);

  function smoothScroll(elem: any) {
    return new Promise<void>((resolve) => {
      if (!(elem instanceof Element)) {
        throw new TypeError("Argument 1 must be an Element");
      }
      let same = 0; // a counter
      let lastPos: any = null; // last known Y position
      // pass the user defined options along with our default
      const scrollOptions = Object.assign({});

      // let's begin
      elem.scrollIntoView(scrollOptions);
      requestAnimationFrame(check);

      // this function will be called every painting frame
      // for the duration of the smooth scroll operation
      function check() {
        // check our current position
        const newPos = elem.getBoundingClientRect().top;

        if (newPos === lastPos) {
          // same as previous
          if (same++ > 2) {
            // if it's more than two frames
            /* @todo: verify it succeeded
             * if(isAtCorrectPosition(elem, options) {
             *   resolve();
             * } else {
             *   reject();
             * }
             * return;
             */
            return resolve(); // we've come to an halt
          }
        } else {
          same = 0; // reset our counter
          lastPos = newPos; // remember our current position
        }
        // check again next painting frame
        requestAnimationFrame(check);
      }
    });
  }

  return (
    //commenting for research page
    //  <p></p>
    <nav className={cl(styles.navbar, className)}>
      <ul className={styles.navbar__list}>
        {navList.map((navItem, i) => (
          <li key={i}>
            <Link href={navItem.link} legacyBehavior>
              <a
                className={cl(
                  styles.navbar__item,
                  navItem.activeColor &&
                    checkActiveBtn(navItem.link) &&
                    styles["navbar__item--active"]
                )}
                onClick={() => {
                  // navItem?.func? ? navItem.func() : null;
                  closeMenu ? closeMenu() : null;
                }}
              >
                {navItem.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={cl(
          styles.navbar__btns,
          "d-flex justify-content-center align-items-center header__navbar--mobile__btns"
        )}
      >
        <div
          className={cl(
            styles.navbar__btns_dropdown,
            "dropdown mr-1 dropdown-wrapper"
          )}
        >
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={toogleLangMenu}
          >
            <span
              id="lang"
              style={router.locale == "ar" ? { marginLeft: "4px" } : {}}
            >
              {router.locale?.toUpperCase()}
            </span>
          </button>
          <div
            className={cl(
              styles.navbar__btns_dropdown_menu,
              langMenuShow ? "show dropdown-menu" : "dropdown-menu"
            )}
            aria-labelledby="dropdownMenuButton"
          >
            <Link href={router.pathname} locale={"en"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("EN")}>
                English
              </a>
            </Link>
            <Link href={router.pathname} locale={"es"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("ES")}>
                Spanish
              </a>
            </Link>
            <Link href={router.pathname} locale={"pt"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("POR")}>
                Portuguese
              </a>
            </Link>
            {/* <Link href={router.pathname} locale={"vi"} legacyBehavior>
                     <a className="dropdown-item" onClick={() => changeLang('VIE')}>Vietnamese</a>
                  </Link> */}
            <Link href={router.pathname} locale={"ja"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("JP")}>
                Japanese
              </a>
            </Link>
            <Link href={router.pathname} locale={"zh"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("CH")}>
                Chinese
              </a>
            </Link>
            <Link href={router.pathname} locale={"ar"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("AR")}>
                Arabic
              </a>
            </Link>
            <Link href={router.pathname} locale={"ko"} legacyBehavior>
              <a className="dropdown-item" onClick={() => changeLang("KOR")}>
                Korean
              </a>
            </Link>
          </div>
        </div>
        <div className={cl(styles.navbar__btns_btn_theme)}>
          <div
            className={cl(
              "btn-toggle d-flex  justify-content-between toggle-wrapper"
            )}
            onClick={() => toggleTheme()}
          >
            <div className="icon-div icon-div-light">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C12.4143 2 12.75 2.33579 12.75 2.75V3.75C12.75 4.16421 12.4143 4.5 12 4.5C11.5858 4.5 11.25 4.16421 11.25 3.75V2.75C11.25 2.33579 11.5858 2 12 2ZM18 12C18 15.3137 15.3138 18 12 18C8.68634 18 6.00004 15.3137 6.00004 12C6.00004 8.68629 8.68634 6 12 6C15.3138 6 18 8.68629 18 12ZM12.75 20.25C12.75 19.8358 12.4143 19.5 12 19.5C11.5858 19.5 11.25 19.8358 11.25 20.25V21.25C11.25 21.6642 11.5858 22 12 22C12.4143 22 12.75 21.6642 12.75 21.25V20.25ZM3.33989 7.00002C3.547 6.6413 4.00569 6.51839 4.36441 6.7255L5.23043 7.2255C5.58915 7.4326 5.71206 7.8913 5.50495 8.25002C5.29785 8.60874 4.83915 8.73164 4.48043 8.52454L3.61441 8.02454C3.25569 7.81743 3.13278 7.35874 3.33989 7.00002ZM19.5197 15.4755C19.161 15.2684 18.7023 15.3913 18.4952 15.75C18.2881 16.1087 18.411 16.5674 18.7697 16.7745L19.6357 17.2745C19.9944 17.4816 20.4531 17.3587 20.6602 17C20.8673 16.6413 20.7444 16.1826 20.3857 15.9755L19.5197 15.4755ZM20.6602 6.99998C20.8673 7.3587 20.7444 7.8174 20.3857 8.0245L19.5197 8.5245C19.1609 8.73161 18.7022 8.6087 18.4951 8.24998C18.288 7.89126 18.4109 7.43257 18.7697 7.22546L19.6357 6.72546C19.9944 6.51836 20.4531 6.64126 20.6602 6.99998ZM5.23041 16.7745C5.58913 16.5674 5.71203 16.1087 5.50493 15.75C5.29782 15.3913 4.83913 15.2684 4.48041 15.4755L3.61438 15.9755C3.25566 16.1826 3.13276 16.6413 3.33986 17C3.54697 17.3587 4.00566 17.4816 4.36438 17.2745L5.23041 16.7745Z"
                  fill="#B2BCC6"
                />
              </svg>
            </div>
            <div className="icon-div icon-div-dark">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.67144 14.8687C10.7508 14.8687 14.8685 10.7511 14.8685 5.67169C14.8685 5.06814 14.8103 4.47817 14.6993 3.90708C14.6231 3.51494 14.9854 3.16228 15.3539 3.31664C18.6702 4.70596 20.9998 7.98244 20.9998 11.803C20.9998 16.8824 16.8822 21.0001 11.8028 21.0001C7.98219 21.0001 4.70571 18.6704 3.31639 15.3541C3.16204 14.9857 3.51469 14.6234 3.90684 14.6996C4.47793 14.8106 5.0679 14.8687 5.67144 14.8687Z"
                  fill="#B2BCC6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={cl(styles.navbar__btns_btn)}>
          <a
            className={cl(
              "btn btn-hov btn-outline-primary my-2",
              colorBtn ? "btn-header-market" : "btn-header"
            )}
            href="#"
            data-toggle="modal1"
            data-target="#exampleModalCenter1"
            onClick={showEmailModal}
          >
            {translate?.ModalBtn}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHeader;
