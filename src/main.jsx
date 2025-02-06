import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home/Home.jsx'
import ProductDetails from './assets/components/ProductDetails/ProductDetails.jsx'
import Dashboard from './assets/components/Dashboard/Dashboard.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: `/productDetails/:product_id`,
        loader: ()=>  fetch(`products.json`),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
