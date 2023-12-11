import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Products</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header"> Products :</h6>
                        <Link className="collapse-item" to="/products">All Products</Link>
                        <Link className="collapse-item" to="/add-product">Add Product</Link>
                    </div>
                </div>
            </li>
        </div>
    )
}
