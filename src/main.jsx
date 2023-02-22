import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import  { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user'
import themeReducer from './features/theme'

import planetReducer from './features/planet'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    planet: planetReducer
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
