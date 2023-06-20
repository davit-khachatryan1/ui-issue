import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction} from "@/src/store/actions/app";
import { useRouter } from 'next/router';
import { sendEmail } from "@/src/scripts/email";
import styles from "./ModalEmail.module.scss";
import cl from "classnames";

export const ModalEmail = ({data}:{data:any}) => {

    const router = useRouter();

    const modalShow = useSelector((state: RootState) => state.app.appReducer.modalEmailShow);
    const modalThanksShow = useSelector((state: RootState) => state.app.appReducer.modalThanksShow);
    
    const dispatch = useDispatch();
    const handleCloseModal = () => dispatch(toggleModalEmailShowAction());
    const handleCloseModalThanks = () => dispatch(toggleModalThanksShowAction());

    const [emailValue, setEmailValue] = React.useState("");

    const [emailError, setEmailError] = React.useState(false);

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function isEmailValid(value : string) {
        return EMAIL_REGEXP.test(value);
    }

    function validateChangeEmail(email: string) {

        if(isEmailValid(email)) {
            setEmailError(false);
        }

        setEmailValue(email);
        
    }

    function validateSendEmail(email: string) {

        if(email && email !== "") {
            setEmailError(false);

            if(isEmailValid(email)) {
                setEmailError(false);

                sendEmail(emailValue, dispatch);

                // fetch("/api/email", {
                //     method: "POST",
                //     body: JSON.stringify({email: emailValue}),
                //     headers: {
                //     "Content-Type": "application/json",
                //     Accept: "application/json",
                //     },
                // }).then((res)=>{
                //     console.log(res);
                // }).catch((err)=>{
                //     console.log(err);
                // });

            } else {
                setEmailError(true);
            }

        } else {
            setEmailError(true);
        }

    }

    function handleKeyDown(event : any) {
        if(event.key == "Enter") {
            validateSendEmail(emailValue);
        }
    }

    const [theme, setTheme] = useState("");

    const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

    React.useEffect(()=>{
        if(themeSelector) {
            setTheme(themeSelector);
        }
    },[themeSelector]);
    
    return (
        <>
            <Modal dir={router.locale == "ar" ? "rtl" : "ltr"}  show={modalShow} onHide={handleCloseModal} contentClassName={theme} onKeyDown={handleKeyDown}>
                <button className={styles.modal__exit} onClick={handleCloseModal}><span></span></button>
                <Modal.Body>
                <h4 className={styles.modal__title}>{data.data.attributes.email_title}</h4>
                <p className={styles.modal__info}>{data.data.attributes.email_subtitle1}</p>
                <p className={styles.modal__info}>{data.data.attributes.email_subtitle2}</p>
                <div className={cl(styles.modal__form,
                  emailError && styles.modal__error
                  )}>
                    <input value={emailValue} onChange={(ev)=>validateChangeEmail(ev.target.value)} type="email" className={styles.modal__input} id="input-email-id" placeholder={data.data.attributes.email_input}/>
                    <span className={cl(styles["modal__error-span"],
                     router.locale == "ar" && styles["modal__error-span--rtl"]
                    )}>
                        Invalid email <img src="/modal-error.svg" alt="" />
                    </span>
                </div>
                
                <button type="button" onClick={()=>validateSendEmail(emailValue)} className={styles.modal__btn}>{data.data.attributes.email_send}</button>
                </Modal.Body>
            </Modal>

            <Modal dir={router.locale == "ar" ? "rtl" : "ltr"}  show={modalThanksShow} contentClassName={theme} onHide={handleCloseModalThanks}>
                <Modal.Body>
                <h4 style={{"textAlign": "center"}}>{data.data.attributes.thankYou_text}</h4>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalEmail;
