import React, {PureComponent} from 'react'
import Restaurants from './restaurants/restaurants'

class App extends PureComponent {
  render() {
    const {restaurants} = this.props
    return (
      <div>
        <Restaurants restaurants={restaurants} />
      </div>
    )
  }
}

export default App
