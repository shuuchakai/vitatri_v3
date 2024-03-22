import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import RegisterInputContainer from '../../../Components/UI/RegisterInputContainer/RegisterInputContainer';
import ButtonInput from '../../../Components/UI/ButtonInput/ButtonInput';
import CustomAlert from '../../../Components/UI/CustomAlert/CustomAlert';

import './Register.css';

axios.defaults.withCredentials = true;

const heights = Array.from({ length: 81 }, (_, i) => (i + 120).toString());
const weights = Array.from({ length: 161 }, (_, i) => (i + 40).toString());
const sexs = Array("Masculino", "Femenino");
const bloodTypes = Array("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-");
const mainGoals = Array("Incrementar masa muscular", "Incrementar peso", "Mantener peso", "Perder peso");
const dieteticPreferencess = Array("Vegetariano", "Vegano", "Sin gluten", "Sin lactosa", "Sin azúcar", "Sin frutos secos", "Sin mariscos", "Sin soja", "Sin huevos", "Sin trigo", "Sin maíz", "Sin arroz", "Sin carne", "Sin pescado", "Sin cerdo", "Sin pollo", "Sin ternera", "Sin cordero", "Sin pavo", "Sin pato", "Sin conejo");
const fitnessExperiences = Array("Principiante", "Intermedio", "Avanzado");
const medicLimitationss = Array("Diabetes", "Hipertensión", "Hipotensión", "Colesterol alto", "Triglicéridos altos", "Enfermedad cardíaca", "Enfermedad pulmonar", "Enfermedad renal", "Enfermedad hepática", "Enfermedad tiroidea", "Enfermedad autoinmune", "Enfermedad gastrointestinal", "Enfermedad neurológica", "Enfermedad mental", "Enfermedad ósea", "Enfermedad muscular", "Enfermedad articular", "Enfermedad de la piel", "Enfermedad de los ojos", "Enfermedad de los oídos", "Enfermedad de la nariz", "Enfermedad de la garganta", "Enfermedad de la boca", "Enfermedad de los dientes", "Enfermedad de la lengua", "Enfermedad de la mandíbula", "Enfermedad de la cabeza", "Enfermedad de la cara", "Enfermedad de la nuca", "Enfermedad de la espalda", "Enfermedad de los hombros", "Enfermedad de los brazos", "Enfermedad de los codos", "Enfermedad de los antebrazos", "Enfermedad de las muñecas", "Enfermedad de las manos", "Enfermedad de los dedos", "Enfermedad de la cintura", "Enfermedad de las caderas", "Enfermedad de los muslos", "Enfermedad de las rodillas", "Enfermedad de las pantorrillas", "Enfermedad de los tobillos", "Enfermedad de los pies", "Enfermedad de los dedos de los pies", "Enfermedad de las uñas");
const personalFitnessPreferencess = Array("Entrenamiento en casa", "Entrenamiento en gimnasio", "Entrenamiento al aire libre", "Entrenamiento en grupo", "Entrenamiento individual", "Entrenamiento con máquinas", "Entrenamiento con pesas", "Entrenamiento con bandas elásticas", "Entrenamiento con TRX", "Entrenamiento con pelota medicinal", "Entrenamiento con kettlebell", "Entrenamiento con barra");

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setBirthDate] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [biologicalSex, setBiologicalSex] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [mainGoal, setMainGoal] = useState('');
    const [dieteticPreferences, setDieteticPreferences] = useState('');
    const [fitnessExperience, setFitnessExperience] = useState('');
    const [medicLimitations, setMedicLimitations] = useState('');
    const [personalFitnessPreferences, setPersonalFitnessPreferences] = useState('');



    const [step, setStep] = useState(1);
    const [showErrors, setShowErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowErrors(true);

        if (step < 6) {
            setStep(step + 1);
        } else {
            try {
                const response = await axios.post('http://localhost:5000/api/user/register', { name, email, password, dateOfBirth, height, weight, bloodType, mainGoal, dieteticPreferences, fitnessExperience, medicLimitations, personalFitnessPreferences, biologicalSex });

                console.log(response.data);
                localStorage.setItem('userData', JSON.stringify(response.data));

                navigate('/dashboard');
            } catch (error) {
                console.log(error);
                setErrorMessage('Error al registrarse. Por favor, inténtelo de nuevo.');
            }
        }
    };

    const handleNameChange = (newName) => {
        setName(newName);
    };

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    const handleBirthChange = (newBirth) => {
        setBirthDate(newBirth);
    };

    const handleHeightChange = (newHeight) => {
        setHeight(newHeight);
    };

    const handleWeightChange = (newWeight) => {
        setWeight(newWeight);
    };

    const handleSexChange = (newSex) => {
        setBiologicalSex(newSex);
    };

    const handleBloodChange = (newBlood) => {
        setBloodType(newBlood);
    };

    const handleMainGoalChange = (newMainGoal) => {
        setMainGoal(newMainGoal);
    };

    const handleDieteticPreferencesChange = (newDieteticPreferences) => {
        setDieteticPreferences(newDieteticPreferences);
    };

    const handleFitnessExperienceChange = (newFitnessExperience) => {
        setFitnessExperience(newFitnessExperience);
    };

    const handleMedicLimitationsChange = (newMedicLimitations) => {
        setMedicLimitations(newMedicLimitations);
    };

    const handlePersonalFitnessPreferencesChange = (newPersonalFitnessPreferences) => {
        setPersonalFitnessPreferences(newPersonalFitnessPreferences);
    };


    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleCloseAlert = () => {
        setErrorMessage('');
    };

    return (
        <>
            <div className="register_container">
                {/* <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div> */}
                {errorMessage && <CustomAlert message={errorMessage} type="error" onClose={handleCloseAlert} />}
                <Link to="/" className="register_containerLogo">vitatri</Link>
                <form className="register_containerCard" onSubmit={handleSubmit}>
                    <p className="register_containerCard_title">Crear Cuenta</p>
                    {step === 1 && (
                        <>
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleNameChange}
                                inputType="text"
                                labelText="Nombre"
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleEmailChange}
                                inputType="email"
                                labelText="Correo Electrónico"
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handlePasswordChange}
                                inputType="password"
                                labelText="Contraseña"
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleBirthChange}
                                inputType="date"
                                labelText="Fecha de Nacimiento"
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleSexChange}
                                inputType="select"
                                labelText="Sexo Biológico"
                                options={sexs}
                            />
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleHeightChange}
                                inputType="select"
                                labelText="Altura (en centímetros)"
                                options={heights}
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleWeightChange}
                                inputType="select"
                                labelText="Peso (en kilogramos)"
                                options={weights}
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleBloodChange}
                                inputType="select"
                                labelText="Tipo de Sangre"
                                options={bloodTypes}
                            />
                        </>
                    )}
                    {step === 3 && (
                        <RegisterInputContainer
                            showErrors={showErrors}
                            onInputChange={handleMainGoalChange}
                            inputType="select"
                            labelText="Objetivo Principal"
                            name="mainGoal"
                            options={mainGoals}
                        />
                    )}
                    {step === 4 && (
                        <RegisterInputContainer
                            showErrors={showErrors}
                            onInputChange={handleDieteticPreferencesChange}
                            inputType="select"
                            labelText="Preferencias Dietéticas"
                            name="dieteticPreferences"
                            options={dieteticPreferencess}
                        />
                    )}
                    {step === 5 && (
                        <>
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handleFitnessExperienceChange}
                                inputType="select"
                                labelText="Experiencia de Ejercicio"
                                name="fitnessExperience"
                                options={fitnessExperiences}
                            />
                            <RegisterInputContainer
                                showErrors={showErrors}
                                onInputChange={handlePersonalFitnessPreferencesChange}
                                inputType="select"
                                labelText="Preferencias personales de Ejercicio"
                                name="personalFitnessPreferences"
                                options={personalFitnessPreferencess}
                            />
                        </>
                    )}
                    {step === 6 && (
                        <RegisterInputContainer
                            showErrors={showErrors}
                            onInputChange={handleMedicLimitationsChange}
                            inputType="select"
                            labelText="Limitaciones Médicas"
                            name="medicLimitations"
                            options={medicLimitationss}
                        />
                    )}
                    <div className="register_containerCard_buttonsContainer">
                        {step > 1 && <ButtonInput buttonType="button" buttonContent="Retroceder" onClick={handleBack} />}
                        <ButtonInput buttonType="submit" buttonContent={step < 6 ? 'Siguiente' : 'Registrarse'} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;