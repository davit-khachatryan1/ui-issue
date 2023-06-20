import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { IRadio, RadioButton } from "../../components";
import {
  CreditCardIcon,
  MetamaskIcon,
  QRIcon,
  WalletConnectIcon,
} from "../../shared";
import styles from "./RadioForm.module.scss";
import cl from "classnames";

interface IRadioOption extends Omit<IRadio, "chosen"> {
  title: string;
  description: string;
  icon: ReactNode;
  selectedValue: string;
}
const RadioOption: FC<IRadioOption> = ({
  icon,
  description,
  group,
  name,
  onChange,
  selectedValue,
  title,
  value,
}) => {
  const chosen = selectedValue === value;
  return (
    <div
      className={cl(
        styles.form__option,
        chosen && styles["form__option--chosen"]
      )}
      onClick={() => onChange(value)}
    >
      <RadioButton onChange={onChange} group={group} name={name} value={value} chosen={chosen} />
      <div className={styles.form__optionIcon}>{icon}</div>
      <label className={styles.form__optionLabel}>{title}</label>
      <p className={styles.form__optionDescription}>{description}</p>
    </div>
  );
};

type Group = "payment";

export const RadioForm: FC<{
  group: Group;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  paymentData: any;
}> = ({ group, setValue, value, paymentData }) => {
  const formOptions = {
    payment: {
      // title: "Select Payment Method",
      title: paymentData.data?.attributes.title,
      radioOptions: [
        {
          name: "card",
          value: "card",
          icon: <CreditCardIcon className={styles.form__icon} />,
         //  title: "Payment with card",
          title: paymentData.data?.attributes.pay_cardTitle,
          // JS string \xA0 == HTML &nbsp
         //  description: "Provided by 3rd party",
          description: paymentData.data?.attributes.pay_cardDescription,
        },
        {
          name: "qr",
          value: "qr",
          icon: <QRIcon className={styles.form__icon} />,
         //  title: "QR Code Direct Payment",
         // description: "Tokens sent immediately",
          title: paymentData.data?.attributes.pay_qrTitle,
          description: paymentData.data?.attributes.pay_qrDescription,
        },
        {
          name: "metamask",
          value: "metamask",
          icon: <MetamaskIcon className={styles.form__icon} />,
         //  title: "Metamask Wallet",
         //  description: "Tokens sent immediately",
          title: paymentData.data?.attributes.pay_metamaskTitle,
          description: paymentData.data?.attributes.pay_metamaskDescription,
        },
        {
          name: "wallet",
          value: "wallet",
          icon: <WalletConnectIcon className={styles.form__icon} />,
         //  title: "WalletConnect",
         //  description: "Tokens sent immediately",
          title: paymentData.data?.attributes.pay_walletTitle,
          description: paymentData.data?.attributes.pay_walletDescription,
        },
      ],
    },
  } as const;
  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>{formOptions[group].title}</h1>
      <div className={styles.form__options}>
        {formOptions[group].radioOptions.map((option) => (
          <RadioOption
            {...option}
            key={option.name}
            selectedValue={value}
            onChange={setValue}
            group={group}
          />
        ))}
      </div>
    </form>
  );
};

export default RadioForm;
