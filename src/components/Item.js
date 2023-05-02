import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addItemToCart() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItemToCart} className={inCart ? "remove" : "add"}> {inCart ? "Remove From Cart" : "Add Item To Cart"} </button>
    </li>
  );
}

export default Item;
