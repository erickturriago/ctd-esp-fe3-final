import React from 'react'
import { useDentistaStates } from './utils/global.context'
import IconDH from '../../public/images/DH.png'
const Footer = () => {
  const {state} = useDentistaStates()
  return (
    <footer className={`footer ${state.theme}`}>
      <div>
        <img className='iconDH' src={IconDH} alt='DH-logo'/>
        <div className='socialMedia'>
          <i className="fa-brands fa-facebook iconRed"></i>
          <i className="fa-brands fa-square-instagram iconRed"></i>
          <i className="fa-brands fa-tiktok iconRed"></i>
          <i className="fa-brands fa-square-whatsapp iconRed"></i>
        </div>
      </div>
      <p>Powered by Erick Turriago</p>
    </footer>
  )
}

export default Footer
