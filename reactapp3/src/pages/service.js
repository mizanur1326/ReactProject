function Service(){
    return(
        <>
                    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid services py-5">
            <div className="container text-center py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Services</h5>
                    <h1 className="display-5">Common Pest Control Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4>Spiders</h4>
                            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Mosquitos</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Rodents</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Termites</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button>
            </div>
        </div>
        {/* <!-- Services End --> */}


        {/* <!-- Testiminial Start --> */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Testimonial</h5>
                    <h1 className="display-5 w-50 mx-auto">What Clients Say About Our Services</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testiminial End --> */}
        </>
    )
}
export default Service;