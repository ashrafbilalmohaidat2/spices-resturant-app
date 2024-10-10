import React from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
const Catigories = ({cat}) => {

    return(
            <>
            <Col xs={6} sm={6} md={4} lg={3} className="my-1">
            <Link to={`/category/${cat.strCategory}`} className="text-decoration-none">
            <div className="card" >
                    <LazyLoadImage src= {cat.strCategoryThumb} 
                    className="card__image" 
                    effect="blur"
                    alt="hu"/>
                    <div className="CardCategor">
                        <div className="w-100 p-2">
                            <p className="CategoryName">{cat.strCategory}</p>
                        </div>
                    </div>
            </div>
            </Link>
            </Col>
            </> 
    )
}
export default Catigories;