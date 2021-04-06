import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import BuyCart from "../buyCartPage/index";

function HomePage() {
  const [shoppingCart, setShoppingCart] = useState({
    products: [],
  });

  return (
    <section id="home">
      <Header shoppingCart={shoppingCart} />
      <Main setShoppingCart={setShoppingCart} />
      <BuyCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Footer />
    </section>
  );
}

export default HomePage;
