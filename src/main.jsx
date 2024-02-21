import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
import DashLayout from './components/Dashboard/DashLayout.jsx'
import DashHome from './components/Dashboard/DashHome.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Dashboard/Login/Login.jsx'
import Signup from './components/Dashboard/Signup/Signup.jsx'
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashLayout />}>
      <Route path='' element={<DashHome />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)