import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Style from './Style.css'

const images = [
  'https://img.freepik.com/fotos-premium/planeta-alienigena-espacio-profundo-paisaje-extraterrestre-ia-generativa_788189-2626.jpg?w=740',
  'https://img.freepik.com/foto-gratis/horizonte-centro-san-diego-luna-llena-sobre-agua-noche_649448-4045.jpg?w=740&t=st=1691527174~exp=1691527774~hmac=4bd3b880554d77b38746ef2061cdae8215d8c8d22a824465ada41a4265dd854f',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=740'
  /* 'https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1691540744~exp=1691541344~hmac=b094758e36b81aed6a37cc0a18e99df4b611c2f0820684c58489e0ffce28bc83' */
]

const images1=[
  'https://img.freepik.com/foto-gratis/cascada-barco-limpio-china-natural_1417-1356.jpg?w=740&t=st=1691541560~exp=1691542160~hmac=e3cdcc6c927f9ae2c44a75b55f9563e4a88c37ffa1c594edb270e66856e355d1',
  'https://img.freepik.com/fotos-premium/lago-mapourika-west-coast-nueva-zelanda-twilice_46383-182.jpg?w=740',
  'https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?w=740&t=st=1691541578~exp=1691542178~hmac=50a2bc0ee147b2a4de0e66719b9c3b311579795416997b44f918fd312f9b0b19'
  /* 'https://img.freepik.com/foto-gratis/toma-aerea-hermosa-orilla-mar-colinas-fondo-al-atardecer_181624-24143.jpg?w=740&t=st=1691541584~exp=1691542184~hmac=a784f8713bdd71b7a77e8bf45d9d422311efb900396029fd3109a3333154432b' */
]

const images2 = [
  'https://img.freepik.com/foto-gratis/muelle-lago-hallstatt-austria_181624-44201.jpg?w=740&t=st=1691541587~exp=1691542187~hmac=addb04db5f0ea627202bc0c2b83f2ef56d694d91382f6d4fb914c7b9ff422fa8',
  'https://img.freepik.com/foto-gratis/hermoso-paisaje-formaciones-rocosas-junto-al-mar-queens-bath-kauai-hawaii-al-atardecer_181624-36857.jpg?w=740&t=st=1691541591~exp=1691542191~hmac=f96bdd269b3bcdcaebb14f652dd10091fddf2a70fa0d9b57bee36aea6d8aa4f9',
  'https://img.freepik.com/fotos-premium/puente-madera-traves-rio-temporada-otono_211251-361.jpg?w=740'
  /* 'https://img.freepik.com/foto-gratis/montanas-seoraksan-estan-cubiertas-niebla-manana-amanecer-seul-corea_335224-313.jpg?w=740&t=st=1691541597~exp=1691542197~hmac=bafe69202775277aef18bed4e5be7a6b26c000ac652cf91df53650d30cb1dd4e' */
]

const images3 = [
  'https://img.freepik.com/foto-gratis/muelle-lago-hallstatt-austria_181624-44201.jpg?w=740&t=st=1691541587~exp=1691542187~hmac=addb04db5f0ea627202bc0c2b83f2ef56d694d91382f6d4fb914c7b9ff422fa8',
  'https://img.freepik.com/foto-gratis/hermoso-paisaje-formaciones-rocosas-junto-al-mar-queens-bath-kauai-hawaii-al-atardecer_181624-36857.jpg?w=740&t=st=1691541591~exp=1691542191~hmac=f96bdd269b3bcdcaebb14f652dd10091fddf2a70fa0d9b57bee36aea6d8aa4f9',
  'https://img.freepik.com/fotos-premium/puente-madera-traves-rio-temporada-otono_211251-361.jpg?w=740'
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
      // console.log('Me desmonte')
      // console.log('last time: ' + hour)
      clearInterval(intervalID)
    }

  }, [index])


  return (
    <>
        <div className="carousel">
          <Arrow src="/flecha-atras.svg" alt='flecha-atras' fn={prev} />
          <div className=''>
            <div className='carousel-imagenes'>
                <div className='imagenes'>
                  <img className='' src={images[index]} alt="" />  
                </div>
                <div className='imagenes'>
                  <img className='' src={images1[index]} alt="" />
                </div>
                <div className='imagenes'>
                  <img className='' src={images2[index]} alt="" />
                </div>
                <div className='imagenes'> 
                  <img className='' src={images3[index]} alt="" /> 
                </div>
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
            
            
          {/* <h1 className='text-8xl'>{index + 1}</h1> */}
        </div>      
    </>
    
    
  )
}

export default Carousel