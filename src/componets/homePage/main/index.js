import React from 'react'
import TitlePrincipal from './hero/title-principal.js'
import GuajolotaList from './guajolota-list/guajolota-list.js'
import './main-styles.css'

function Main({ setShoppingCart }) {
  return (
    <main>
      <TitlePrincipal />
      <GuajolotaList setShoppingCart={setShoppingCart} />
    </main>
  )
}

export default Main
