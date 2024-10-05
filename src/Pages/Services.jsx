import React from "react";
import {Helmet} from "react-helmet";
import PageTitle from "./include/PageTitle";
import {Link} from "react-router-dom";

const Services = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>

            <PageTitle title={title}/>

            <div className="ca-iner-servics pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {/* single service box */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div
                                className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                <div className="ca-about-icon">
                                    <div className="ca-about-ic ca-ser-ic">
                                        <img src="assets/img/icon/ca-iner-ser1.1.svg" alt=""/>
                                    </div>
                                    <div className="ca-num">
                                        <h4 className="overly-num overly-num2">01</h4>
                                    </div>
                                </div>
                                <div className="ca-service-content ca-service-content-iner">
                                    <h4 className="ca-title fnw-700 pb-16 pt-32">
                                        <Link to="service-single.html">Chiller Van</Link>
                                    </h4>
                                    <p className="pb-24">
                                        A Chiller Van is specially designed to transport temperature-sensitive goods at
                                        a controlled temperature. Ideal for perishable items like dairy, fruits, and
                                        vegetables, it ensures freshness and quality during transit
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* single service box */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div
                                className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                <div className="ca-about-icon">
                                    <div className="ca-about-ic ca-ser-ic">
                                        <img src="assets/img/icon/ca-iner-ser1.2.svg" alt=""/>
                                    </div>
                                    <div className="ca-num">
                                        <h4 className="overly-num overly-num2">02</h4>
                                    </div>
                                </div>
                                <div className="ca-service-content ca-service-content-iner">
                                    <h4 className="ca-title fnw-700 pb-16 pt-32">
                                        <Link to="service-single.html">Freezer Van</Link>
                                    </h4>
                                    <p className="pb-24">
                                        A Freezer Van provides a cold storage solution for transporting frozen goods.
                                        Equipped with powerful refrigeration systems, it is perfect for delivering
                                        frozen foods, ice cream, and other products that require sub-zero temperatures.
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* single service box */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div
                                className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                <div className="ca-about-icon">
                                    <div className="ca-about-ic ca-ser-ic">
                                        <img src="assets/img/icon/ca-iner-ser1.3.svg" alt=""/>
                                    </div>
                                    <div className="ca-num">
                                        <h4 className="overly-num overly-num2">03</h4>
                                    </div>
                                </div>
                                <div className="ca-service-content ca-service-content-iner">
                                    <h4 className="ca-title fnw-700 pb-16 pt-32">
                                        <Link to="service-single.html">Chiller Truck</Link>
                                    </h4>
                                    <p className="pb-24">
                                        Chiller Trucks are built for transporting larger shipments of
                                        temperature-sensitive items. With advanced refrigeration technology, they
                                        maintain a consistent cold environment, making them ideal for food distribution
                                        and pharmaceuticals.
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* single service box */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div
                                className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                <div className="ca-about-icon">
                                    <div className="ca-about-ic ca-ser-ic">
                                        <img src="assets/img/icon/ca-iner-ser1.4.svg" alt=""/>
                                    </div>
                                    <div className="ca-num">
                                        <h4 className="overly-num overly-num2">04</h4>
                                    </div>
                                </div>
                                <div className="ca-service-content ca-service-content-iner">
                                    <h4 className="ca-title fnw-700 pb-16 pt-32">
                                        <Link to="service-single.html">Freezer Truck</Link>
                                    </h4>
                                    <p className="pb-24">
                                        A Freezer Truck is designed for bulk transportation of frozen items, ensuring
                                        that products remain at optimal freezing temperatures. It’s essential for
                                        businesses needing reliable transport for large quantities of frozen foods.
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* single service box */}
                        <div className="col-xl-4 col-md-6 mb-30">
                            <div
                                className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                <div className="ca-about-icon">
                                    <div className="ca-about-ic ca-ser-ic">
                                        <img src="assets/img/icon/ca-iner-ser1.5.svg" alt=""/>
                                    </div>
                                    <div className="ca-num">
                                        <h4 className="overly-num overly-num2">05</h4>
                                    </div>
                                </div>
                                <div className="ca-service-content ca-service-content-iner">
                                    <h4 className="ca-title fnw-700 pb-16 pt-32">
                                        <Link to="service-single.html">Cold Transport</Link>
                                    </h4>
                                    <p className="pb-24">
                                        Cold Transport refers to the specialized logistics of moving refrigerated items
                                        to ensure their safety and quality. This service is crucial for perishable goods
                                        like food, flowers, and pharmaceuticals, maintaining the cold chain throughout
                                        the journey.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
