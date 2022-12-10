import {  useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Store/cart-context-provider";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartModelHandler = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartContextProvider>
      {isCartOpen && <Cart cartClose={ cartModelHandler} />}
      <Header cartOpen={ cartModelHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
