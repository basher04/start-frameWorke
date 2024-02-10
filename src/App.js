import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserLayout from './Layouts/UserLayouts/UserLayout'


export default function App() {

let router = createBrowserRouter([
  {path : '/' , element: <UserLayout/> , children:[
    {path : '/', element: <Home/>},
    {path : '/home', element: <Home/>},
    {path : '/about', element: <About/>},
    {path : '/portfolio', element: <Portfolio/>},
    {path : '/contact', element: <Contact/>}
  ]},
  
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
