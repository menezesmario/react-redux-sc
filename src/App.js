import React from 'react'
import { Provider } from "react-redux";
import store from './store'

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import Feed from './components/Feed'
import CarShop from './components/CarShop'

import { Container } from './styles';


const App = () => {
  return (
    <div>
      <Provider store={ store }>
          <Container>
           <Video />
           <Sidebar />
           </Container>
           <Feed />
           <CarShop />
      </Provider>
    </div>
  )
}

export default App;