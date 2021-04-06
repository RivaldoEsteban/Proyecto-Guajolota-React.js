import React from 'react'
import CartIcon from '../../../../assets/icons/cart.png'

function IconBuy({ shoppingCart }) {
  const cantidad = shoppingCart?.products?.length;
  return (
    <div className='cantidad'>
      <img className='img-cart' src={CartIcon} alt="" />
      <p>{cantidad}</p>
    </div>
  )
}

export default IconBuy