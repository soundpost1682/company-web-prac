import React from 'react'
import Hero from './Hero'
import Forum from './Forum'
import Contact from './Contact'

const MainPage = () => {
  return (
    <div className='py-32'>
      <Hero/>
      <Forum/>
      <Contact/>
    </div>
  )
}

export default MainPage
