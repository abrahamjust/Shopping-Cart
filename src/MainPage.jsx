import { Link, Outlet } from "react-router";
import styles from "./MainPage.module.css";
import { useEffect, useState } from 'react';
export default MainPage;

function MainPage() {

    const [items, setItems] = useState([]);
    const [ItemCount, setItemCount] = useState({});

    // get products from api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())            
            .then(data => setItems(data))
    }, []);

    return (
        <>
            <nav className={styles.MainNavBar}> 
                <div className={styles.MainNavLeft}>
                    <Link to="/" className={styles.MainNavLink}>Home</Link>
                    <Link to="Shop" className={styles.MainNavLink}>Shop</Link>
                </div>
                <div className={styles.MainNavRight}>                    
                    <div className={ styles.CartCounter}>{Object.keys(ItemCount).length}</div>
                    <Link to="Cart" className={styles.MainNavLink}>Cart</Link>
                </div>
            </nav>
            <div className={styles.MainPageContainer}>
                <Outlet context = {{ items, ItemCount, setItemCount }}/>
            </div>
        </>
    )
}