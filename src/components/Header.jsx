import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='sonyLogo'>
        <p>SONY</p>
      </div>
      <div className='products'>
        <div className='products-list'>
          <p>DualSense wireless controller</p>
          <p>PULSE 3D wireless headset</p>
          <p>Media remote</p>
          <p>HD camera</p>
        </div>
        <div className='button-container'>
          <button className='buyBtn'>Buy now</button>
        </div>
      </div>
    </header>
  )
}

export default Header