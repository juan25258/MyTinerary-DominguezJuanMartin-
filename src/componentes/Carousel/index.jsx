import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Style from './Style.css'

const images = [
  'https://img.freepik.com/fotos-premium/planeta-alienigena-espacio-profundo-paisaje-extraterrestre-ia-generativa_788189-2626.jpg?w=740',
  'https://img.freepik.com/foto-gratis/horizonte-centro-san-diego-luna-llena-sobre-agua-noche_649448-4045.jpg?w=740&t=st=1691527174~exp=1691527774~hmac=4bd3b880554d77b38746ef2061cdae8215d8c8d22a824465ada41a4265dd854f',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=740',
]
// index++ = [
// index = index + 1  ||
// index += 1
// ]
const Carousel = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  const setBullet = (indice) => {
    setIndex(indice)
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      // pasa al siguiente numero infinitamente
      // setIndex((pre) => pre + 1)
      // Pasa a la siguiente imagen en loop
      // prev()
      // Pasa a la anterior imagen en loop
      // next()
    }, 10000)

    return () => {
      // console.log('Me desmonté')
      // console.log('last time: ' + hour)
      clearInterval(intervalID)
    }

  }, [index])


  return (
    <div className="carousel">
      <Arrow src="/flecha-atras.svg" alt='flecha-atras' fn={prev} />
      <div className=''>
        <div className=''>
          <img src={images[index]} alt="" />
          <img src={images[index]} alt="" />
          <img src={images[index]} alt="" />
          <img src={images[index]} alt="" />
          {/* <img className='w-1/2' src="https://img.freepik.com/vector-premium/estilo-arte-papel-fondo-banner-paisaje-paisaje-bosque-naturaleza-verde_228338-530.jpg" alt="" /> */}
        </div>
        <div className=''>
          {
            images.map((item, indexMap) => {
              if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
              else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
            })
          }
        </div>
      </div>
      <Arrow src="/flecha-adelante.svg" alt='flecha-adelante' fn={next} />

      {/* <h1 className='text-8xl'>{index + 1}</h1> */}
    </div>
  )
}

export default Carousel