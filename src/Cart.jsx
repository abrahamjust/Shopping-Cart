import { Link } from "react-router";
export default Cart;

function Cart() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
        </>
    )
}