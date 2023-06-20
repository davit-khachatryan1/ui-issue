import { FC, useState } from "react";

import dynamic from 'next/dynamic';
// import { PaymentOrderSummary, RadioForm } from "../../widgets";

const PaymentOrderSummary = dynamic(() => import('../../widgets/PaymentOrderSummary/PaymentOrderSummary'));
const RadioForm = dynamic(() => import('../../widgets/RadioForm/RadioForm'));

import styles from "./PaymentPage.module.scss";
import cl from "classnames";


export const PaymentPage: FC<{paymentData : any}> = ({paymentData}) => {
  /* temporary replacement before using global state for such data */
  const [value, setValue] = useState("card");
  
  return (
    <div className={cl(styles.payment, styles.container)}>
      <div className={styles.payment__content}>
        <RadioForm group="payment" value={value} setValue={setValue} paymentData={paymentData} />
        <PaymentOrderSummary paymentData={paymentData} />
      </div>
      <p className={styles.payment__disclaimer}>
        {/* All payment method’s are limited to purchasing 15% (8235 tokens) of the
        total tokens (including current ownership) */}
         {paymentData.data?.attributes.info}
      </p>
    </div>
  );
};

export default PaymentPage;
