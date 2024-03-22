import { useState, useEffect } from 'react';
import axios from 'axios';

import './DashboardRecipes.css';

function DashboardRecipes() {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        setUserData(storedUserData.user);
        setToken(storedUserData.token);

        // console.log(storedUserData);
        console.log(storedUserData.user);
        console.log(storedUserData.token);

    }, []);

    const generateRecipes = async () => {
        try {
            await axios.post('http://localhost:5000/api/diet-plan/create', userData, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            alert("Las recetas se generaron")
        } catch (error) {
            console.log(error)
            alert('Error al generar las recetas. Por favor, inténtelo de nuevo.', error);
        }
    };

    const showRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/diet-plan/get', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response.data[0]);

            setRecipes(response.data);
        } catch (error) {
            console.log(error)
            alert('Error al mostrar las recetas. Por favor, inténtelo de nuevo.', error);
        }
    }

    return (
        <div className="recipes">
            <button className="recipesGenerateButton" onClick={generateRecipes}>Generar Recetas</button>
            <button className="recipesGenerateButton" onClick={showRecipes}>Mostrar Recetas</button>
            <div className="recipesContainer">
                {recipes && recipes.map((recipePlan, index) => (
                    <div className="recipesContainer_recipe" key={index}>
                        <p className="recipesContainer_recipeTitle">{recipePlan.name}</p>
                        <p className="recipesContainer_recipeDesc">{recipePlan.description}</p>
                        {recipePlan.recipes.map((recipe, i) => (
                            <div className="recipesContainer_recipeContainer" key={i}>
                                <p className="recipesContainer_recipeSubtitle">{recipe.recipeName}</p>
                                <p className="recipesContainer_recipeSubsubtitle">Valores nutricionales totales:</p>
                                <div className="recipesContainer_recipeContentContainer">
                                    <p className="recipesContainer_recipeContent">Calorías: {recipe.totalNutritionalValues.calories}</p>
                                    <p className="recipesContainer_recipeContent">Proteínas: {recipe.totalNutritionalValues.proteins}</p>
                                    <p className="recipesContainer_recipeContent">Grasas: {recipe.totalNutritionalValues.fats}</p>
                                    <p className="recipesContainer_recipeContent">Carbohidratos: {recipe.totalNutritionalValues.carbs}</p>
                                </div>
                                <p className="recipesContainer_recipeIngredientsContainerTitle">Valores nutricionales específicos:</p>
                                <div className="recipesContainer_recipeIngredientsContainer">
                                    {recipe.ingredients.map((ingredient, j) => (
                                        <div className="recipesContainer_recipeIngredient" key={j}>
                                            <p className="recipesContainer_recipeIngredient_title">{ingredient.ingredientName}:</p>
                                            <p className="recipesContainer_recipeIngredient_content">Calorías: {ingredient.calories}</p>
                                            <p className="recipesContainer_recipeIngredient_content">Proteínas: {ingredient.proteins}</p>
                                            <p className="recipesContainer_recipeIngredient_content">Grasas: {ingredient.fats}</p>
                                            <p className="recipesContainer_recipeIngredient_content">Carbohidratos: {ingredient.carbs}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardRecipes;