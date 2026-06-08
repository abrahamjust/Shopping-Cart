import styles from "./Homepage.module.css";
import { Link } from "react-router";

export default Homepage;

function Homepage() {
    return (
        <div className="homePage">
            <div>
                <h1>Trolley</h1>
                <p>For your shopping needs</p>
            </div>
            <Link to="/Shop">Let's Shop</Link>
        </div>
    )
}

