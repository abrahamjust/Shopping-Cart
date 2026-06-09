import { Link } from "react-router";
import styles from "./Shop.module.css";
export default Shop;

function Shop() {
    return (
        <div className={styles.Container}>
            <div className={styles.Itemcard}>
                <p>Item image</p>
                <div>
                    <p>Item name</p>
                    <input type="text" id="itemCount" name="itemCount"/>
                    <label htmlFor="itemCount"></label>
                    <div className= {styles.ButtonContainer}>
                        <button>
                            Increment
                        </button>
                        <button>
                            Decrement
                        </button>
                        <button>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
            <div className={styles.Itemcard}>
                <p>Hello</p>
            </div>
        </div>
    )
}