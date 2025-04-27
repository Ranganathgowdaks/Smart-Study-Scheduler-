import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./styles/Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.pageContent}>
          <Outlet /> {/* ✅ This renders the nested route component */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
