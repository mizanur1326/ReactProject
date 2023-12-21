function About(){
    return (
        <>
            {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">About</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- About Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="about-img">
                            <div className="rotate-left bg-dark"></div>
                            <div className="rotate-right bg-dark"></div>
                            <img src="assets/img/about-img.jpg" className="img-fluid h-100" alt="img" />
                            <div className="bg-white experiences">
                                <h1 className="display-3">20</h1>
                                <h6 className="fw-bold">Years Of Experiences</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
                        <div className="about-item overflow-hidden">
                            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About PestKit</h5>
                            <h1 className="display-5 mb-2">World Best Pest Control Services Since 2008</h1>
                            <p className="fs-5" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div className="row">
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-city fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Building</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-school fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Education</h5>
                                            <h5>center</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifycontent: "center"}}>
                                            <i className="fas fa-warehouse fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Warehouse</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifycontent: "center"}}>
                                            <i className="fas fa-hospital fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Hospital</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Find Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Call To Action Start --> */}
        <div className="container-fluid py-5 call-to-action wow fadeInUp" data-wow-delay=".3s" style={{margin: "6rem 0"}}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <img src="assets/img/action.jpg" className="img-fluid w-100 rounded-circle p-5" alt=""/>
                    </div>
                    <div className="col-lg-6 my-auto">
                        <div className="text-start mt-4">
                            <h1 className="pb-4 text-white">Sign Up To Our Newsletter To Get The Latest Offers</h1>
                        </div>
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <div className="d-flex call-btn">
                                    <input type="search" className="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill" name="search-input" value="" placeholder="Enter Your Email Address" required="Please enter a valid email"/>
                                    <button type="email" value="Search Now!" className="btn btn-primary border-0 rounded-pill rounded rounded-start px-5">Subscribe</button>
                                </div>
                            </div>
                        </form>  
                    </div>
                </div> 
            </div>
        </div>
        {/* <!-- Call To Action End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Team</h5>
                    <h1 className="display-5 w-50 mx-auto">Our Team Members</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="rounded team-item">
                            <img src="assets/img/team-1..jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="rounded team-item">
                            <img src="assets/img/team-2.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="rounded team-item">
                            <img src="assets/img/team-3.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="rounded team-item">
                            <img src="assets/img/team-4.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
        </>
    )
}
export default About;