import {Helmet} from "react-helmet";
import PageTitle from "./include/PageTitle";
import React from "react";
import {Link} from "react-router-dom";
import {data} from "../Utils/Data"

const RentVehicle = ({title}) => {
    return (
        <>
            <Helmet>
                <title>Rent Vehicle</title>
            </Helmet>

            <PageTitle title={title}/>

            <div className="ca-blog-inner pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {data.map((item) => (
                            <div className="col-xl-4 col-md-6 mb-30">
                                <div className="ca-team-box ca-blg-box-3 cream-bg-3 br-7 fix p-relative z-index-1">
                                    <div className="ca-team-img">
                                        <img
                                            height="350px"
                                            width="100%"
                                            src={`assets/img/vehicle/${item.image}.jpg`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ca-blog-date-3 ca-blg-date-3">
                                        <Link to="#" className="blg-date-3">
                                            OCT 4, 2024
                                        </Link>
                                    </div>
                                    <div className="ca-blog-box-content ca-blog-box-content-3">
                                        <div className="ca-b-meta">
                                            {/* blog meta box */}
                                            <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                                                <div className="ca-meta-icon">
                  <span>
                   <i className="fas fa-truck"></i>
                  </span>
                                                </div>
                                                <div className="mx-2 ca-meta-title">
                                                    <span>{item.category}</span>
                                                </div>
                                            </Link>
                                            {/* blog meta box */}
                                            <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                                                <div className="ca-meta-icon">
                  <span>
                                     <i className="fas fa-coins"></i>
                  </span>
                                                </div>
                                                <div className="mx-2 ca-meta-title">
                                                    <span>{item.price}</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <h4 className="ca-blog-title ca-blog-title-3 fnw-600">
                                            <Link to="#">
                                                {item.name}
                                            </Link>
                                        </h4>
                                        <p className="pt-16 pb-18">
                                            {item.desc}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* pagination */}
                    <div className="row">
                        <div className="col-12 m-auto">
                            <div className="theme-pagination text-center">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i className="fa-solid fa-angle-left"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="active" to="#">
                                            01
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">02</Link>
                                    </li>
                                    <li>...</li>
                                    <li>
                                        <Link to="#">12</Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa-solid fa-angle-right"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RentVehicle