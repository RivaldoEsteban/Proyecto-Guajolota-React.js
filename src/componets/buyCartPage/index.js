
import React from 'react'
import ArrowLeft from '../../assets/icons/left.png'
import './modal-cart-styles.css'
import BuyCartIten from './buyCartIten'

function BuyCart({ shoppingCart, setShoppingCart}) {
  return (
    <section className='buy-cart' id='buy-cart'>
      <header className='header-cart'>
        <img src={ArrowLeft} alt='arrow-left' id='arrow-left' />
        <h4>Carrito</h4>
      </header>
      <main className='articulos'>
        <div>
          {shoppingCart.products.map(product => {
            const id = product.id
            const priceBtnCart = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(product.price)
            return(
              <BuyCartIten key={id} id={id} image={product.image} price={priceBtnCart} name={product.name} setShoppingCart={setShoppingCart} />
            )
          }
          )}
        </div>
      </main>
      <footer>
        <button className='btn-buy' >Comprar</button>
      </footer>
    </section>
  )
}

export default BuyCart