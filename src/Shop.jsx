import { Link } from "react-router";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import { useState, useEffect } from 'react'
export default Shop;

function Shop() {
    const [quantities, setQuantities] = useState({});
    const { items, ItemCount, setItemCount } = useOutletContext();
    console.log(items);

    // event handlers

    useEffect(() => {
        const initialQuantities = {};
        items.forEach(item => {
            initialQuantities[item.id] = 1;
        });

        setQuantities(initialQuantities);
    }, [items]);

    useEffect(() => {
        console.log(ItemCount);
    }, [ItemCount]);

    function handleIncrement(id) {
        setQuantities(prev => ({
            ...prev,
            [id] : Number(prev[id] ?? 1) + 1
        }));
    }

    function handleDecrement(id) {
        setQuantities(prev => ({
            ...prev,
            [id] : Math.max(1, Number(prev[id] ?? 1) - 1)
        }));
    }

    function handleCart(id) {
        if (id in ItemCount && quantities[id] == ItemCount[id].count) {
            return
        }
        let i;
        for ( let item of items ) {
            if (item.id == id) {
                i = item;
                break;
            }
        }
        setItemCount(prev => ({
            ...prev,
            [id] : {
                count: Math.max(1, Number(quantities[id])),
                item: i
            }
        }));
    }

    function handleInput(id, value) {
        setQuantities(prev => ({
            ...prev,
            [id] : value
        }));
    }

    return (
        <div className={ styles.Container }>
            {
                items.map(item => (
                    <div key={ item.id } className={ styles.Itemcard }>
                        <img src={ item.image} alt={ item.title } className={ styles.ItemImage }/>
                        <div className={ styles.ImageDetails}>
                            <div className={ styles.LabelContainer }>
                                <label htmlFor={`itemCount-${item.id}`}>Count</label>
                                <input
                                    type="number"
                                    min="1"
                                    id={`itemCount-${item.id}`}
                                    name={`itemCount-${item.id}`}
                                    value={quantities[item.id] ?? 1}
                                    onChange={(e) => handleInput(item.id, e.target.value)}
                                />
                            </div>
                            <div className= { styles.ButtonContainer }>
                                <button className={ styles.IncrementButton } onClick={() => handleIncrement(item.id) }>
                                    Increment
                                </button>
                                <button className={ styles.DecrementButton } onClick={() => handleDecrement(item.id) }>
                                    Decrement
                                </button>
                                <button className={ styles.AddCartButton } onClick={() => handleCart(item.id) }>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

