import {Link} from "react-router-dom";
import {useContext} from "react";
import {Store} from "../../Utils/Store";

function Footer() {
    const {state} = useContext(Store)
    const {ContactInfo} = state

    return (
        <>
            <footer className="theme-bg-3 pt-30 p-relative z-index-1">
                <div className="ca-ft-shape p-absolute ft-shape-2">
                    <img src="assets/img/shape/ca-footer-shape3.1.png" alt=""/>
                </div>
                <div className="ca-cta-area p-relative z-index-1">
                    <div className="container">
                        <div className="ca-cta-shape3 p-absolute d-none d-lg-block">
                            <img src="assets/img/shape/cta-shape-3.1.png" alt=""/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="ca-cta-content">
                                    <h2 className="ca-section-title cta-title-1 text-white fnw-700">
                                        Partner with Us Today and Ensure Safe Transport for Your Refrigerated Goods.
                                    </h2>

                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="ca-btn-cta-3 text-end">
                                    <Link to="/contact-us" className="ca-btn-primary-3 w-bg">
                                        Get Started{" "}
                                        <span>
                <i className="fa-solid fa-angle-right"/>
              </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="b-bottom pt-48"/>
                    </div>
                </div>
                <div className="ca-footer-area">
                    <div className="container">
                        <div className="ca-ft-area w-bg">
                            <div className="row">
                                <div className="col-xl-8 col-md-6 mb-30">
                                    <div className="ca-footer widget-1">
                                        <div className="ca-ft-logo">
                                            <Link to="index-03.html">
                                                <img src="assets/img/logo/ca-logo3.1.png" alt=""/>
                                            </Link>
                                        </div>
                                        <div className="ca-ft-content ca-ft-content-3 mb-24">
                                            <p className="pt-16">
                                                Our extensive network, along with specialized <br/> refrigeration
                                                expertise,
                                                guarantees that your perishable goods are <br/>
                                                transported safely and maintained at the optimal temperature, on time.
                                            </p>
                                        </div>
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
                                <div className="col-xl-4 col-md-6 mb-30">
                                    <div className="ca-footer widget-2">
                                        <h4 className="ca-title fnw-700 theme-black-3 pb-24">
                                            Quick Links
                                        </h4>
                                        <div className="ca-footer-menu ca-footer-menu-3">
                                            <ul>
                                                <li>
                                                    <Link to="/">Home </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services">Service </Link>
                                                </li>
                                                <li>
                                                    <Link to="/rent-vehicle">Rent Vehicle</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-us">About Us </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact-us">Contact Us </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copy-right-border border-1"/>
                                </div>
                                <div className="col-lg-6">
                                    <p className="copry-right-text pt-24">
                                        Copyright ©2024 Tiger Transport. All Rights Reserved
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="copy-right-menu pt-24">
                                        <ul>
                                            <li>
                                                <Link to="#">Terms &amp; Conditions </Link>
                                            </li>
                                            <li>
                                                <Link to="#">Privacy Policy </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer