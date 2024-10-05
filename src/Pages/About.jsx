import React from "react";
import {Helmet} from "react-helmet";
import PageTitle from "./include/PageTitle";
import {Link} from "react-router-dom";

const About = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <PageTitle title={title}/>

            <section className="ca-about-3 pt-100 pb-70">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 mb-30">
                            <div
                                className="ca-value-img mr-50 wow img-custom-anim-left"
                                data-wow-duration="1.5s"
                                data-wow-delay=".3s"
                            >
                                <img
                                    className="w-100 br-7"
                                    src="assets/img/contact/ceo-pic.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="ca-value-content3">
                                <div className="ca-about-content-3 ca-sec-content-3">
                                    <h5 className="mt-4 ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                        CEO
                                    </h5>
                                    <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                        SAEED ANWAR
                                    </h2>
                                    <h5 className="mt-4 ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                        Our Vision
                                    </h5>
                                    <p className="pt-16 pb-40">
                                        Under the visionary leadership of CEO Saeed Anwar, Tiger Transport thrives as a
                                        beacon of excellence in the logistics industry.
                                        His entrepreneurial spirit and unwavering commitment inspire our dedicated team
                                        to deliver unparalleled service, ensuring that your goods are transported safely
                                        and on time, no matter the destination.
                                    </p>

                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-20">
                                        <div className="ca-value-cbox w-bg text-center br-7">
                                            <h3 className="ca-counter-title theme-black-3 fnw-700 pb-16">
                                                <span className="counter">2.4</span>K+
                                            </h3>
                                            <span className="v-text">Successfully Delivery</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-20">
                                        <div className="ca-value-cbox w-bg text-center br-7">
                                            <h3 className="ca-counter-title fnw-700 pb-16">
                                                <span className="counter">1800</span>+
                                            </h3>
                                            <span className="v-text">Supply Engineers</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-20">
                                        <div className="ca-value-cbox w-bg text-center br-7">
                                            <h3 className="ca-counter-title theme-black-3 fnw-700 pb-16">
                                                <span className="counter">199</span>+
                                            </h3>
                                            <span className="v-text">5 Star Reviews</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-20">
                                        <div className="ca-value-cbox w-bg text-center br-7">
                                            <h3 className="ca-counter-title fnw-700 pb-16">
                                                <span className="counter">125</span>+
                                            </h3>
                                            <span className="v-text">Countries Covered</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ca-about-3 pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ca-abo-item-1">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        {/* single about item */}
                                        <div className="ca-abo-single-item mb-30">
                                            <img
                                                className="w-100 lar-img-1"
                                                src="/assets/img/froozen-fish.jpeg"
                                                alt=""
                                            />
                                            <div className="ca-abo-hover-item">
                                                <div className="ca-abo-content">
                                                    <div className="ca-abo-icon">
                              <span>
                                <img
                                    src="/assets/img/icon/ca-delivery3.1.svg"
                                    alt=""
                                />
                              </span>
                                                    </div>
                                                    <p>Delivered Goods</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single about item */}
                                        <div className="ca-abo-single-item mb-30">
                                            <img
                                                className="w-100 sm-img-1"
                                                src="/assets/img/fruit-and-vegetable.jpeg"
                                                alt=""
                                            />
                                            <div className="ca-abo-hover-item">
                                                <div className="ca-abo-content">
                                                    <div className="ca-abo-icon">
                              <span>
                                <img
                                    src="/assets/img/icon/ca-delivery3.1.svg"
                                    alt=""
                                />
                              </span>
                                                    </div>

                                                    <p>Delivered Goods</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/* single about item */}
                                        <div className="ca-abo-single-item mb-30">
                                            <img
                                                className="w-100 sm-img-2"
                                                src="/assets/img/Meat.jpeg"
                                                alt=""
                                            />
                                            <div className="ca-abo-hover-item">
                                                <div className="ca-abo-content">
                                                    <div className="ca-abo-icon">
                              <span>
                                <img
                                    src="/assets/img/icon/ca-delivery3.1.svg"
                                    alt=""
                                />
                              </span>
                                                    </div>

                                                    <p>Delivered Goods</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single about item */}
                                        <div className="ca-abo-single-item mb-30">
                                            <img
                                                className="w-100 lar-img-2"
                                                src="/assets/img/about/ca-about-3.3.png"
                                                alt=""
                                            />
                                            <div className="ca-abo-hover-item">
                                                <div className="ca-abo-content">
                                                    <div className="ca-abo-icon">
                              <span>
                                <img
                                    src="/assets/img/icon/ca-delivery3.1.svg"
                                    alt=""
                                />
                              </span>
                                                    </div>
                                                    <h3 className="ca-abo-hover-title">
                                                        <span className="counter">11</span>K+
                                                    </h3>
                                                    <p>Delivered Goods</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-30">
                            <div className="ca-ab-content3">
                                <div className="ca-about-content-3 ca-sec-content-3">
                                    <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                        Why Choose Us
                                    </h5>
                                    <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                        Reliable and Innovative <br/> Refrigerated Transport
                                    </h2>
                                    <p className="pt-16 pb-32">
                                        With years of experience in refrigerated logistics, we lead the industry by
                                        offering
                                        innovative and reliable transport solutions. Our team ensures your products are
                                        delivered with the highest standards of care and efficiency.
                                    </p>
                                </div>
                                <div className="ca-ab-item-check">
                                    {/* single-item */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
          <span>
            <i className="fa-solid fa-check"/>
          </span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">
                                                Experts in Refrigerated Transport
                                            </h4>
                                        </div>
                                    </div>
                                    {/* single-item */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
          <span>
            <i className="fa-solid fa-check"/>
          </span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">
                                                Leaders in Cold Chain Logistics
                                            </h4>
                                        </div>
                                    </div>
                                    {/* single-item */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
          <span>
            <i className="fa-solid fa-check"/>
          </span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">
                                                Cutting-Edge Technology for Efficiency
                                            </h4>
                                        </div>
                                    </div>
                                    {/* single-item */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
          <span>
            <i className="fa-solid fa-check"/>
          </span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">
                                                Committed to Fresh and Timely Deliveries
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="ca-about-item3 cream-bg-3 p-relative">
                                    <p>
                                        Partner with us to experience seamless refrigerated logistics solutions tailored
                                        to
                                        your business needs. We are committed to delivering excellence every step of the
                                        way.
                                    </p>
                                </div>
                                <div className="ca-about-3-btn">
                                    <Link to="/services" className="ca-btn-primary-3 theme-bg-3 text-white br-50">
                                        Learn More
                                        <span>
          <i className="fa-solid fa-angle-right"/>
        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="ca-about-3 cream-bg-3 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="ca-choose-content3">
                                <div className="ca-about-content-3 ca-sec-content-3">
                                    <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                        Why Choose Us
                                    </h5>
                                    <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                        Meet Our Team: Pioneers in Cold Transport Solutions
                                    </h2>
                                    <p className="pt-16 pb-40">
                                        At Tiger Transport, we pride ourselves on our commitment to excellence and our
                                        unwavering dedication to client satisfaction. Our expert team understands the
                                        unique challenges of refrigerated logistics, ensuring that your goods are
                                        transported safely and efficiently. <br/> We are not just transporting products;
                                        we are safeguarding your investments and enhancing your business growth.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        {/* single box item */}
                                        <div className="ca-iner-ch-box-content mb-40">
                                            <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                                                Tailored Cold Transport Solutions
                                            </h4>
                                            <p>
                                                With years of experience in cold chain logistics, we provide customized
                                                solutions that meet the specific needs of our clients, ensuring that
                                                every delivery is executed with precision.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/* single box item */}
                                        <div className="ca-iner-ch-box-content mb-40">
                                            <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                                                Commitment to Safety and Quality
                                            </h4>
                                            <p>
                                                Our dedication to maintaining the highest safety standards and quality
                                                controls in the transportation of temperature-sensitive goods sets us
                                                apart in the logistics industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="ca-choose-img p-relative z-index-1">
                                <img
                                    className="w-100 wow img-custom-anim-left"
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".2s"
                                    src="assets/img/about/ca-choose-ing1.1.png"
                                    alt=""
                                />
                                <div className="ca-ch-butom-img p-absolute">
                                    <img
                                        className="w-100 wow img-custom-anim-left"
                                        data-wow-duration="1.5s"
                                        data-wow-delay=".3s"
                                        src="assets/img/about/ca-ch-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
