import React from 'react'

function Card({ image, productName, price, setShoppingCart, id }) {
  const newPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(price)

  function addToShoppingCart() {
    setShoppingCart(prevState => {
      const duplicateDProduct = prevState.products.find((product) => product.id === id)
      if (duplicateDProduct) {
        return prevState
      }
      return ({
        products: [
          ...prevState.products,
          {
            image,
            name: productName,
            price,
            id,
          }
        ]
      })
    })
  }

  return (
    <div className='product' id={id}>
      <img className='product-img' src={image} alt={image} />
      <div className='product-description'>
        <h4 className='product-title'>{productName}</h4>
        <p className='product-price'>{newPrice}</p>
      </div>
      <button
        className='btn-card'
        onClick={addToShoppingCart}
      >
        Comprar
      </button>
    </div>
  )
}

export default Card