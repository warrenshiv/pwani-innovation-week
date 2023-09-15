import React, { useEffect, useRef } from 'react'
import logo from "../../logo.png"
import "../../assets/scss/theme.scss"
import "../../assets/css/theme.css"

// import headerAnimation from '../../assets/js/main.js'
// import "../../assets/js/main.js"

function Navbar() {

  const headerRef = useRef(null);

  useEffect(() => {
    const headerAnimation = () => {
      const header = headerRef.current;
      const scrollTop = window.scrollY;
      
      if (header) {
        if (scrollTop > 100) {
          // console.log("Here point");
          header.classList.add('header-shrink');
        } else {
          header.classList.remove('header-shrink');
        }
      } else {
        // console.log("Error here");
      }
    };

    // Attach the headerAnimation function to various window events
    window.addEventListener('load', headerAnimation);
    window.addEventListener('resize', headerAnimation);
    window.addEventListener('scroll', headerAnimation);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('load', headerAnimation);
      window.removeEventListener('resize', headerAnimation);
      window.removeEventListener('scroll', headerAnimation);
    };
  }, []);


  return (
    <header id="header" className="header fixed-top" ref={headerRef}>
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div class="site-logo">
              <a className="scrollto" href="#hero-block"
                ><img
                  className="logo-icon"
                  src={logo}
                  alt="logo"
              /></a>
            </div>

            <div className="navbar-btn order-lg-2">
              <a
                className="btn btn-secondary"
                href="https://afritickets.events/2270-pwani-innovation-week"
                
                >Tickets</a
              >
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navigation"
              className="navbar-collapse collapse justify-content-lg-end me-lg-3"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#about-section">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#speakers-section"
                    >Speakers</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#schedule-section"
                    >Schedule</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#tickets-section"
                    >Tickets</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#venue-section">Venue</a>
                </li>
                <li class="nav-item">
                  <a className="nav-link scrollto" href="#sponsors-section"
                    >Sponsors</a
                  >
                </li>
              </ul>
              {/* <!--//nav--> */}
            </div>
            {/* <!--//navabr-collapse--> */}
          </nav>
          {/* <!--//main-nav--> */}
        </div>
        {/* <!--//container--> */}
      </div>
      {/* <!--//branding--> */}
    </header>
  )
}

export default Navbar