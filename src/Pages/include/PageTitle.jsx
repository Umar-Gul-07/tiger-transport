import React from 'react'

const PageTitle = ({title}) => {
    return (
        <>
            <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                    <img src="assets/img/shape/breadcrumn-shape.png" alt=""/>
                </div>
                <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                    <img src="assets/img/shape/ca-line-shape.png" alt=""/>
                </div>
                <div className="container">
                    <div className="ca-breadcrumb-content text-center">
                        <h2 className="ca-breadcrumb-title fnw-600">{title} </h2>
                        <div className="it-breadcum-link">
                            <a href="/">Home</a>
                            <span>
          <i className="fa-solid fa-angle-right"/>
        </span>
                            {title}{" "}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PageTitle
