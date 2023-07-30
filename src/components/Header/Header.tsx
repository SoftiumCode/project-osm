import React from 'react';
import './Header.scss';

const Header = () => {

  const [transparent, setTransparent] = React.useState(true);

  const transparenting = () => {
    if (window.scrollY > 0) {
      setTransparent(false);
    } else setTransparent(true);
  }

  window.addEventListener('scroll', transparenting);

  return (
    <header className={transparent ? 'header' : 'header header-untransparent'}>
        <nav className='header-nav'>
          <div className='header-logo'>Logo</div>
          <div className='header-nav-list'>
            <a className='header-nav-item' href='#'>О нас</a>
            <button className='header-nav-button'>Присоединиться</button>
          </div>
        </nav>
    </header>
  )
}

export default Header