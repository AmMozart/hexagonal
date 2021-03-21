import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Hexagonal from './components/Hexagonal'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Hexagonal />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)