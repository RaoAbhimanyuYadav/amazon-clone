import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

function Product({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();

  const addToBasket = () => {
    new Noty({
      type: "success",
      layout: "topRight",
      text: `<div class="noty__container"><img src=${image}> ${title} has been added to basket</div>`,
      closeWith: ["button"],
    }).show();

    //dispatch the item into the layer
    // console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
