import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
   <header className="header-area-3 stiky">
  <div className="container header-3">
    <div className="row align-items-center">
      <div className="col-xl-3 col-lg col-md-6 col-6">
        {/* ca-logo */}
        <div className="ca-logo">
          <Link to="index-03.html">
            <img src="assets/img/logo/ca-logo3.1.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="col-xl-6 col-lg-7 d-none d-lg-block">
        {/* ca-main-menu */}
        <div className="ca-main-menu-3">
          <nav className="ca-mobile-menu-active-3">
            <ul>
              <li>
                
                <li>
                <Link to="/">Home</Link>
              </li>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              
             
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-xl-3 col-lg col-md-6 col-6">
        {/* ca-btn */}
        <div className="ca-btn-header d-none d-lg-block text-end">
          <Link
            to="contact.html"
            className="ca-btn-primary-3 theme-bg-3 text-white br-50"
          >
            Get A Quote{" "}
            <span>
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
        </div>
        <div className="ca-header-action-item d-lg-none text-end">
          <button type="button" className="ca-offcanvas-toogle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={16}
              viewBox="0 0 30 16"
            >
              <rect x={10} width={20} height={2} fill="currentColor" />
              <rect x={5} y={7} width={25} height={2} fill="currentColor" />
              <rect x={10} y={14} width={20} height={2} fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header