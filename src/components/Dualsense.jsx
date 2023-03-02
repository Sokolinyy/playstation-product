import React from 'react'
import blueDual from "../img/DUALSENSE_STARLIGHTBLUE.jpg"
import redDual from "../img/DUALSENSE_COSMICRED.png"

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
    </section>
  )
}

export default Dualsense