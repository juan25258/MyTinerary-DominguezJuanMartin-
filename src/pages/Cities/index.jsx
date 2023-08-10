import React, { Fragment } from 'react'
import Styles from './Styles.css'

export default function Cities() {
  return (
    <>
      <main>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
        </nav>
        <article className='City'>
          <h2>Cities</h2>
        </article>
        
      </main>   
    </>
  )
}
