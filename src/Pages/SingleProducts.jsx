import React from "react";
import { useNavigate, Link, useParams} from "react-router-dom";
import Product from "../data";



const SingleProducts=()=>{
    const navigate = useNavigate()
    const {productid} =useParams()
    const singleProduct= Product.find((product)=>product.id === parseInt(productid)) 
    const {id,name,price,image,details} = singleProduct
    
    
    
    
    return(
        <main>
            <div className="pg-header">
           <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h1>{name}</h1>
                </div>
                <div className="col-lg-5">
                    <nav>
                        <ol className="breadcrumb justify-content-end">
                            <li className="breadcrumb-item active">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={"/"}>Products</Link>
                            </li>
                            <li className="breadcrumb-item">
                                Page Title
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>

           </div>
           <div className="container content">
            <div className="row">
                <div className="col-lg-7">
                    <img src={image} alt="" />
                </div>
                <div className="col-lg-5">
                    <h2>{name}</h2>
                    <p className="price">
                        <strong>price</strong>
                    </p>
                    <p>{details}</p>
                    <br />
                    <button className="btn btn-primary btn-sm rounded-0" onClick={()=>navigate(-1)}>Back</button>
                    &nbsp;
                    <button className="btn btn-danger btn-sm rounded-0" onClick={()=>navigate(-1)}>Navigate To Product</button>
                    &nbsp;
                    <Link to={"/Products"} className="btn btn-primary btn-sm rounded-0">Product</Link>
                </div>
            </div>
           </div>
        </div>
        </main>
    )
}
export default SingleProducts;