import React from 'react'

export default function Contact() {
  return (
    <div>
                {/* <!-- Contact Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Get In Touch</h5>
                    <h1 className="display-5 w-50 mx-auto">Contact for any query</h1>
                </div>
                <div className="row g-5 mb-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="h-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001583.639214438!2d-78.4099249913019!3d42.71993723844549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1687175686342!5m2!1sen!2sbd" className="border-0 rounded w-100 h-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
						<p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <div className="rounded contact-form">
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" placeholder="Your Name"/>
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control p-3" placeholder="Your Email"/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" placeholder="Subject"/>
                            </div>
                            <div className="mb-4">
                                <textarea className="w-100 form-control p-3" rows="6" cols="10" placeholder="Message"></textarea>
                            </div>
                            <button className="btn btn-primary border-0 py-3 px-4 rounded-pill" type="button">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-share text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">fallow Us</h4>
                                <div className="d-flex justify-content-center">
                                    <a className="pe-2" href="#"><i className="fab fa-facebook-f text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-twitter text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-instagram text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-linkedin-in text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-youtube text-dark"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fas fa-map-marker-alt text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Address</h4>
                                <a href="#">
                                    <h5 className="text-dark d-inline fs-6">123 Street, CA, USA</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-phone text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Call Us</h4>
                                <a className="h5 text-dark fs-6" href="tel:+0123456789">+012 3456 7890</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-envelope text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Email Us</h4>
                                <a className="h5 text-dark fs-6" href="#">info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
    </div>
  )
}
