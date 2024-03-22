import OpenAI from "openai";

import User from '../models/user.model.js';
import WorkoutPlan from '../models/workoutPlan.model.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const createWorkoutPlan = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select();

        const prompt = `Con base a los siguientes datos, crea un plan de entrenamiento:
        Nombre: ${user.name}
        Género: ${user.gender}
        Fecha de Nacimiento: ${user.dateOfBirth}
        Peso: ${user.weight} kg
        Altura: ${user.height} cm
        Meta principal: ${user.mainGoal}
        Preferencias dietéticas: ${user.dieteticPreferences}
        Experiencia en ejercicio: ${user.fitnessExperience}
        Limitaciones médicas: ${user.medicLimitations}
        Preferencias fitness personales: ${user.personalFitnessPreferences}
        El plan de entrenamiento tiene que ser creado como si TU FUESES un nutriólogo y entrenador profesional, con ejercicios que se adapten a la persona, con ejercicios de fuerza, cardio, etc.

        El plan de entrenamiento tienes que dividirlo en un json de una sola línea, así:{"name":"nombre del ejercicio", "type":"tipo del ejercicio(cardio, fuerza, etc), "caloriesBurned":"calorias quemadas", "difficulty":"dificultad del ejercicio", "instructions":"instrucciones del ejercicio", "requiredEquipment":"equipo requerido para el ejercicio, si no hay equipo requerido, pon simplemente que no hay"} No pongas cosas como GR, KG, etc, solo el número. Ejemplo: 1, 2, 3, etc.`

        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            temperature: 1,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        const workoutPlanData = JSON.parse(response.choices[0].text);

        const workoutPlan = new WorkoutPlan({
            ...workoutPlanData,
            user: user._id
        });

        await workoutPlan.save();
        res.json(workoutPlan);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    };
};

const createPersonalizedWorkoutPlan = async (req, res) => {
    const { name, type, caloriesBurned, difficulty, instructions, requiredEquipment, user } = req.body;

    try {
        const workoutPlan = new WorkoutPlan({
            name,
            type,
            caloriesBurned,
            difficulty,
            instructions,
            requiredEquipment,
            user
        });

        await workoutPlan.save();
        res.json(workoutPlan);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    };
};

const getWorkoutPlans = async (req, res) => {
    try {
        const workoutPlans = await WorkoutPlan.find().populate('user', 'name');
        res.json(workoutPlans);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    };
};

export {
    createWorkoutPlan,
    createPersonalizedWorkoutPlan,
    getWorkoutPlans
};
