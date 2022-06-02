import React from 'react'
import './MainPage.css';

const MainPage = () => {
  return (
    <div>
        <div className='text-secondary d-flex flex-row justify-content-between mx-3 mt-3'>
            <h2 className='text-dark'>Top 10 Songs</h2>
            <button className='size'>
                <span className='plus'>+</span>
                <span className='ms-2'>Add Song</span>
            </button>
        </div>
    </div>
  )
}

export default MainPage