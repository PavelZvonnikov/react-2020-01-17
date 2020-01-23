import React from 'react'
import Dish from './dish'

function Menu({restaurant}) {
  return (
    <div>
      {restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
