import React from 'react';
import logo from '../assets/images/logo.png';
import toggleIcon from '../assets/images/toggle-icon.png';
import moon from '../assets/images/moon.svg'
import logo2 from '../assets/images/devfinder.svg'

const Navbar = ({toggleState, handleToggleState}) => {
  return (
    <div className='navbar flex justify-between items-center'>
      <div className="logo ">
        <img src={toggleState ? logo : logo2} alt="logo" className='w-[140px] lg:w-[200px]' style={{color: !toggleState && '#222731'}} />
      </div>

     <div className="toggle flex items-center gap-[20px]">
        <h5 className='text-[1rem] lg:text-xl'style={{color: !toggleState && '#4b689b'}}>{toggleState ? 'LIGHT' : 'DARK'}</h5>
        <div className="mode">
            <img src={toggleState ?toggleIcon : moon} className='lg:w-[30px] cursor-pointer' alt="toggle-icon" onClick={handleToggleState}/>
        </div>
     </div>

    </div>
  )
}

export default Navbar