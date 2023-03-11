import React, { useState, useEffect } from 'react'
import blueDual from "../img/DUALSENSE_STARLIGHTBLUE.jpg"
import redDual from "../img/DUALSENSE_COSMICRED.png"
import WhiteDual from "../img/DUALSENSE_WHITE.png"
import purpleDual from "../img/DUALSENSE_GALACTIC_PURPLE.png"
import blackDual from "../img/DUALSENSE_BLACK.jpg"
import background from "../img/IMG_0686.PNG"
import psLogo from "../img/playstation-logo-blue.png"


const Dualsense = () => {
  
  useEffect(() => {
    const white = document.querySelector(".whiteDualsense");
    const purple = document.querySelector(".purpleDualsense");
    const black = document.querySelector(".blackDualsense");
    const whiteBg = document.querySelector(".differentColors.white")
    const purpleBg = document.querySelector(".differentColors.purple")
    const blackBg = document.querySelector(".differentColors.black")

    const handleScroll = () => {
      // Make animation when user scroll the page
      let offsetY = window.scrollY;
  
      if (white) {
        white.style.transform = `translateX(calc(-250vh + ${offsetY * 0.8}px)`;
        purpleBg.style.backgroundPositionY = `${offsetY * 0.5}px`
      }
  
      if (purple) {
        purple.style.transform = `translateX(calc(380vh - ${offsetY}px)`
        purpleBg.style.backgroundPositionY = `${offsetY * 0.5}px`

      }
  
      if (black) {
        black.style.transform = `translateX(calc(-420vh + ${offsetY * 0.8}px)`;
        blackBg.style.backgroundPositionY = `-${offsetY * 0.5}px`
      }
    };
  
    // Animation for Haptic feedback, and Adaptive triggers image
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <h2>WHITE</h2>
          <img className='whiteDualsense' src={WhiteDual} alt="" />
        </div>
        <div className='differentColors purple'>
          <h2>GALACTIC PURPLE</h2>
          <img className='purpleDualsense' src={purpleDual} alt="" />
        </div>
        <div className='differentColors black'>
          <h2>BLACK</h2>
          <img className='blackDualsense' src={blackDual} alt="" />
        </div>
      </div>
        <h2 className='new-section-h2'>Stay tuned...</h2>
      <div className='stay-tuned'>
        <img src={psLogo} alt="" />
      </div>
    </section>
  )
}

export default Dualsense