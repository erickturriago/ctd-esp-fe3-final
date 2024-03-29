import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates } from './utils/global.context'

const Navbar = () => {

  const {state, dispatch} = useDentistaStates()

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      <button className='btnTheme' onClick={()=>{dispatch({type: 'CHANGE_THEME'})}}>
        {state.theme=='light'?
        <i className="fa-solid fa-moon"></i>
        :
        <i className="fa-solid fa-sun"></i>}
      </button>
    </nav>
  )
}

export default Navbar