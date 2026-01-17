import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter basename='/QuickFinance'>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
