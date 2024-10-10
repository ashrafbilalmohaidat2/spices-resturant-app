import React, { lazy, Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import LoderPageApp from './components/loaderTwo/LodaerPageApp';

const HeaderPage = lazy(() =>(import('./components/Header')));
const HomePage = lazy(() =>(import('./components/Home')));
const CatigoriesListPage = lazy(() =>(import('./components/CatigoriesList')));
const MealsCat = lazy(() =>(import('./components/meals')));
const SingleMealDetailes = lazy(() =>(import('./components/MealDetailes')));
const ContactPage = lazy(() =>(import('./components/Contact')));
const Footer = lazy(() =>(import('./components/FooterII')));
const MealSearch = lazy(() =>(import('./components/MealSearch')));
function App() {
  const [category, setCategory] = useState([]);
  const [meals, setMeals] = useState([]);
 //Get All Gategories
  const getCategory = async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setCategory(data.data.categories)
  }
  useEffect(() => {
    getCategory();
    setMeals();
    },[])
    const search = async (word) =>{
      if(word === ""){
        setMeals([])
      }else{
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
      setMeals(data.data.meals)
      }
    }

  return (
        <Suspense fallback={<LoderPageApp/>}>
              <HeaderPage />
                      <Routes>
                <Route path='/' element={
                  <>
                    <HomePage search={search}/>
                    <MealSearch meals={meals}/>
                    <CatigoriesListPage category={category} />
                  </>
                } />

                <Route path='/category/:categoryName' element={
                  <>
                    <MealsCat/>
                  </>
                } />

                <Route path='/category/meal/:mealId' element={
                  <>
                    <SingleMealDetailes />
                  </>
                } />

                <Route path='/contact' element={
                  <>
                    <ContactPage />
                  </>
                } />
              </Routes>
              <Footer />
        </Suspense>
  );
}
export default App;
