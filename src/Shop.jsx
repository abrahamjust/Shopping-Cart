import { Link } from "react-router";
export default Shop;

function Shop() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
            <div className="Container">
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">

                </div>
                <div className="Shopitems">
                    
                </div>
                <div className="Shopitems">

                </div>
            </div>
        </div>
    )
}