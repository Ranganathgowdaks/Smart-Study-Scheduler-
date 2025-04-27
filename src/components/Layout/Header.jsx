import { IoMdPerson } from "react-icons/io";
import styles from "./styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const username = useSelector((state) => state.auth.username);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;
  const pendingTasks = tasks.filter((task) => !task.isDone).length;

  return (
    <header className={styles.headerContainer}>
      {/* Left Section: Total Tasks */}
      <div className={styles.leftSection}>
        <h4>
          Total Tasks: <span className={styles.count}>{totalTasks}</span>
        </h4>
      </div>

      {/* Middle Section: Stats */}
      <div className={styles.middleSection}>
        <div className={styles.stat}>
          ✅ Completed: <span className={styles.count}>{completedTasks}</span>
        </div>
        <div className={styles.stat}>
          ⏳ Pending: <span className={styles.count}>{pendingTasks}</span>
        </div>
      </div>

      {/* Right Section: Profile */}
      <div className={styles.rightSection}>
        <NavLink to="/auth" className={styles.profile}>
          <IoMdPerson />
        </NavLink>
        {username && <div className={styles.username}>{username}</div>}
      </div>
    </header>
  );
};

export default Header;
