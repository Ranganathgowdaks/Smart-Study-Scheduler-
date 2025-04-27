import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.brand}>
          Smart-Study
        </NavLink>
      </div>
      <hr className={styles.divider} />

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            🏠 Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/tasks"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            📝 Tasks
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/classess"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            📚 Classess
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/subjects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            📖 Subjects
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/focus-timer"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ⏳ Focus-Timer
          </NavLink>
        </li>
      </ul>

      <hr className={styles.divider} />

      <div className={styles.settings}>
        <IoMdSettings className={styles.settingsIcon} />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
