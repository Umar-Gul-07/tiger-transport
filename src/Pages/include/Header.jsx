import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Store} from "../../Utils/Store";

function Header() {
    const {state} = useContext(Store)
    const {ContactInfo} = state
    const location = useLocation()

    const [class1, setclass1] = useState("ca-offcanvas w-bg")
    const [class2, setclass2] = useState("ca-offcanvas-overlay")

    const onToggle = () => {
        setclass1("ca-offcanvas w-bg ca-offcanvas-open")
        setclass2("ca-offcanvas-overlay ca-offcanvas-overlay-open")
    }

    const onToggleOff = () => {
        setclass1("ca-offcanvas w-bg")
        setclass2("ca-offcanvas-overlay")
    }

    useEffect(() => {
        onToggleOff();
    }, [location]);

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
                                            <Link to="/rent-vehicle">Rent Vehicle </Link>
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
                                <a
                                    href="contact.html"
                                    className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                >
                                    Get A Quote{" "}
                                    <span>
        <i className="fa-solid fa-angle-right"/>
      </span>
                                </a>
                            </div>
                            <div className="ca-header-action-item d-lg-none text-end">
                                <button onClick={onToggle} type="button" className="ca-offcanvas-toogle">
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

            <div className={`${class1}`}>
                <div className="ca-offcanvas-wrapper">
                    <div className="ca-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="ca-offcanvas-logo">
                            <a href="#">
                                <img src="assets/img/logo/ca-logo3.1.png" alt=""/>
                            </a>
                        </div>
                        <div className="ca-offcanvas-close">
                            <button onClick={onToggleOff} className="ca-offcanvas-close-toggle">
                                <i className="fal fa-times"/>
                            </button>
                        </div>
                    </div>
                    <div className="ca-offcanvas-menu-3 mb-40">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home </Link>
                                </li>
                                <li>
                                    <Link to="/services">Services </Link>
                                </li>
                                <li>
                                    <Link to="/rent-vehicle">Rent Vehicle </Link>
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
                                    {ContactInfo.address}
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
                                    <Link to={`tel:${ContactInfo.contact_phone}`}>{ContactInfo.contact_phone}</Link>

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
                                    <Link
                                        to={`mailto:${ContactInfo.contact_email}`}>{ContactInfo.contact_email}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ca-offcanvas-social mb-40">
                        <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
                        <div className="ca-footer-social ca-footer-social-3">
                            <ul>
                                <li>
                                    <Link to={`${ContactInfo.instagram}`}>
                                        <i className="fa-brands fa-instagram"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${ContactInfo.facebook}`}>
                                        <i className="fa-brands fa-facebook-f"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${ContactInfo.linkedin}`}>
                                        <i className="fa-brands fa-linkedin-in"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${ContactInfo.twitter}`}>
                                        <i className="fa-brands fa-x-twitter"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${class2}`}/>


        </>
    );
}

export default Header;
