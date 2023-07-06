import React from "react";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
          alt="Amazon ad"
        ></img>
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
