export default function Slide({cities}) {
  return (
    <div className="slide">
      {cities.map((city, index) => (
        <div className='cities' key={index}>
          <img src={city.image} alt={`Slide ${index + 1}`} />
          <div className="description">
            <p>{city.country}</p>
            <p>{city.name}</p>
          </div>
        </div>    
      ))}
    </div>
  )
}




