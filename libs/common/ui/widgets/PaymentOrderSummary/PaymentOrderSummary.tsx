import { FC } from "react";
import { Breadcrumbs, Button } from "../../components";
import { EthIcon } from "../../shared";
import styles from "./PaymentOrderSummary.module.scss";
import { useDispatch } from "react-redux";
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction} from "@/src/store/actions/app";



export const PaymentOrderSummary: FC<{paymentData : any}> = ({paymentData}) => {
  const breadcrumbsItems = [
    {
      // title: "Checkout",
      title: paymentData.data?.attributes.breadcrumb_1,
      link: "/",
    },
    {
      // title: "Payment Method",
      title: paymentData.data?.attributes.breadcrumb_2,
      link: "/",
    },
    {
      title: "Metamask",
      link: "/",
      shouldHighlight: true,
    },
  ];

  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  return (
    <div className={styles.summary}>
      <Breadcrumbs items={breadcrumbsItems} isPayment />
      <h2 className={styles.summary__title}>
         {/* Order summary */}
         {paymentData.data?.attributes.orderSummary}
      </h2>
      <div className={styles.summary__orderData}>
        <p className={styles.summary__orderProperty}>
          100 Ocean Drive{' '}
          <span className={styles.summary__orderTicker}>(EXR)</span>
        </p>
        <p className={styles.summary__orderQuantity}>
         1 {" "} 
         {/* Unit */}
         {paymentData.data?.attributes.unit}
        </p>
        <p className={styles.summary__orderLocation}>Miami, FL 24823</p>
        <p className={styles.summary__orderPrice}>
         $39.42 — $50.42 {" "}
         {/* per unit */}
         {paymentData.data?.attributes.perUnit}
        </p>
      </div>
      <div className={styles.summary__total}>
        <p className={styles.summary__totalTag}>
         {/* Order Total */}
         {paymentData.data?.attributes.orderTotal}
         :
        </p>
        <div className={styles.summary__totalPrice}>
          <p className={styles.summary__totalEth}>$100.00</p>
        </div>
      </div>
      <Button className={styles.summary__button} width="wide" type="regular" funcClick={handleToggleModal}>
        {/* Buy */}
        {paymentData.data?.attributes.btn}
      </Button>
    </div>
  );
};

export default PaymentOrderSummary;
