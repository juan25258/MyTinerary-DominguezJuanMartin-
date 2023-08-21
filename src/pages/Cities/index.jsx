import React, { useEffect, useState } from 'react';
import Style from './Style.css'

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/Cities');
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  return (
    <>
      <main>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <article className="City container">
          <h2 className='d-flex ' >Cities</h2>
          <div className="card-deck d-flex flex-wrap justify-content-center gap-5">
            {cities.map(city => (
              <div className="card" key={city.id}>
                <img src={city.image} className="card-img-top" alt={city.name} />
                <div className="card-body">
                  <h5 className="card-title">{city.name}</h5>
                  <p className="card-text">{city.details}</p>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}