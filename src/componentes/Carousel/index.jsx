import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Slide from '../Slide'
import Style from './Style.css'

const images = [
[
  {
    country: 'País 1',
    city: 'Ciudad 1',
    image: 'https://img.freepik.com/fotos-premium/planeta-alienigena-espacio-profundo-paisaje-extraterrestre-ia-generativa_788189-2626.jpg?w=740',
  },
  {
    country: 'País 2',
    city: 'Ciudad 2',
    image: 'https://img.freepik.com/foto-gratis/horizonte-centro-san-diego-luna-llena-sobre-agua-noche_649448-4045.jpg?w=740&,t=st=1691527174~exp=1691527774~hmac=4bd3b880554d77b38746ef2061cdae8215d8c8d22a824465ada41a4265dd854f',
  },
  {
    country: 'País 3',
    city: 'Ciudad 3',
    image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=740',
  },
  {
    country: 'País 4',
    city: 'Ciudad 4',
    image: 'https://img.freepik.com/fotos-premium/puente-madera-traves-rio-temporada-otono_211251-361.jpg?w=740',
  },
],
[
  {
    country: 'País 5',
    city: 'Ciudad 5',
    image: 'https://img.freepik.com/foto-gratis/cascada-barco-limpio-china-natural_1417-1356.jpg?w=740&t=st=1691541560~exp=1691542160~hmac=e3cdcc6c927f9ae2c44a75b55f9563e4a88c37ffa1c594edb270e66856e355d1',
  },
  {
    country: 'País 6',
    city: 'Ciudad 6',
    image: 'https://img.freepik.com/fotos-premium/lago-mapourika-west-coast-nueva-zelanda-twilice_46383-182.jpg?w=740',
  },
  {
    country: 'País 7',
    city: 'Ciudad 7',
    image: 'https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?w=740&,t=st=1691541578~exp=1691542178~hmac=50a2bc0ee147b2a4de0e66719b9c3b311579795416997b44f918fd312f9b0b19',
  },
  {
    country: 'País 8',
    city: 'Ciudad 8',
    image: 'https://img.freepik.com/foto-gratis/muelle-lago-hallstatt-austria_181624-44201.jpg?w=740&t=st=1691541587~exp=1691542187~hmac=addb04db5f0ea627202bc0c2b83f2ef56d694d91382f6d4fb914c7b9ff422fa8',
  },
],
[
  {
    country: 'País 9',
    city: 'Ciudad 9',
    image: 'https://img.freepik.com/foto-gratis/toma-aerea-hermosa-orilla-mar-colinas-fondo-al-atardecer_181624-24143.jpg?w=740&t=st=1691541584~exp=1691542184~hmac=a784f8713bdd71b7a77e8bf45d9d422311efb900396029fd3109a3333154432b',
  },
  {
    country: 'País 10',
    city: 'Ciudad 10',
    image: 'https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&,t=st=1691540744~exp=1691541344~hmac=b094758e36b81aed6a37cc0a18e99df4b611c2f0820684c58489e0ffce28bc83',
  },
  {
    country: 'País 11',
    city: 'Ciudad 11',
    image: 'https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l1ZGFkZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    country: 'País 12',
    city: 'Ciudad 12',
    image: 'https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
  },
],
]


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
      //next()
    }, 10000)

    return () => {
       /* console.log('Me desmonte') */
      /* console.log('last time: ' + hour) */
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
                  <div className='carousel-imagenes'>
                  <Slide images={images[index]} />
                  </div>
                <div className='indicadores'>
                    {
                      images.map((item, indexMap) => {
                        if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
                        else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
                      })
                    }
                  </div>
                </div>
                <Arrow src="/flecha-adelante.svg" alt='flecha-adelante' fn={next} />
              </div>
        </section>
              
    </> 
  )
}

export default Carousel