import React from 'react'
import Style from './Style.css'

const Arrow = ({ src, alt, fn }) => {
  return (
    <div className='' onClick={fn}>
      <img className='' src={src} alt={alt} />
    </div>
  )
}

export default Arrow