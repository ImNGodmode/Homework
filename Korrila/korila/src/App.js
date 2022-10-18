// import { useState } from "react";
import "./App.css";
import allReceipts from "./models/receipt";
import Receipt from "./components/Receipt";
import "./korila.css";
import Cart from "./components/cart";

function App() {
  const state = {
    receipt1: allReceipts[0],
    receipt2: allReceipts[1],
    receipt3: allReceipts[2],
    cartItems:[]
  };
const addToCart = () => {
  state.cartItems.push(state.receipt1)
  console.log(state.cartItems)
}
const addToCart2 = () => {
  state.cartItems.push(state.receipt2)
  console.log(state.cartItems)
}
const addToCart3 = () => {
  state.cartItems.push(state.receipt3)
  console.log(state.cartItems)
}

  return (
    <div className="App">
      <h1>Korrila Deville Korean BBQ</h1>
      <hr />
      <Cart cartItems={state.cartItems}/>
      <div className="parent">
        <Receipt receipt={state.receipt1} />
        <button onClick={addToCart()}>Add to Cart</button>
        <Receipt receipt={state.receipt2} />
        <button onClick={addToCart2()}>Add to Cart</button>
        <Receipt receipt={state.receipt3} />
        <button onClick={addToCart3()}>Add to Cart</button>
      </div>
    </div>
  );
}

export default App