import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
/* import Main from './componentes/Main/index' */
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Carousel from './componentes/Carousel'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout>
           <Home />
           <Carousel />
        </Layout>
    </>
  )
}

export default App
