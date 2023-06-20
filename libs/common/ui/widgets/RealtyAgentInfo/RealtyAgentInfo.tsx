import Image from "next/image";
import { FC } from "react";
import styles from "./RealtyAgentInfo.module.scss";

interface IRealtyAgentInfo {
  realtyImage: string;
  agentImage: string;
  agentName: string;
  agentMotto: string;
  address: string;
  phoneNumber: string;
  agentEmail: string;
  agencyWebsite: string;
}

export const RealtyAgentInfo: FC<IRealtyAgentInfo> = ({
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
    <div className={styles.agent}>
      <div className={styles.agent__cover}>
        <Image
          fill
          className={styles.agent__realty}
          src={realtyImage}
          alt="realty"
        />
        <Image
          fill
          className={styles.agent__avatar}
          src={agentImage}
          alt="agent"
        />
      </div>
      <div className={styles.agent__info}>
        <p className={styles.agent__name}>{agentName}</p>
        <p className={styles.agent__motto}>{agentMotto}</p>
      </div>
      <ul className={styles.agent__creds}>
        <li>
          <p className={styles.agent__credTitle}>Address:</p>
          <p className={styles.agent__credText}>{address}</p>
        </li>
        <li>
          <p className={styles.agent__credTitle}>Phone number:</p>
          <a href={`tel:${phoneNumber}`} className={styles.agent__credText}>
            {phoneNumber}
          </a>
        </li>
        <li>
          <p className={styles.agent__credTitle}>E-mail:</p>
          <a href={`mailto:${agentEmail}`} className={styles.agent__credText}>
            {agentEmail}
          </a>
        </li>
        <li>
          <p className={styles.agent__credTitle}>Website:</p>
          <a
            href={'https://' + agencyWebsite}
            target="_blank"
            rel="noreferrer"
            className={styles.agent__credText}
          >
            {agencyWebsite}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RealtyAgentInfo;
