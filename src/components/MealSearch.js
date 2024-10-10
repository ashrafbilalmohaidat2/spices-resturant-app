import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
const MealSearch = ({meals}) => {
    return(
        <Container>
            <Row className="my-3">
            {
                (meals && meals.length >=1) ? meals.map((cat)=>{
                    return(
                        <Col xs={6} sm={6} md={4} lg={3} className="my-1">
                            <Link to={`/category/meal/${cat.idMeal}`} className="text-decoration-none">
                            <div className="card" >
                                    <LazyLoadImage src= {cat.strMealThumb}
                                     className="card__image"
                                      effect="blur"
                                      alt="hu"/>
                                    <div className="CardCategor">
                                        <div className="w-100 p-2">
                                            <p className="CategoryName">{cat.strMeal}</p>
                                        </div>
                                    </div>
                            </div>
                            </Link>
                        </Col>
                    )
                }):<></>
            }
        
        </Row>
        </Container>
    )
}
export default MealSearch