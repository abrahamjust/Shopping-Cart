import { Link } from "react-router";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
export default Cart;

function Cart() {
    const { ItemCount, setItemCount } = useOutletContext();

    function handleDelete(id) {
        setItemCount(prevItemCount => {
            const { [id]:_, ...remainingCart } = prevItemCount;
            return remainingCart;
        });
    }

    return (
        <>
            <div className={ styles.CartContainer }>
                <div>Items in cart: {Object.keys(ItemCount).length}</div>
                {
                    Object.entries(ItemCount).map(([id, cartItem]) => (
                        <div key={ id } className={ styles.ItemCard }>
                            <div className={ styles.CartItem}>
                            <div className={ styles.ItemDetails }>
                                <div>Item name: { cartItem.item.title }</div>
                                <div>Item price: { cartItem.item.price }</div>
                                <div>Quantity: { cartItem.count }</div>
                            </div>
                            </div>
                            <div className={ styles.ItemButtons }>
                                    <button onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}