import React, { useState, /*useEffect*/ } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About-Me'
                className='nav-links'
                onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Projects'
                className='nav-links'
                onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar; 