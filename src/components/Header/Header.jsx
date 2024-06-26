import logo from "../../assets/img/logo-gold.svg";
import notification from "../../assets/img/notification.svg";
import userAvatar from "../../assets/img/user-avatar.svg";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="Logo" className={styles.logoImg} href="/" />
      </a>
      <ul className={styles.nav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Getting a Taxi</a>
        </li>
        <li>
          <a href="/">Become a Driver</a>
        </li>
        <li>
          <a href="/">Mobile App</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <div className={styles.icons}>
        <img src={notification} alt="notification icon" />
        <img src={userAvatar} alt="user avatar" />
      </div>
    </header>
  );
}
