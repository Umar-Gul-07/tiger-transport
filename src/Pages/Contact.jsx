import React from "react";
import {Helmet} from "react-helmet";
import PageTitle from "./include/PageTitle";

const Contact = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <PageTitle title={title}/>

            <section className="ca-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {/* single box item */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div className="ca-location-3">
                                <div className="ca-location-icbox">
                                    <div className="ca-location-icbox-img">
                    <span>
                      <img src="assets/img/icon/ca-map3.1.svg" alt=""/>
                    </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                            Our Address
                                        </h4>
                                        <p>
                                            55 Street, 2nd block, 3rd Floor
                                            <br/>
                                            Melbourne, Australia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single box item */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div className="ca-location-3">
                                <div className="ca-location-icbox">
                                    <div className="ca-location-icbox-img">
                    <span>
                      <img src="assets/img/icon/ca-ph3.2.svg" alt=""/>
                    </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                            Contact Us
                                        </h4>
                                        <a href="tel:+0221234568806">+022 (123) 456 88 06</a> <br/>
                                        <a href="tel:+47122109878">(+47) 1221 09 878</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single box item */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div className="ca-location-3">
                                <div className="ca-location-icbox">
                                    <div className="ca-location-icbox-img">
                    <span>
                      <img src="assets/img/icon/ca-envelop3.3.svg" alt=""/>
                    </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                            Email Us
                                        </h4>
                                        <a href="mailto:">infocargon@gmail.com</a>
                                        <a href="mailto:">drmtech99.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ca-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13879239.529449532!2d43.044947896897405!3d31.866193584077507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sbd!4v1723948083378!5m2!1sen!2sbd"
                    className="contact-page__google-map"
                    allowFullScreen=""
                />
            </div>

            <section className="ca-conatct-form1 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="ca-con-rep-form cream-bg-3 text-center">
                            <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                Send Us Message
                            </h4>
                            <p className="pb-32">
                                Your email address will not be published. Required fields are
                                marked *
                            </p>
                            <div className="ca-cmt-from">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="Last Name"/>
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                            <select
                                                className="nice-select wide ca-select"
                                                style={{display: "none"}}
                                            >
                                                <option data-display="Service Type">Nothing</option>
                                                <option value={1}>01</option>
                                                <option value={2}>02</option>
                                                <option value={3}>03</option>
                                                <option value={4}>04</option>
                                            </select>
                                            <div className="nice-select wide ca-select" tabIndex={0}>
                                                <span className="current">Service Type</span>
                                                <ul className="list">
                                                    <li
                                                        data-value="Nothing"
                                                        data-display="Service Type"
                                                        className="option selected"
                                                    >
                                                        Nothing
                                                    </li>
                                                    <li data-value={1} className="option">
                                                        01
                                                    </li>
                                                    <li data-value={2} className="option">
                                                        02
                                                    </li>
                                                    <li data-value={3} className="option">
                                                        03
                                                    </li>
                                                    <li data-value={4} className="option">
                                                        04
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-20">
                      <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                    <div className="ca-radion-btn">
                                        <input
                                            type="radio"
                                            id="saveinfo"
                                            name="fav_language"
                                            defaultValue="saveinfo"
                                        />
                                        <label htmlFor="saveinfo">
                                            Save the information's in this browser for next time use
                                        </label>
                                    </div>
                                    <div className="ca-blg-sen-btn text-start">
                                        <button
                                            type="submit"
                                            className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                        >
                                            {" "}
                                            Submit Now{" "}
                                            <span>
                        <i className="fa-solid fa-angle-right"/>
                      </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
