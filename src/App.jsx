import { useState } from 'react'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {path:'/',element: <Layout />,
  children:[
    {path:'/',element: <Home />}
  ]
},
{path:'/Cities',element: <Layout />,
children:[
  {path:'/Cities',element: <Cities />}
]},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
