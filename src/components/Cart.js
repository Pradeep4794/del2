import React from 'react'

const Cart = (props) => {
  return (
    <>
        <div className='cart'>
            <div className='image'>
                <img src={props.image} alt="pic" />
            </div>
            <div className='body'>
                <h2>{props.title}</h2>
                <p>{props.product}</p>
                <p>${props.price}</p>
            </div>
        </div>
    </>
  )
}

export default Cart