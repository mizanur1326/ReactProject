import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Blog() {

    const[blog, setBlog] = useState([]);

    useEffect(
        ()=>{
            getBlog();
        },[]
    )
    console.log(blog);

    const getBlog = () => {
        axios.get("http://localhost:8080/allBlog").then(
            (res)=> setBlog(res.data)
        )
    }

  return (
    <div>
                {/* <!-- Blog Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Blog</h5>
                    <h1 className="display-5">Latest Blog & News</h1>
                </div>

                
                {/* <OwlCarousel  className="owl-theme blog-carousel wow fadeInUp" loop margin={10} data-wow-delay=".5s"> */}
                <div>
                    {blog.map((item)=>( 

                        <div className="blog-item m-1">
                            <img src="assets/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <div className="rounded-bottom bg-light">
                                {/* <div className="d-flex justify-content-between p-4 pb-2">
                                    <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By Admin</span>
                                    <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                </div> */}
                                <div className="px-4 pb-0">
                                    <h4>Title : {item.title}</h4>

                                    <h4>Description :{item.description}</h4>
                                    
                                </div>
                                <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                    <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
                                    
                                </div>
                            </div>
                        </div>

                        ))} 

                </div>
                    
                {/* </OwlCarousel>  */}
            </div>
        </div>

        {/* <!-- Blog End --> */}
    </div>
  )
}
