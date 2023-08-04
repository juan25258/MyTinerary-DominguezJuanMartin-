import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Main from './componentes/Main/index'
import Layout from './layouts/Layout'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout>
          {/*  <Cities /> */}  {/* lo que estas dentro del layout recibe como hijo */}
           <Home />
        </Layout>
    </>
  )
}

export default App
