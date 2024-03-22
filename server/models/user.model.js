import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    biologicalSex: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true,
        min: 0,
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    dieteticPreferences: {
        type: String,
        // enum: ["Vegetariano", "Vegano", "Sin gluten", "Sin lactosa", "Sin azúcar", "Sin frutos secos", "Sin mariscos", "Sin soja", "Sin huevos", "Sin trigo", "Sin maíz", "Sin arroz", "Sin carne", "Sin pescado", "Sin cerdo", "Sin pollo", "Sin ternera", "Sin cordero", "Sin pavo", "Sin pato", "Sin conejo"]
    },
    fitnessExperience: {
        type: String,
        // enum: ["Principiante", "Intermedio", "Avanzado"],
    },
    medicLimitations: {
        type: String,
        // enum: ["Diabetes", "Hipertensión", "Hipotensión", "Colesterol alto", "Triglicéridos altos", "Enfermedad cardíaca", "Enfermedad pulmonar", "Enfermedad renal", "Enfermedad hepática", "Enfermedad tiroidea", "Enfermedad autoinmune", "Enfermedad gastrointestinal", "Enfermedad neurológica", "Enfermedad mental", "Enfermedad ósea", "Enfermedad muscular", "Enfermedad articular", "Enfermedad de la piel", "Enfermedad de los ojos", "Enfermedad de los oídos", "Enfermedad de la nariz", "Enfermedad de la garganta", "Enfermedad de la boca", "Enfermedad de los dientes", "Enfermedad de la lengua", "Enfermedad de la mandíbula", "Enfermedad de la cabeza", "Enfermedad de la cara", "Enfermedad de la nuca", "Enfermedad de la espalda", "Enfermedad de los hombros", "Enfermedad de los brazos", "Enfermedad de los codos", "Enfermedad de los antebrazos", "Enfermedad de las muñecas", "Enfermedad de las manos", "Enfermedad de los dedos", "Enfermedad de la cintura", "Enfermedad de las caderas", "Enfermedad de los muslos", "Enfermedad de las rodillas", "Enfermedad de las pantorrillas", "Enfermedad de los tobillos", "Enfermedad de los pies", "Enfermedad de los dedos de los pies", "Enfermedad de las uñas"]
    },
    bloodType: {
        type: String,
        // enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    personalFitnessPreferences: {
        type: String,
        // enum: ["Entrenamiento en casa", "Entrenamiento en gimnasio", "Entrenamiento al aire libre", "Entrenamiento en grupo", "Entrenamiento individual", "Entrenamiento con máquinas", "Entrenamiento con pesas", "Entrenamiento con bandas elásticas", "Entrenamiento con TRX", "Entrenamiento con pelota medicinal", "Entrenamiento con kettlebell", "Entrenamiento con barra"]
    },
    mainGoal: {
        type: String,
        enum: ["Incrementar masa muscular", "Incrementar peso", "Mantener peso", "Perder peso"],
    },
    specificGoals: [{
        type: Schema.Types.ObjectId,
        ref: "SpecificGoal"
    }],
    dietPlans: [{
        type: Schema.Types.ObjectId,
        ref: "DietPlan"
    }],
    workoutPlans: [{
        type: Schema.Types.ObjectId,
        ref: "WorkoutPlan"
    }],
    waterTracking: [{
        type: Schema.Types.ObjectId,
        ref: "WaterTracking"
    }],
}, { timestamps: true });

const User = model('User', userSchema);

export default User;