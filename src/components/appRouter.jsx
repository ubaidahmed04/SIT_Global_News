import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from '../home'
import NewsCategory from '../newsCategory'

const AppRouter = () => {
    return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/news/:category' element={<NewsCategory/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRouter