import React,{lazy, Suspense} from "react";
import {Container, Row} from "react-bootstrap";
import LoaderCategories from "./loader/LoaderCategories.js";
const CatigoriesItem = lazy(() =>(import('./Catigories.js')));
const CatigoriesList = ({category}) => {

    return(
        <>
        <Container>
        <Row className="my-3">
            <h1 className="CategoriesTitle text-center">categories</h1>
            {
                <Suspense fallback={<LoaderCategories/>}>
                    {
                      (category && category.length >=1) ? (category.map((cat)=>{
                        return(
                                <CatigoriesItem cat={cat} key={cat.idCategory}/>
                        )
                
                        })) : <h1>No Meals Found</h1>
                        
                    }

                </Suspense>
            }
        </Row>
        </Container>
        </>
    )
}
export default CatigoriesList;

