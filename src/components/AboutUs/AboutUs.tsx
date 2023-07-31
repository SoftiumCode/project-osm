import React from 'react'
import './AboutUs.scss';

const AboutUs = () => {

  return (
    <section className='about-us'>
        <div className='container'>
            <div className='about-us-card' id='card-1'>
              <h2>Название</h2>
              <p>Текст</p>
            </div>
            <div className='about-us-card' id='card-2'>
              <h2>Название</h2>
              <p>Текст</p>
            </div>
            <div className='about-us-card' id='card-3'>
              <h2>Название</h2>
              <p>Текст</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs