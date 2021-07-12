import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../routes/Routes';

import '../assets/sass/components/WrapperNav.scss';

const WrapperNav = () => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(document.body.scrollWidth)

  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  useEffect((...menu) => {
    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target
      setWidth(innerWidth)
    });

    if (menu && width < 900) {
      setMenu(!menu)
    }
  }, [width])

  return (
    <section className="section--principal">
      <div className="div-containerMenu">
        <header className={menu ? 'header-open' : 'header-close'}>
          <i className="i--menu bx bx-right-arrow" onClick={handleToggleMenu}></i>
          <nav>
            <ul className={menu ? "ul--links--open" : "ul--links--close"}>
              <li>
                <NavLink exact activeClassName="link-active" to="/">
                  <i className="i--iconsNav bx bx-home-alt"></i>
                  <span className="span--nav">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="link-active" to="/about">
                  <i className="i--iconsNav bx bx-info-circle"></i>
                  <span className="span--nav">About</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="link-active" to="/experience">
                  <i className="i--iconsNav bx bx-briefcase-alt-2"></i>
                  <span className="span--nav">Experience</span>
                </NavLink>
              </li>

              <div className="div--details">
                <ul id="ul--details">
                  <div>
                    <li>
                      <a href='https://github.com/Nicolas-alt' target='_blank' rel="noreferrer">
                        <i className="i--social bx bxl-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="i--social bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Nicolas35103573" target="_blank"
                        rel="noreferrer">
                        <i className="i--social bx bxl-twitter"></i>
                      </a>
                    </li>
                  </div>
                  <hr />
                  <li>
                    Created by Nicolas
                  </li>
                </ul>
              </div>
            </ul>

            {/*Social links */}
            <ul className={menu ? "ul--social--close" : 'ul--social--open'}>
              <li className="li--social">
                <a href='https://github.com/Nicolas-alt' target='_blank'
                  rel="noreferrer">
                  <i className="i--social bx bxl-github"></i>
                </a>
              </li>

              <li className="li--social">
                <a
                  href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="i--social bx bxl-linkedin"></i>
                </a>
              </li>

              <li className="li--social">
                <a href="https://twitter.com/Nicolas35103573" target="_blank"
                  rel="noreferrer">
                  <i className="i--social bx bxl-twitter"></i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="div--router" onClick={ menu ? handleToggleMenu : undefined}>
        <Routes />
      </div>
    </section>
  );
};

export default WrapperNav;
