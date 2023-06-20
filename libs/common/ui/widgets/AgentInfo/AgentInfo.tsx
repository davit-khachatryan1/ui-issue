import { FC } from "react";
import styles from "./AgentInfo.module.scss";
import cl from 'classnames';
interface IAgentInfo {
  agentImage: string;
  address: string;
  agencyWebsite: string;
  agentEmail: string;
  agentMotto: string;
  agentName: string;
  phoneNumber: string;
  realtyImage: string;
}
export const AgentInfo: FC<IAgentInfo> = ({
  address,
  agencyWebsite,
  agentEmail,
  agentImage,
  agentMotto,
  agentName,
  phoneNumber,
  realtyImage,
}) => {
  return (
    <div className={styles.agentInfo}>
      <div className={styles.agentInfo__coverWrapper}>
        <div className={styles.agentInfo__cover}>
          <img className={styles.agentInfo__coverBg} src={realtyImage} alt="realty bg" />
          <img className={styles.agentInfo__coverAvatar} src={agentImage} alt="agent" />
        </div>
        <div className={cl(styles.container, styles.agentInfo__creds)}>
          <div className={styles.agentInfo__credsMain}>
            <p className={styles.agentInfo__name}>{agentName}</p>
            <p className={styles.agentInfo__motto}>{agentMotto}</p>
          </div>
          <ul className={styles.agentInfo__credsList}>
            <li className={styles.agentInfo__credsItem}>
              <span>Address:</span>
              {address}
            </li>
            <li className={styles.agentInfo__credsItem}>
              <span>Email:</span>
              <a href={`mailto:${agentEmail}`}>{agentEmail}</a>
            </li>
            <li className={styles.agentInfo__credsItem}>
              <span>Phone number:</span>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </li>
            <li className={styles.agentInfo__credsItem}>
              <span>Website:</span>
              <a href={agencyWebsite}>{agencyWebsite}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
