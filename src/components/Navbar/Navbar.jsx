import React from 'react'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
            <img src="#" alt="logo" />
        </div>
        <ul className="app__navbar-links">
            {['accueil', 'a propos','services','blog','contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        
    </nav>
  )
}

export default Navbar