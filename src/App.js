import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./Store/CardProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandeler() {
    setCartIsShown(true);
  }

  function hideCartHandeler() {
    setCartIsShown(false);
  }

  return (
    <CardProvider>
      {cartIsShown && <Cart onClick={hideCartHandeler}/>}
      <Header onClick={showCartHandeler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
