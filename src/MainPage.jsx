import { Link, Outlet } from "react-router";
import styles from "./MainPage.module.css";
export default MainPage;

function MainPage() {
    return (
        <>
            <nav className={styles.MainNavBar}> 
                <div className={styles.MainNavLeft}>
                    <Link to="/" className={styles.MainNavLink}>Home</Link>
                    <Link to="Shop" className={styles.MainNavLink}>Shop</Link>
                </div>
                <Link to="Cart" className={styles.MainNavLink}>Cart</Link>
            </nav>
            <div className={styles.MainPageContainer}>
                <Outlet />
            </div>
        </>
    )
}