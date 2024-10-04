import {Helmet} from "react-helmet";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024}, items: 3, slidesToSlide: 3 // optional, default to 1.
    }, tablet: {
        breakpoint: {max: 1024, min: 464}, items: 2, slidesToSlide: 2 // optional, default to 1.
    }, mobile: {
        breakpoint: {max: 464, min: 0}, items: 1, slidesToSlide: 1 // optional, default to 1.
    }
};

function Home() {
    return (<>
        <Helmet>
            <title>Home</title>
        </Helmet>


        <div className="ca-hero-4 p-relative z-index-1 fix">
            <div className="ca-hero-4-shape p-absolute">
                <img src="assets/img/shape/ca-dot-shape4.1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="ca-hero-4-content wow tpFadeInUp"
                            data-wow-duration="1.5s"
                            data-wow-delay=".1s"
                        >
                            <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
                                What We Do
                            </h5>
                            <h3 className="ca-slider-heading text-white pt-20 pb-20 ca-text-cap">
                                Tiger Refrigerated Transport: A Leading Company in Abu Dhabi, UAE
                            </h3>
                            <p className="pb-32">
                                Tiger Refrigerated Transport uses cutting-edge technology to streamline your supply
                                chain, optimize routes, and provide real-time tracking, ensuring efficient and
                                timely deliveries.
                            </p>

                            {/* btn */}
                            <div className="ca-hero-4-btn">
                                <Link
                                    to="/services"
                                    className="ca-btn-primary ca-btn-primary-4 theme-bg-4 text-white br-50"
                                >
                                    Our Service
                                    <span>
                <i className="fa-solid fa-arrow-right"/>
              </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
            <div className="ca-hero-4-img">
                <img className="w-100" src="assets/img/slider/ca-hero-4.png" alt=""/>
            </div>
        </div>

        <div className="ca-circle-text text-center">
            <img
                className="circle-text-animation"
                src="assets/img/slider/circle-text.png"
                alt=""
            />
            <div className="circle-ic-4">
                <img src="assets/img/icon/circle-ic.svg" alt=""/>
            </div>
        </div>

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
                                    With years of experience in refrigerated logistics, we lead the industry by offering
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
                                    Partner with us to experience seamless refrigerated logistics solutions tailored to
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

        <section className="ca-service-4 cream-bg-3 pt-100 pb-70 p-relative z-index-1">
            <div className="ca-servic-4-shape p-absolute">
                <img src="assets/img/shape/ca-plane-1.1.png" alt=""/>
            </div>
            <div className="ca-servic-4-shape-2 p-absolute">
                <img src="assets/img/shape/ca-ft-shape4.1.png" alt=""/>
            </div>
            <div className="container">
                <div className="ca-service-content-4 text-center mb-60 aos-init aos-animate">
                    <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
                        Our Service
                    </h5>
                    <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
                        Refrigerated Logistics Services
                    </h2>
                    <p className="pt-16">
                        We specialize in transporting temperature-sensitive goods, ensuring your refrigerated items
                        remain fresh and safe
                        <br/> throughout the entire logistics journey.
                    </p>
                </div>
                <div className="row">
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={300}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={["desktop", "tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                    >
                        <div className="ca-service-4-item br-7 fix p-relative z-index-1 mb-30">
                            <img
                                className="w-100"
                                src="assets/img/service/ca-expand-gallery3.3.png"
                                alt=""
                            />
                            <div className="ca-servic-4-ic-box p-absolute">
                                <div className="ca-service-4-icon">
                  <span>
                    <img src="assets/img/icon/ca-service-ic-4.1.svg" alt=""/>
                  </span>
                                </div>
                                <div className="ca-service-4-content">
                                    <h3 className="ca-ser-4-title">
                                        <a href="#" tabIndex={0}>
                                            Express Delivery Services
                                        </a>
                                    </h3>
                                    <p>
                                        We offer state-of-the-art warehousing solutions, ensuring your
                                        inventory is managed with precision and care.
                                    </p>
                                    <a href="#" className="read-mor4" tabIndex={0}>
                                        Read More{" "}
                                        <span>
                      <i className="fa-solid fa-angle-right"/>
                    </span>
                                    </a>
                                </div>
                            </div>
                            <div className="ca-ser-overlay p-absolute">
                                <img
                                    className="w-100"
                                    src="assets/img/service/ca-overlay-servic-4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="ca-service-4-item br-7 fix p-relative z-index-1 mb-30">
                            <img
                                className="w-100"
                                src="assets/img/service/ca-service-4.3.png"
                                alt=""
                            />
                            <div className="ca-servic-4-ic-box p-absolute">
                                <div className="ca-service-4-icon">
                  <span>
                    <img src="assets/img/icon/ca-service-ic-4.3.svg" alt=""/>
                  </span>
                                </div>
                                <div className="ca-service-4-content">
                                    <h3 className="ca-ser-4-title">
                                        <a href="#" tabIndex={0}>
                                            Supply Chain Management
                                        </a>
                                    </h3>
                                    <p>
                                        We offer state-of-the-art warehousing solutions, ensuring your
                                        inventory is managed with precision and care.
                                    </p>
                                    <a href="#" className="read-mor4" tabIndex={0}>
                                        Read More{" "}
                                        <span>
                      <i className="fa-solid fa-angle-right"/>
                    </span>
                                    </a>
                                </div>
                            </div>
                            <div className="ca-ser-overlay p-absolute">
                                <img
                                    className="w-100"
                                    src="assets/img/service/ca-overlay-servic-4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="ca-service-4-item br-7 fix p-relative z-index-1 mb-30">
                            <img
                                className="w-100"
                                src="assets/img/service/ca-service-4.1.png"
                                alt=""
                            />
                            <div className="ca-servic-4-ic-box p-absolute">
                                <div className="ca-service-4-icon">
                  <span>
                    <img src="assets/img/icon/ca-service-ic-4.1.svg" alt=""/>
                  </span>
                                </div>
                                <div className="ca-service-4-content">
                                    <h3 className="ca-ser-4-title">
                                        <a href="#" tabIndex={0}>
                                            Express Delivery Services
                                        </a>
                                    </h3>
                                    <p>
                                        We offer state-of-the-art warehousing solutions, ensuring your
                                        inventory is managed with precision and care.
                                    </p>
                                    <a href="#" className="read-mor4" tabIndex={0}>
                                        Read More{" "}
                                        <span>
                      <i className="fa-solid fa-angle-right"/>
                    </span>
                                    </a>
                                </div>
                            </div>
                            <div className="ca-ser-overlay p-absolute">
                                <img
                                    className="w-100"
                                    src="assets/img/service/ca-overlay-servic-4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="ca-service-4-item br-7 fix p-relative z-index-1 mb-30">
                            <img
                                className="w-100"
                                src="assets/img/service/ca-service-4.1.png"
                                alt=""
                            />
                            <div className="ca-servic-4-ic-box p-absolute">
                                <div className="ca-service-4-icon">
                  <span>
                    <img src="assets/img/icon/ca-service-ic-4.2.svg" alt=""/>
                  </span>
                                </div>
                                <div className="ca-service-4-content">
                                    <h3 className="ca-ser-4-title">
                                        <a href="#" tabIndex={0}>
                                            Freight Consolidation
                                        </a>
                                    </h3>
                                    <p>
                                        We offer state-of-the-art warehousing solutions, ensuring your
                                        inventory is managed with precision and care.
                                    </p>
                                    <a href="#" className="read-mor4" tabIndex={0}>
                                        Read More{" "}
                                        <span>
                      <i className="fa-solid fa-angle-right"/>
                    </span>
                                    </a>
                                </div>
                            </div>
                            <div className="ca-ser-overlay p-absolute">
                                <img
                                    className="w-100"
                                    src="assets/img/service/ca-overlay-servic-4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>

        <section className="video-play-section">
            <div className="container">
                <div className="ca-video-img br-7 p-relative z-index-1">
                    <img
                        className="w-100"
                        src="/assets/img/service/v-play.png"
                        alt=""
                    />
                    <a
                        href="https://www.youtube.com/watch?v=HkYGxh1XUGQ"
                        className="video-play-button popup-video"
                    >
                <span>
                  <i className="fa-solid fa-play"/>
                </span>
                    </a>

                </div>
            </div>
        </section>

        <div className="ca-working-section theme-black-bg-3 pt-390 pb-70">
            <div className="container">
                <div
                    className="ca-working-section-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={800}
                >
                    <h5 className="ca-section-subtitle subtitle-bg-7 p-relative text-white br-50">
                        Working Process
                    </h5>
                    <h2 className="ca-section-title theme-black-3 fnw-600 text-white pt-16">
                        Efficient Cold Chain Process
                    </h2>
                    <p className="pt-16">
                        Our refrigerated logistics process is designed to maintain temperature-sensitive goods, ensuring
                        reliable delivery from the start to the final destination.
                    </p>
                </div>
                <div className="row">
                    {/* working icon box */}
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div
                            className="ca-work-ic-box br-7 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <div className="ca-work-ic-box-img">
                        <span>
                            <img src="/assets/img/icon/ca-work-1.1.svg" alt="Coordination & Execution"/>
                        </span>
                            </div>
                            <div className="ca-work-ic-box-content">
                                <h4 className="ca-title fnw-600 text-white pt-24 pb-16">
                                    <a href="service-single.html">Coordination & Execution</a>
                                </h4>
                                <p>
                                    We coordinate the entire cold chain process, leveraging our logistics expertise to
                                    ensure your refrigerated goods are handled with care.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* working icon box */}
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div
                            className="ca-work-ic-box br-7 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <div className="ca-work-ic-box-img">
                        <span>
                            <img src="/assets/img/icon/ca-work-1.2.svg" alt="Planning and Strategy"/>
                        </span>
                            </div>
                            <div className="ca-work-ic-box-content">
                                <h4 className="ca-title fnw-600 text-white pt-24 pb-16">
                                    <a href="service-single.html">Planning & Strategy</a>
                                </h4>
                                <p>
                                    Our team develops a tailored strategy for each shipment, ensuring that your
                                    refrigerated goods are stored and transported under optimal conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* working icon box */}
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div
                            className="ca-work-ic-box br-7 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration={1200}
                        >
                            <div className="ca-work-ic-box-img">
                        <span>
                            <img src="/assets/img/icon/ca-work1.3.svg" alt="Real-Time Monitoring"/>
                        </span>
                            </div>
                            <div className="ca-work-ic-box-content">
                                <h4 className="ca-title fnw-600 text-white pt-24 pb-16">
                                    <a href="service-single.html">Real-Time Monitoring</a>
                                </h4>
                                <p>
                                    We track your refrigerated goods in real-time, providing updates to ensure
                                    transparency throughout the journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* working icon box */}
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div
                            className="ca-work-ic-box br-7 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration={1400}
                        >
                            <div className="ca-work-ic-box-img">
                        <span>
                            <img src="/assets/img/icon/ca-work1.4.svg" alt="Secure Transportation"/>
                        </span>
                            </div>
                            <div className="ca-work-ic-box-content">
                                <h4 className="ca-title fnw-600 text-white pt-24 pb-16">
                                    <a href="service-single.html">Secure Transportation</a>
                                </h4>
                                <p>
                                    We ensure safe and timely delivery of your temperature-sensitive goods, giving you
                                    peace of mind and maintaining product integrity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="ca-portfilo-2 pt-100 pb-70">
            <div className="container">
                <div
                    className="ca-portfolio-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={800}
                >
                    <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                        Our Services
                    </h5>
                    <h2 className="ca-section-title theme-black-3 fnw-600 pt-16">
                        Shifting Refrigeration Items with Care
                    </h2>
                    <p className="pt-16">
                        Our expertise lies in shifting all types of refrigerator items with
                        precision and care. Whether it’s a small fridge or large commercial units,
                        <br/> we ensure that your items are transported safely and efficiently.
                    </p>
                </div>
                <div className="row">
                    {/* single project item */}
                    <div className="col-lg-3 col-md-6">
                        <div className="ca-single-pro-img-3 mb-30">
                            <img
                                className="w-100"
                                src="/assets/img/portfolio/ca-portfoli3.3.png"
                                alt="Fridge Transport"
                            />
                            <div className="ca-project-hover-item1">
                                <a
                                    href="project-single.html"
                                    className="ca-project-hover-item1-icon"
                                >
                            <span>
                                <img src="/assets/img/icon/ca-arow-3.1.svg" alt=""/>
                            </span>
                                </a>
                                <div className="ca-project-hover-item-content">
                                    <h4 className="ca-project-hov-sub-title">Refrigerator Transport</h4>
                                    <h3 className="ca-project-hov-title">
                                        <a href="project-single.html">
                                            Safe Loading and Unloading
                                        </a>
                                    </h3>
                                    <p>
                                        We handle each refrigerator item with care, ensuring safe loading and unloading
                                        at every step.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single project item */}
                    <div className="col-lg-4 col-md-6">
                        <div className="ca-single-pro-img-3 mb-30">
                            <img
                                className="w-100"
                                src="/assets/img/portfolio/ca-portfolio-3.5.png"
                                alt="Fridge Transport"
                            />
                            <div className="ca-project-hover-item1">
                                <a
                                    href="project-single.html"
                                    className="ca-project-hover-item1-icon"
                                >
                            <span>
                                <img src="/assets/img/icon/ca-arow-3.1.svg" alt=""/>
                            </span>
                                </a>
                                <div className="ca-project-hover-item-content">
                                    <h4 className="ca-project-hov-sub-title">Temperature Control</h4>
                                    <h3 className="ca-project-hov-title">
                                        <a href="project-single.html">
                                            Maintaining Cold Chain Integrity
                                        </a>
                                    </h3>
                                    <p>
                                        Our logistics solutions ensure that refrigerator items maintain their
                                        temperature integrity throughout the journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single project item */}
                    <div className="col-lg-5 col-md-6">
                        <div className="ca-single-pro-img-3 mb-30">
                            <img
                                className="w-100"
                                src="/assets/img/portfolio/ca-port2.3.png"
                                alt="Fridge Transport"
                            />
                            <div className="ca-project-hover-item1">
                                <a
                                    href="project-single.html"
                                    className="ca-project-hover-item1-icon"
                                >
                            <span>
                                <img src="/assets/img/icon/ca-arow-3.1.svg" alt=""/>
                            </span>
                                </a>
                                <div className="ca-project-hover-item-content">
                                    <h4 className="ca-project-hov-sub-title">Timely Delivery</h4>
                                    <h3 className="ca-project-hov-title">
                                        <a href="project-single.html">
                                            Fast & Reliable Transport
                                        </a>
                                    </h3>
                                    <p>
                                        Your refrigerator items will be delivered on time, ensuring minimal disruption
                                        to your operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single project item */}
                    <div className="col-lg-6 col-md-6">
                        <div className="ca-single-pro-img-3 mb-30">
                            <img
                                className="w-100 pro-lar-img-1"
                                src="/assets/img/portfolio/ca-project3.4.png"
                                alt="Fridge Transport"
                            />
                            <div className="ca-project-hover-item1">
                                <a
                                    href="project-single.html"
                                    className="ca-project-hover-item1-icon"
                                >
                            <span>
                                <img src="/assets/img/icon/ca-arow-3.1.svg" alt=""/>
                            </span>
                                </a>
                                <div className="ca-project-hover-item-content">
                                    <h4 className="ca-project-hov-sub-title">Custom Packaging</h4>
                                    <h3 className="ca-project-hov-title">
                                        <a href="project-single.html">
                                            Tailored Solutions for Safe Transport
                                        </a>
                                    </h3>
                                    <p>
                                        We offer custom packaging solutions for refrigerator items, ensuring they remain
                                        secure throughout the transportation process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single project item */}
                    <div className="col-lg-6 col-md-6">
                        <div className="ca-single-pro-img-3 mb-30">
                            <img
                                className="w-100 pro-lar-img-1"
                                src="/assets/img/portfolio/ca-port2.3.png"
                                alt="Fridge Transport"
                            />
                            <div className="ca-project-hover-item1">
                                <a
                                    href="project-single.html"
                                    className="ca-project-hover-item1-icon"
                                >
                            <span>
                                <img src="/assets/img/icon/ca-arow-3.1.svg" alt=""/>
                            </span>
                                </a>
                                <div className="ca-project-hover-item-content">
                                    <h4 className="ca-project-hov-sub-title">Expert Handling</h4>
                                    <h3 className="ca-project-hov-title">
                                        <a href="project-single.html">
                                            Professional Team You Can Trust
                                        </a>
                                    </h3>
                                    <p>
                                        Our team of experts will handle your refrigerator items with utmost care and
                                        professionalism.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>)
        ;
}

export default Home;
