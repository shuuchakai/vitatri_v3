import { useState } from 'react';

import BasicInfo from './BasicInfo/BasicInfo';
import BiologicalSex from './BiologicalSex/BiologicalSex';
import HealthGeneralInformation from './HealthGeneralInformation/HealthGeneralInformation';
import MedicLimitations from './MedicLimitations/MedicLimitations';
import PersonalFitnessPreferences from './PersonalFitnessPreferences/PersonalFitnessPreferences';
import DieteticPreferences from './DieteticPreferences/DieteticPreferences';
import FinalStep from './FinalStep/FinalStep';

function Register() {
    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        biologicalSex: '',
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
            return <BiologicalSex nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={userData} />
        case 3:
            return <HealthGeneralInformation nextStep={nextStep} handleChange={handleChange} values={userData} errors={errors} setErrors={setErrors} />
        case 4:
            return <MedicLimitations nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={userData} />
        case 5:
            return <PersonalFitnessPreferences nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={userData} />
        case 6:
            return <DieteticPreferences nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={userData} />
        case 7:
            return <FinalStep prevStep={prevStep} userData={userData} />
    }

}

export default Register