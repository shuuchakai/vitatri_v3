import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <button onClick={generateRecipes}>Generar Recetas</button>
            <button onClick={showRecipes}>Mostrar Recetas</button>
            <div>
                {recipes && recipes.map((recipePlan, index) => (
                    <div key={index}>
                        <h1>{recipePlan.name}</h1>
                        <p>{recipePlan.description}</p>
                        {recipePlan.recipes.map((recipe, i) => (
                            <div key={i}>
                                <h1>{recipe.recipeName}</h1>
                                <p>Total Nutritional Values:</p>
                                <p>Calories: {recipe.totalNutritionalValues.calories}</p>
                                <p>Proteins: {recipe.totalNutritionalValues.proteins}</p>
                                <p>Fats: {recipe.totalNutritionalValues.fats}</p>
                                <p>Carbs: {recipe.totalNutritionalValues.carbs}</p>
                                <div>
                                    {recipe.ingredients.map((ingredient, j) => (
                                        <div key={j}>
                                            <p>{ingredient.ingredientName}</p>
                                            <p>Calories: {ingredient.calories}</p>
                                            <p>Proteins: {ingredient.proteins}</p>
                                            <p>Fats: {ingredient.fats}</p>
                                            <p>Carbs: {ingredient.carbs}</p>
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