import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

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
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.1.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">01</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Express Delivery Services</a>
                  </h4>
                  <p className="pb-24">
                    We provide a comprehensive suite logistics services designed
                    to streamline your supply <br /> chain &amp; meet your
                    unique business needs.
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.2.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">02</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Supply Chain Management</a>
                  </h4>
                  <p className="pb-24">
                    We offer state-of-the-art warehousing <br />
                    solutions, ensuring your inventory is
                    <br /> managed with precision and care.
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.3.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">03</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Project Cargo Handling</a>
                  </h4>
                  <p className="pb-24">
                    Our freight forwarding services ensure
                    <br /> smooth and efficient transportation of
                    <br /> goods across borders, while our customs
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.4.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">04</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Warehousing Solutions</a>
                  </h4>
                  <p className="pb-24">
                    Our domestic transport services guarantee <br />
                    timely reliable deliveries within the country, <br />
                    while our international shipping solutions
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.5.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">05</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">International Shipping</a>
                  </h4>
                  <p className="pb-24">
                    Additionally, our supply chain management services optimize
                    every step your logistics process, and our e-commerce
                    fulfillment
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.6.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">06</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Cold Chain Logistics</a>
                  </h4>
                  <p className="pb-24">
                    Whether it's handling project cargo with specialized
                    requirements or maintaining <br />
                    the integrity of temperature-sensitive
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.7.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">07</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Inventory Management</a>
                  </h4>
                  <p className="pb-24">
                    Finally, our Reliable Last-Mile Delivery and Freight
                    Consolidation Services ensure your
                    <br /> goods reach their final destination{" "}
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.8.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">08</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Cold Chain Logistics</a>
                  </h4>
                  <p className="pb-24">
                    Trust our Professional Logistics Consulting <br />
                    to enhance your logistics strategy, &amp; rely on <br />
                    our Efficient Reverse Logistics for seamless{" "}
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single service box */}
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                <div className="ca-about-icon">
                  <div className="ca-about-ic ca-ser-ic">
                    <img src="assets/img/icon/ca-iner-ser1.9.svg" alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num overly-num2">09</h4>
                  </div>
                </div>
                <div className="ca-service-content ca-service-content-iner">
                  <h4 className="ca-title fnw-700 pb-16 pt-32">
                    <a href="service-single.html">Domestic Transport</a>
                  </h4>
                  <p className="pb-24">
                    With Specialized Project Cargo Handling &amp;
                    <br /> Cold Chain Logistics Services, we cater to
                    <br /> specialized and temperature-sensitive
                  </p>
                  <a href="service-single.html" className="read-more">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* pagination */}
          <div className="row">
            <div className="col-12 m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#">12</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
