import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header-area-3 stiky">
                <div className="container header-3">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg col-md-6 col-6">
                            {/* ca-logo */}
                            <div className="ca-logo">
                                <Link to="/">
                                    <img src="assets/img/logo/ca-logo3.1.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                            {/* ca-main-menu */}
                            <div className="ca-main-menu-3">
                                <nav className="ca-mobile-menu-active-3">
                                    <ul>
                                        <li>
                                            <Link to="/">Home </Link>
                                        </li>
                                        <li>
                                            <Link to="/services">Services </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Contact Us </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg col-md-6 col-6">
                            {/* ca-btn */}
                            <div className="ca-btn-header d-none d-lg-block text-end">
                                <Link
                                    to="/contact-us"
                                    className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                >
                                    Get A Quote{" "}
                                    <span>
              <i className="fa-solid fa-angle-right"/>
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
                                        <rect x={10} width={20} height={2} fill="currentColor"/>
                                        <rect x={5} y={7} width={25} height={2} fill="currentColor"/>
                                        <rect x={10} y={14} width={20} height={2} fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ca-offcanvas w-bg">
                <div className="ca-offcanvas-wrapper">
                    <div className="ca-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="ca-offcanvas-logo">
                            <a href="#">
                                <img src="assets/img/logo/ca-logo3.1.png" alt=""/>
                            </a>
                        </div>
                        <div className="ca-offcanvas-close">
                            <button className="ca-offcanvas-close-toggle">
                                <i className="fal fa-times"/>
                            </button>
                        </div>
                    </div>
                    <div className="ca-offcanvas-menu-3 mb-40">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        Home{" "}
                                        <span>
                <i className="fa-solid fa-angle-down"/>
              </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">Home 01</a>
                                        </li>
                                        <li>
                                            <a href="index-02.html">Home 02</a>
                                        </li>
                                        <li>
                                            <a href="index-03.html">Home 03</a>
                                        </li>
                                        <li>
                                            <a href="index-04.html">Home 04</a>
                                        </li>
                                    </ul>
                                    <button className="ca-menu-close3">
                                        <i className="fas fa-chevron-right"/>
                                    </button>
                                </li>
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Service{" "}
                                        <span>
                <i className="fa-solid fa-angle-down"/>
              </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="service.html">Service</a>
                                        </li>
                                        <li>
                                            <a href="service-left.html">Service Left</a>
                                        </li>
                                        <li>
                                            <a href="service-right.html">Service Right</a>
                                        </li>
                                        <li>
                                            <a href="service-single.html">Service Single</a>
                                        </li>
                                    </ul>
                                    <button className="ca-menu-close3">
                                        <i className="fas fa-chevron-right"/>
                                    </button>
                                </li>
                                <li>
                                    <a href="#">
                                        Pages{" "}
                                        <span>
                <i className="fa-solid fa-angle-down"/>
              </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="team.html">Team</a>
                                        </li>
                                        <li>
                                            <a href="testimonial.html">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Faq</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing Plan</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="404.html">404</a>
                                        </li>
                                    </ul>
                                    <button className="ca-menu-close3">
                                        <i className="fas fa-chevron-right"/>
                                    </button>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog{" "}
                                        <span>
                <i className="fa-solid fa-angle-down"/>
              </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-left.html">Blog Left</a>
                                        </li>
                                        <li>
                                            <a href="blog-right.html">Blog Right</a>
                                        </li>
                                        <li>
                                            <a href="blog-single.html">Blog Single</a>
                                        </li>
                                    </ul>
                                    <button className="ca-menu-close3">
                                        <i className="fas fa-chevron-right"/>
                                    </button>
                                </li>
                                <li>
                                    <a href="#">
                                        Projects{" "}
                                        <span>
                <i className="fa-solid fa-angle-down"/>
              </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="projects.html">Project</a>
                                        </li>
                                        <li>
                                            <a href="project-left.html">Project Left</a>
                                        </li>
                                        <li>
                                            <a href="project-right.html">Project Right</a>
                                        </li>
                                        <li>
                                            <a href="project-single.html">Project Single</a>
                                        </li>
                                    </ul>
                                    <button className="ca-menu-close3">
                                        <i className="fas fa-chevron-right"/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="ca-offcanvas-contact mb-40">
                        <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50">
                            Get A Quote{" "}
                            <span>
          <i className="fa-solid fa-angle-right"/>
        </span>
                        </a>
                    </div>
                    <div className="ca-offcanvas-contact-info mb-40">
                        <h3 className="ca-offcanvas-sm-title">Contact Info</h3>
                        {/* single item */}
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon">
          <span>
            <i className="fa-solid fa-location-dot"/>
          </span>
                            </div>
                            <div className="ca-sm-single-item-4-content">
                                <p>
                                    <a href="#">55 Street, 2nd block, 3rd Floor Melbourne, Australia</a>
                                </p>
                            </div>
                        </div>
                        {/* single item */}
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon">
          <span>
            <i className="fa-solid fa-phone"/>
          </span>
                            </div>
                            <div className="ca-sm-single-item-4-content">
                                <p>
                                    <a href="tel:+0221234568806">+022 (123) 456 88 06</a>
                                </p>
                            </div>
                        </div>
                        {/* single item */}
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon">
          <span>
            <i className="fa-solid fa-envelope"/>
          </span>
                            </div>
                            <div className="ca-sm-single-item-4-content">
                                <p>
                                    <a href="mailto:infocargon@gmail.com">infocargon@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ca-offcanvas-social mb-40">
                        <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
                        <div className="ca-footer-social ca-footer-social-3">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin-in"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-x-twitter"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ca-offcanvas-overlay"/>


        </>
    )
}

export default Header