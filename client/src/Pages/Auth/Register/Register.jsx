import { useState } from 'react';

import BasicInfo from './BasicInfo/BasicInfo';

function Register() {
    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        dateOfBirth: '',
        height: '',
        weight: '',
        mainGoal: '',
        medicLimitations: [],
        personalFitnessPreferences: [],
        fitnessExperience: '',
        dieteticPreferences: [],
        bloodType: '',
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (input) => (e) => {
        setUserData({ ...userData, [input]: e.target.value });
    }

    switch (currentStep) {
        case 1:
            return <BasicInfo nextStep={nextStep} handleChange={handleChange} values={userData} errors={errors} setErrors={setErrors} />
        case 2:
            
    }

}

export default Register