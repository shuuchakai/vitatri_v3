import OpenAI from 'openai';

import User from '../models/user.model.js';
import DietPlan from '../models/dietPlan.model.js';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "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",
});


const createDietPlan = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select();

        const prompt = `Con base a los siguientes datos, crea un plan de dietas:
        Nombre: ${user.name}
        Género: ${user.gender}
        Fecha de Nacimiento: ${user.dateOfBirth}
        Peso: ${user.weight} kg
        Altura: ${user.height} cm
        Meta principal: ${user.mainGoal}
        Preferencias dietéticas: ${user.dieteticPreferences}
        Limitaciones médicas: ${user.medicLimitations}
        Experiencia en ejercicio: ${user.fitnessExperience}

        Considera el gasto energético total con el metabolismo basal y el nivel de actividad física.

        El plan de dietas tienes que dividirlo en un json de una sola línea, así:{"name": "nombre del plan de dieta","description": "pequeña descripción de la receta","recipes": [{"recipeName": "nombre de la receta","ingredients": [{"ingredientName": "nombre del ingrediente","calories": "calorias del ingrediente","proteins": "proteinas del ingrediente","carbs": "carbohidratos del ingrediente","fats": "grasas del ingrediente"}],"totalNutritionalValues": {"calories": "calorias totales de la receta","proteins": "proteinas totales de la receta","carbs": "carbohidratos totales de la receta","fats": "grasas totales de la receta"}}]} No pongas cosas como GR, KG, etc, solo el número. Ejemplo: 1, 2, 3, etc.`;

        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            temperature: 1,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        const dietPlanData = JSON.parse(response.choices[0].text);

        console.log(user);
        console.log(response.choices[0].text);

        const dietPlan = new DietPlan({
            ...dietPlanData,
            user: user._id
        });

        await dietPlan.save();

        res.json(dietPlan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const createPersonalizedDietPlan = async (req, res) => {
    const { name, description, recipes, user } = req.body;

    try {
        const dietPlan = new DietPlan({
            name,
            description,
            recipes,
            user
        });

        await dietPlan.save();

        res.json(dietPlan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const getDietPlans = async (req, res) => {
    try {
        const dietPlans = await DietPlan.find();
        res.json(dietPlans);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const updateDietPlan = async (req, res) => {
    const { name, description, recipes } = req.body;

    const dietPlanFields = {};
    if (name) dietPlanFields.name = name;
    if (description) dietPlanFields.description = description;
    if (recipes) dietPlanFields.recipes = recipes;

    try {
        let dietPlan = await DietPlan.findById(req.params.id);

        if (!dietPlan) return res.status(404).json({ msg: 'Plan de dieta no encontrado' });

        dietPlan = await DietPlan.findByIdAndUpdate(
            req.params.id,
            { $set: dietPlanFields },
            { new: true }
        );

        res.json(dietPlan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const deleteDietPlan = async (req, res) => {
    try {
        let dietPlan = await DietPlan.findById(req.params.id);

        if (!dietPlan) return res.status(404).json({ msg: 'Plan de dieta no encontrado' });

        await DietPlan.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Plan de dieta eliminado' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

export { createDietPlan, createPersonalizedDietPlan, getDietPlans, updateDietPlan, deleteDietPlan };
