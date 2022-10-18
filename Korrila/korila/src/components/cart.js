import React from "react";

function Cart(props) {
 console.log(props.cartItems)

    return (
    <>
        Cart
        {props.cartItems.length}
        <ul>       
        {props.cartItems.map((item, i) =>{
            {5}

            <li key={i}>
                <div className="orderList">
                <h2 className="receiptTitle">{item.person[i]}</h2>

                {/* <div className="listItem"> Order:{item.order.main}</div>
                <div className="listItem">Protein: {item.order.protein}</div>
                <div className="listItem"> Rice: {item.order.rice}</div>
                <div className="listItem"> Sause: {item.order.sauce}</div>

                <div className="listItem">
                {" "}
                Toppings: {item.order.toppings}
                </div>*/}
                </div>  
            </li>
        })}</ul>
           
    </>
  );
}

export default Cart;