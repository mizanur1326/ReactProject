import axios from "axios";
import { useEffect, useState } from "react";


function Service(){

    const[product, setProduct] = useState([]);

    useEffect(
        ()=>{
            getProduct();
        },[]
    )
    console.log(product);

    const getProduct = () => {
        axios.get("http://localhost:8080/productsAll").then(
            (res)=> setProduct(res.data)
        )
    }

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
                    <h1 className="display-5">Pest Control Services We Provide</h1>
                </div>
                <div className="row g-5">
                    {product.map((item)=>(                        
                    
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4>{item.product}</h4>
                            <h3 className="fs-5">Price: {item.price}</h3>
                            <p className="fs-5">Category: {item.category}</p>
                            <p className="fs-5">Model: {item.model}</p>
                            {/* <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p> */}
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    ))}
                    {/* <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
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
                    </div> */}
                </div>
                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button>
            </div>
        </div>
        {/* <!-- Services End --> */}


        </>
    )
}
export default Service;