import React, {useContext} from "react";
import {Helmet} from "react-helmet";
import PageTitle from "./include/PageTitle";
import {Store} from "../Utils/Store";
import {Link} from "react-router-dom";

const Contact = ({title}) => {
    const {state} = useContext(Store)
    const {ContactInfo} = state
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
                                            {ContactInfo.address}
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
                                        <Link to={`tel:${ContactInfo.contact_phone}`}>{ContactInfo.contact_phone}</Link>
                                        <br/>

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
                                        <Link
                                            to={`mailto:${ContactInfo.contact_email}`}>{ContactInfo.contact_email}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ca-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.9499519523056!2d54.623674775134816!3d24.348235978267283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e37eedfa38e33%3A0xd93638e675067bd4!2s1%20-%2049%202%20Street%20-%20Shakhbout%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1728110220367!5m2!1sen!2s"
                    width="100%"
                    height={650}
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>

        </div>
    );
};

export default Contact;
