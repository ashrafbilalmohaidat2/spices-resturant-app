import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Row, Col,Container } from "react-bootstrap";
import {LazyLoadImage} from 'react-lazy-load-image-component';
const MealDetailes = () => {
    const { mealId } = useParams();  // Extract mealId from the URL
    const [details, setdetails] = useState([]);  // State for storing meal details
  
    const getMealDetails = async () => {
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      console.log('API Response:', data.data);

      if (data.data.meals && data.data.meals.length > 0) {
        setdetails(data.data.meals[0]);
      }else{
        console.log('No meal found with ID:', mealId);
      }
    }
    useEffect(() => {
      getMealDetails();
    }, []);

    const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = details[`strIngredient${i}`];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }

      const measures = [];
        for (let i = 1; i <= 20; i++) {
          const measure = details[`strMeasure${i}`];
          if (measure && measure.trim() !== '') {
            measures.push(measure);
          }
        }

        let instructions = details?.strInstructions?.split('\r\n');
        instructions = instructions?.filter(instruction => instruction.length > 1);
  
    return (
      <Container>
      <Row className="my-5">
      <h1 className="CategoriesTitle text-center my-5 mb-3" >{details.strMeal}</h1>
                        <Col xs={12} sm={6} md={6} lg={4} className="my-1">
                                <div className="card_meal">
                                    <LazyLoadImage src={details.strMealThumb}
                                     className="card__image_meal"
                                      effect="blur"
                                      alt="meal"/>
                                <div className="my-1">
                                    {
                                      details.strTags ? details.strTags.split(',').map((tag, index) => (
                                      <span key={index} className="item-tag mx-1">{tag}</span>
                                      )) : <></>
                                    }
                                </div>
                                </div>
                                <hr/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={8} className="my-1">
                        <h3 className="ingredients-title text-center">Ingredients</h3>
                            <div className="Ingredients d-flex justify-content-between">
                                <div>
                                  {
                                    ingredients.length > 0 ? ingredients.map((ingredient, index) => (
                                      <ul>
                                      <li key={index}>{ingredient}</li>
                                      </ul>
                                    )) : 'No ingredients'
                                  }
                                </div>
                                <div>
                                    {
                                      measures.length > 0 ? measures.map((measure, index) => (
                                        <ul>
                                        <li key={index}>&#x1F944;{measure}</li>
                                        </ul>
                                      )) : 'No measures available'
                                    }
                                </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="strInstructions w-100 p-2">
                            <h3 className="ingredients-title">Instructions</h3>
                            <p>
                               {
                                instructions?.map((instruction, idx) => (
                                <li key = {idx} className='strInstructions'>{instruction}</li>
                                ))
                               }
                            </p>
                          </div>
                          <div className="mx-2">
                              <a className="btn btn-secondary mx-2" href={details.strSource} target="_blank" rel="noopener noreferrer">Meal Source</a>
                              <a className="btn btn-secondary mx-2" href={details.strYoutube} target="_blank" rel="noopener noreferrer">Youtube Video</a>
                          </div>
                        </Col>
    </Row>
    </Container>
    );
}
export default MealDetailes;