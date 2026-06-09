import styles from "./Homepage.module.css";
import { Link } from "react-router";

export default Homepage;

function Homepage() {
    return (
        <div className={styles.container}>
            <div className={styles.homePage}>
                <div>
                    <h1 className={styles.homePageTitle}>Trolley</h1>
                    <p className={styles.homePagePara}>For your shopping needs</p>
                </div>
                <Link to="/Shop" className={styles.homePageButton}>Let's Shop</Link>
            </div>
        </div>
    )
}

