import { FC } from "react";
import styles from "./RadioButton.module.scss";
import cl from "classnames";
export interface IRadio {
  name: string;
  group: string;
  value: string;
  chosen: boolean;
  onChange(arg0: string): void;
}
export const RadioButton: FC<IRadio> = ({
  name,
  group,
  value,
  chosen,
  onChange,
}) => {
  return (
    <input
      aria-label={name}
      className={cl(styles.radio, chosen && styles["radio--chosen"])}
      type="radio"
      name={name}
      onChange={() => onChange(value)}
      radioGroup={group}
      value={value}
      checked={chosen}
    />
  );
};

export default RadioButton;
