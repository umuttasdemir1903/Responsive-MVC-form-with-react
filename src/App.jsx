import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPostController from './pages/ListPost/ListPostController'
import AddPostController from './pages/AddPost/AddPostController'
import Header from './components/Header/Header'
import './assets/style.scss'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {
  return (
     <BrowserRouter>
     <Header/>
      <Toaster position='top-right'/>
     <Routes>
      <Route path='/' element={<ListPostController/>}/>
      <Route path='/add-post' element={<AddPostController/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App
