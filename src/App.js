import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartModelHandler = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (<Fragment>
    {isCartOpen && <Cart cartClose={ cartModelHandler} />}
    <Header cartOpen={ cartModelHandler} />
    <main>
      <Meals />
    </main>
  </Fragment>
  );
}

export default App;
