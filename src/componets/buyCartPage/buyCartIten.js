import React from 'react'
import { ReactComponent as IconTrash } from '../../assets/icons/trash.svg'

function BuyCartIten({ id, image, price, name, setShoppingCart}) {
  const deleteProduct = (id) => {
    setShoppingCart(prevState => {
      const filterProducts = prevState.products.filter((product) => product.id !== id)
      return ({ products: filterProducts })
    })
  }

  return(
    <div key={id} className='product'>
      <img className='product-img' src={image} alt="" />
      <div className='product-description'>
        <h4 className='product-title'>{name}</h4>
        <p className='product-price'>{price}</p>
      </div>
      <div>
        <IconTrash className='trash' onClick={() => deleteProduct(id)} />
      </div>
    </div>
  )
}

export default BuyCartIten