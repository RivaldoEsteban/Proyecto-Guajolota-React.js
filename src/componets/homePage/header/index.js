import React from 'react'
import IconBuy from './header-components/iconBuy'
import Logo from './header-components/logo'
import './styles.css'

function Header({ shoppingCart }) {
  return (
    <header className='header-app'>
      <Logo />
      <IconBuy shoppingCart={shoppingCart} />
    </header>
  )
}

export default Header