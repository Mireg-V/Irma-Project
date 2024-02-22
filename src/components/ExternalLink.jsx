import config from "../config";
import styles from './ToExternals.module.css'

export default function ExternalLink({ type }) {
  return (
    <a
      className={`${styles.button} ${styles[type]}`}
      href={config[type].href + config.tel}
    >
      <img src={config[type].icon} width={40} height={40} alt="" />
      <p>{config[type].text}</p>
    </a>
  );
};