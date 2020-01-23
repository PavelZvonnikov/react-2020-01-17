import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'

function Dish({dish}) {
  const {amount, decrease, increase} = useAmount(10)
  return (
    <div>
      <p>Name: {dish.name}</p>
      <p>Price: {dish.price}</p>
      <div>
        {amount}
        <Button onClick={decrease} type="primary">
          -
        </Button>
        <Button onClick={increase} type="primary">
          +
        </Button>
      </div>
    </div>
  )
}

export default Dish
