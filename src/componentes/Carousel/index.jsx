import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Slide from '../Slide'
import Style from './Style.css'
import axios from 'axios'

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [cities, setCities] = useState([])
  const [groupedCities, setGroupedCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/Cities')
      .then(response => {
        setCities(response.data)
        setGroupedCities(groupByFour(response.data))
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }, [])

  const next = () => {
    if (index < groupedCities.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(groupedCities.length - 1)
    }
  }

  const setBullet = (indice) => {
    setIndex(indice)
  }

  const groupByFour = (array) => {
    const result = []
    for (let i = 0; i < array.length; i += 4) {
      result.push(array.slice(i, i + 4))
    }
    return result
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      next()
      next() //con esto hago que el autoavance comience luego de cambiar por primera vez el slide
    }, 
    5000
    )

    return () => {
      clearInterval(intervalID)
    }
  }, [index])

  return (
    <>
      <section className='container'>
        <h2 className='carousel-title'>Popular MyTineraries</h2>
        <div className="carousel">
          <Arrow src="/flecha-atras.svg" alt='flecha-atras' fn={prev} />
          <div className=''>
            {groupedCities[index] && (
              <div className='carousel-imagenes'>
                <Slide cities={groupedCities[index]} />
              </div>
            )}
            <div className='indicadores'>
              {groupedCities.map((group, groupIndex) => {
                if (groupIndex === index) return <span key={groupIndex} className='cursor-pointer'>⚫</span>
                else return <span key={groupIndex} className='cursor-pointer' onClick={() => setBullet(groupIndex)}>⚪</span>
              })}
            </div>
          </div>
          <Arrow src="/flecha-adelante.svg" alt='flecha-adelante' fn={next} />
        </div>
      </section>
    </>
  )
}

export default Carousel;