import { useState } from 'react'
import logoMontaña from './assets/images.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Body from './componentes/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <Body />

      <Footer />
      
    </>
  )
}

export default App
