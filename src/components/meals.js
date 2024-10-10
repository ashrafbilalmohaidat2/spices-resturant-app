import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
const Meals =() =>{

  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

    // Function to fetch meals by category
    const fetchMeals = async () => {
      try {
        //setLoading(true); // Start loading
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        setMeals(response.data.meals); // Store the meals in state
        console.log(response.data.meals);
      } catch (err) {
        setError('Error fetching meals'); // Set error if request fails
      } 
    };
  
  useEffect(() => {
    fetchMeals();
  }, []);

    return(
        
        <Container>
          <Row className="my-5">
            <h1 className="CategoriesTitle text-center my-5 mb-3" >Meals for {categoryName}</h1>
                {
                  meals.map((meal) => {
                        return (
                            <Col key={meal.idMeal} xs={6} sm={6} md={4} lg={3} className="my-1">
                                    <Link to={`/category/meal/${meal.idMeal}`} className="text-decoration-none">
                                    <div className="card">
                                        <LazyLoadImage src={meal.strMealThumb}
                                         className="card__image"
                                         effect="blur"
                                          alt="meal"/>
                                        <div className="CardCategor">
                                            <div className="w-100 p-2">
                                                <p className="CategoryName">{meal.strMeal}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                            </Col>
                        )
                    })
                }
        </Row>
        </Container>
    )
}

export default Meals;