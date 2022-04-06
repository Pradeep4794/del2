import React from 'react'
import Cart from './Cart'
import "../components/Cart.css"

const Carts = () => {
  return (
    <>
        <div className='main'>
            <Cart image="./suit.jpg" title="CART1" product="Tv" price="234" />
            <Cart  image ="./gt.jpg" title="CART2" product="Cooler" price="234"/>
            <Cart  image ="./white.jpeg" title="CART3" product="Fan" price="234"/>
        </div>
    </>
  )
}

export default Carts