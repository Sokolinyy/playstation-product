import React from 'react'
import blueDual from "../img/DUALSENSE_STARLIGHTBLUE.jpg"
import redDual from "../img/DUALSENSE_COSMICRED.png"
import WhiteDual from "../img/DUALSENSE_WHITE.png"
import purpleDual from "../img/DUALSENSE_GALACTIC_PURPLE.png"
import blackDual from "../img/DUALSENSE_BLACK.jpg"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Dualsense = () => {

  return (
    <section className='dualsense'>
      <h2 className='new-section-h2'>Choose your path</h2>
      <div className="dualsenseContainer">
        <div className="left">
          <h2 className='colorName'>STAR LIGHT BLUE</h2>
          <img className='blueDualImg' src={blueDual} alt="" />
        </div>
        <div className="right">
        <h2 className='colorName'>COSMIC RED</h2>
          <img className='redDualImg' src={redDual} alt="" />
        </div>
      </div>
      <h2 className='new-section-h2'>AVAILABLE IN MANY COLORS</h2>
      <div>
        <div className='differentColors white'>
          <img src={WhiteDual} alt="" />
        </div>
        <div className='differentColors purple'>
          <img src={purpleDual} alt="" />
        </div>
        <div className='differentColors black'>
          <img src={blackDual} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Dualsense